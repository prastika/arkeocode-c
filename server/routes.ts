import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import path from "path";
import fs from "fs";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

// Configure multer for file upload
const upload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: "Email is required" });
      }

      // In a real application, you would store this in a database
      // or send an email notification
      console.log("Contact form submission:", email);
      
      res.json({ success: true, message: "Contact form submitted successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  // Object detection endpoint
  app.post("/api/detect", upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const inputPath = req.file.path;
      const outputPath = path.join("uploads", `detected_${Date.now()}_${req.file.originalname}`);
      const modelPath = path.join("attached_assets", "oil_palm_fruit_yolov11n_1759980314813.pt");

      // Ensure uploads directory exists
      if (!fs.existsSync("uploads")) {
        fs.mkdirSync("uploads", { recursive: true });
      }

      // Run Python detection script
      const pythonCommand = `python3 server/detect.py "${inputPath}" "${outputPath}" "${modelPath}"`;
      
      try {
        const { stdout, stderr } = await execAsync(pythonCommand);
        
        if (stderr) {
          console.error("Python stderr:", stderr);
        }
        
        console.log("Python stdout:", stdout);

        // Check if output file was created
        if (!fs.existsSync(outputPath)) {
          throw new Error("Detection failed - output file not created");
        }

        // Send the detected image back
        res.sendFile(path.resolve(outputPath), (err) => {
          // Clean up files after sending
          if (fs.existsSync(inputPath)) fs.unlinkSync(inputPath);
          if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
          
          if (err) {
            console.error("Error sending file:", err);
          }
        });

      } catch (execError: any) {
        console.error("Detection error:", execError);
        
        // Clean up input file
        if (fs.existsSync(inputPath)) {
          fs.unlinkSync(inputPath);
        }
        
        return res.status(500).json({ 
          error: "Object detection failed. Please ensure Python dependencies are installed.",
          details: execError.message
        });
      }

    } catch (error) {
      console.error("Detection endpoint error:", error);
      res.status(500).json({ error: "Failed to process detection request" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
