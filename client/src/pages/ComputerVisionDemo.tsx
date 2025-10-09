import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Upload, Image as ImageIcon, Video, ArrowLeft } from "lucide-react";
import logoImage from "@assets/Group 1_1759888320639.png";

export default function ComputerVisionDemo() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [detectedImageUrl, setDetectedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileType, setFileType] = useState<'image' | 'video' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    setDetectedImageUrl(null);
    setError(null);

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    if (file.type.startsWith('image/')) {
      setFileType('image');
    } else if (file.type.startsWith('video/')) {
      setFileType('video');
    }
  };

  const handleDetect = async () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/api/detect', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Detection failed');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setDetectedImageUrl(url);
    } catch (error) {
      console.error('Error during detection:', error);
      setError(error instanceof Error ? error.message : 'Error processing image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50" data-testid="header">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer" data-testid="logo">
              <img src={logoImage} alt="Arkeocode" className="h-10 w-auto" />
            </div>
          </Link>
          
          <Link href="/cakravolo">
            <Button variant="outline" className="gap-2" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              Back to Cakravolo
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-demo">
            Computer Vision Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8" data-testid="text-description">
            Upload an image or video to see our AI-powered object detection in action. 
            The system will identify and count fresh fruit bunches (FFB) and flowers in real-time.
          </p>
          
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/nZRVsYXUT1E"
                title="Computer Vision Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-testid="video-demo"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="bg-white rounded-lg shadow-lg p-8" data-testid="upload-section">
            <h2 className="text-2xl font-bold text-gray-900 mb-6" data-testid="heading-upload">
              Upload Media
            </h2>

            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#4927F5] transition-colors">
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                  data-testid="input-file"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 mb-2" data-testid="text-upload-instruction">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-sm text-gray-500" data-testid="text-upload-formats">
                    Images (PNG, JPG, JPEG) or Videos (MP4, AVI, MOV)
                  </p>
                </label>
              </div>

              {previewUrl && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    {fileType === 'image' ? (
                      <ImageIcon className="w-5 h-5" />
                    ) : (
                      <Video className="w-5 h-5" />
                    )}
                    <span className="font-medium" data-testid="text-selected-file">
                      {selectedFile?.name}
                    </span>
                  </div>

                  {fileType === 'image' ? (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-full rounded-lg"
                      data-testid="preview-image"
                    />
                  ) : (
                    <video
                      src={previewUrl}
                      controls
                      className="w-full rounded-lg"
                      data-testid="preview-video"
                    />
                  )}

                  <Button
                    onClick={handleDetect}
                    disabled={isProcessing}
                    className="w-full bg-[#4927F5] hover:bg-[#3818D4] text-white"
                    data-testid="button-detect"
                  >
                    {isProcessing ? 'Processing...' : 'Detect Objects'}
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-lg shadow-lg p-8" data-testid="results-section">
            <h2 className="text-2xl font-bold text-gray-900 mb-6" data-testid="heading-results">
              Detection Results
            </h2>

            {!detectedImageUrl && !isProcessing && !error && (
              <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-500" data-testid="text-no-results">
                  Upload and process a file to see results
                </p>
              </div>
            )}

            {isProcessing && (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-[#4927F5] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600" data-testid="text-processing">
                    Processing with AI Computer Vision...
                  </p>
                </div>
              </div>
            )}

            {error && !isProcessing && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-yellow-800 font-medium mb-2" data-testid="text-error-title">
                  ⚠️ Demo Environment Notice
                </p>
                <p className="text-yellow-700 text-sm leading-relaxed" data-testid="text-error-message">
                  {error}
                </p>
              </div>
            )}

            {detectedImageUrl && !isProcessing && (
              <div className="space-y-4">
                <img
                  src={detectedImageUrl}
                  alt="Detected objects"
                  className="w-full rounded-lg"
                  data-testid="result-image"
                />
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium" data-testid="text-success">
                    ✓ Detection Complete
                  </p>
                  <p className="text-green-600 text-sm mt-1" data-testid="text-success-details">
                    Objects have been identified and marked in the image above
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
