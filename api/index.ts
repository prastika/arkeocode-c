import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

const upload = multer({ storage: multer.memoryStorage() });

app.post('/api/detect', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const detections = [
      {
        class: 'FFB',
        confidence: 0.92,
        bbox: { x: 120, y: 80, width: 60, height: 80 }
      },
      {
        class: 'FFB',
        confidence: 0.88,
        bbox: { x: 250, y: 150, width: 55, height: 75 }
      },
      {
        class: 'Flower',
        confidence: 0.85,
        bbox: { x: 400, y: 120, width: 40, height: 60 }
      }
    ];

    res.json({
      success: true,
      detections,
      summary: {
        ffb_count: 2,
        flower_count: 1,
        total_objects: 3
      },
      message: 'Demo mode: Simulated detections (production requires YOLO model)'
    });
  } catch (error: any) {
    console.error('Detection error:', error);
    res.status(500).json({ error: error.message || 'Detection failed' });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    console.log('Contact form submission:', { name, email, message });
    
    res.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.'
    });
  } catch (error: any) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.post('/api/survey', async (req, res) => {
  try {
    const surveyData = req.body;
    
    console.log('Survey submission:', surveyData);
    
    let recommendation = 'Comprehensive Monitoring';
    if (surveyData.needRealTimeYield === 'yes' || 
        surveyData.yieldConfidence === 'low' ||
        surveyData.plantDensity === 'dense') {
      recommendation = 'AI Drone Census';
    }
    
    res.json({
      success: true,
      recommendation,
      message: 'Survey completed successfully'
    });
  } catch (error: any) {
    console.error('Survey error:', error);
    res.status(500).json({ error: 'Failed to process survey' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'arkeocode-backend' });
});

export default app;
