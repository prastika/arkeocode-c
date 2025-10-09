#!/usr/bin/env python3
import sys
import os
import random
from pathlib import Path

def detect_objects_demo(input_path, output_path, model_path):
    """
    Demo version: Simulates object detection by drawing sample bounding boxes
    
    In a production environment with PyTorch/Ultralytics installed, 
    this would use the actual YOLO model for detection.
    
    Args:
        input_path: Path to input image
        output_path: Path to save output image with detections
        model_path: Path to YOLO model (.pt file) - used for reference only in demo
    """
    try:
        import cv2
        import numpy as np
        
        # Read the image
        img = cv2.imread(input_path)
        if img is None:
            print(f"Error: Could not read image from {input_path}", file=sys.stderr)
            return False
        
        height, width = img.shape[:2]
        
        # Demo: Create realistic-looking detections
        # In production, these would come from the actual YOLO model
        demo_detections = [
            {
                'label': 'BUAH HITAM',
                'confidence': 0.87,
                'box': (int(width * 0.2), int(height * 0.3), int(width * 0.15), int(height * 0.12))
            },
            {
                'label': 'BUNGA BETINA',
                'confidence': 0.92,
                'box': (int(width * 0.5), int(height * 0.2), int(width * 0.18), int(height * 0.15))
            },
            {
                'label': 'BUAH HITAM',
                'confidence': 0.79,
                'box': (int(width * 0.65), int(height * 0.5), int(width * 0.14), int(height * 0.13))
            },
            {
                'label': 'BUNGA JANTAN',
                'confidence': 0.83,
                'box': (int(width * 0.35), int(height * 0.6), int(width * 0.16), int(height * 0.11))
            },
        ]
        
        # Color map for different classes
        colors = {
            'BUAH HITAM': (255, 144, 30),      # Blue
            'BUNGA BETINA': (255, 0, 255),     # Magenta  
            'BUNGA JANTAN': (0, 165, 255),     # Orange
        }
        
        # Draw bounding boxes and labels
        for detection in demo_detections:
            x, y, w, h = detection['box']
            label = detection['label']
            confidence = detection['confidence']
            color = colors.get(label, (0, 255, 0))
            
            # Draw rectangle
            cv2.rectangle(img, (x, y), (x + w, y + h), color, 2)
            
            # Draw label background
            label_text = f"{label} {confidence:.2f}"
            (text_w, text_h), _ = cv2.getTextSize(label_text, cv2.FONT_HERSHEY_SIMPLEX, 0.6, 1)
            cv2.rectangle(img, (x, y - text_h - 10), (x + text_w, y), color, -1)
            
            # Draw label text
            cv2.putText(img, label_text, (x, y - 5), 
                       cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 255), 1)
        
        # Add watermark indicating this is a demo
        cv2.putText(img, "DEMO: Simulated Detection", (10, height - 20), 
                   cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)
        
        # Save the result
        cv2.imwrite(output_path, img)
        
        print(f"Demo detection complete. Results saved to {output_path}")
        print(f"Note: This is a demonstration version. In production, install PyTorch and Ultralytics for actual model inference.")
        return True
        
    except ImportError as e:
        print(f"Error: Required packages not installed. {e}", file=sys.stderr)
        print("OpenCV is required. Install with: pip install opencv-python", file=sys.stderr)
        return False
    except Exception as e:
        print(f"Error during detection: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python detect.py <input_image> <output_image> <model_path>", file=sys.stderr)
        sys.exit(1)
    
    input_path = sys.argv[1]
    output_path = sys.argv[2]
    model_path = sys.argv[3]
    
    if not os.path.exists(input_path):
        print(f"Error: Input file not found: {input_path}", file=sys.stderr)
        sys.exit(1)
    
    # Note: In demo mode, we don't require the model file to exist
    # In production, you would check: if not os.path.exists(model_path): ...
    
    success = detect_objects_demo(input_path, output_path, model_path)
    sys.exit(0 if success else 1)
