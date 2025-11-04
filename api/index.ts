import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { pathname } = new URL(req.url || '', `http://${req.headers.host}`);

  if (pathname === '/api/health') {
    return res.status(200).json({ status: 'ok', service: 'arkeocode-backend' });
  }

  if (pathname === '/api/contact' && req.method === 'POST') {
    try {
      const { name, email, message } = req.body;
      console.log('Contact form submission:', { name, email, message });
      return res.status(200).json({
        success: true,
        message: 'Thank you for contacting us! We will get back to you soon.'
      });
    } catch (error: any) {
      console.error('Contact form error:', error);
      return res.status(500).json({ error: 'Failed to send message' });
    }
  }

  if (pathname === '/api/survey' && req.method === 'POST') {
    try {
      const surveyData = req.body;
      console.log('Survey submission:', surveyData);
      
      let recommendation = 'Comprehensive Monitoring';
      if (surveyData.needRealTimeYield === 'yes' || 
          surveyData.yieldConfidence === 'low' ||
          surveyData.plantDensity === 'dense') {
        recommendation = 'AI Drone Census';
      }
      
      return res.status(200).json({
        success: true,
        recommendation,
        message: 'Survey completed successfully'
      });
    } catch (error: any) {
      console.error('Survey error:', error);
      return res.status(500).json({ error: 'Failed to process survey' });
    }
  }

  if (pathname === '/api/detect' && req.method === 'POST') {
    try {
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

      return res.status(200).json({
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
      return res.status(500).json({ error: error.message || 'Detection failed' });
    }
  }

  return res.status(404).json({ error: 'Not Found' });
}
