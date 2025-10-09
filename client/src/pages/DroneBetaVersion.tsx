import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Calendar, FileText, Wrench, Target, Zap, Shield } from "lucide-react";
import logoImage from "@assets/Group 1_1759888320639.png";

export default function DroneBetaVersion() {
  const updates = [
    {
      date: "October 2025",
      version: "Beta v2.3",
      title: "Enhanced Obstacle Detection System",
      description: "Implemented advanced omnidirectional sensing with improved terrain-following capabilities. AI-powered obstacle prediction reduces flight interruptions by 45%.",
      category: "Safety & Navigation"
    },
    {
      date: "September 2025",
      version: "Beta v2.2",
      title: "Extended Flight Time Optimization",
      description: "Battery management system update increases flight time from 38 to 43 minutes. New power-saving mode allows coverage of up to 150 hectares per mission.",
      category: "Performance"
    },
    {
      date: "August 2025",
      version: "Beta v2.1",
      title: "Camera Resolution & Sensor Upgrade",
      description: "Upgraded to 20MP 4/3 CMOS sensor with enhanced low-light performance. Mechanical shutter speed improved to 1/2000s for clearer imagery during high-speed operations.",
      category: "Imaging"
    },
    {
      date: "July 2025",
      version: "Beta v2.0",
      title: "AI Computer Vision Integration",
      description: "Real-time fresh fruit bunch (FFB) detection and counting with 95% accuracy. Integration with cloud processing enables instant data transmission and analysis.",
      category: "AI & Software"
    },
    {
      date: "June 2025",
      version: "Beta v1.9",
      title: "Weather Resistance Enhancement",
      description: "Improved IP rating and wind resistance up to 12 m/s. All-weather capability ensures consistent operations in tropical plantation environments.",
      category: "Durability"
    },
    {
      date: "May 2025",
      version: "Beta v1.8",
      title: "Automated Flight Path Planning",
      description: "Smart route optimization reduces overlap and maximizes coverage efficiency. Automated mission planning reduces setup time by 60%.",
      category: "Automation"
    }
  ];

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
          
          <Link href="/drone-specifications">
            <Button variant="outline" className="gap-2" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              Back to Specifications
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4927F5] to-[#6B46F5] flex items-center justify-center" data-testid="icon-beta">
              <Wrench className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-main">
            Drone Development Updates
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-testid="text-description">
            Track our continuous improvements and beta version releases as we refine our drone technology for precision agriculture.
          </p>
        </div>

        {/* Current Beta Version Highlight */}
        <div className="bg-gradient-to-r from-[#4927F5] to-[#6B46F5] rounded-lg shadow-xl p-8 mb-12 text-white" data-testid="section-current-version">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full" data-testid="badge-current">
                  CURRENT VERSION
                </span>
                <span className="text-white/90" data-testid="text-current-date">October 2025</span>
              </div>
              <h2 className="text-2xl font-bold mb-2" data-testid="text-current-version">Beta v2.3</h2>
              <h3 className="text-xl mb-3" data-testid="text-current-title">Enhanced Obstacle Detection System</h3>
              <p className="text-white/90 leading-relaxed" data-testid="text-current-description">
                Our latest beta release features advanced omnidirectional sensing with improved terrain-following capabilities. 
                AI-powered obstacle prediction reduces flight interruptions by 45%, ensuring safer and more efficient operations.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Column Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow" data-testid="feature-card-1">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#4927F5]/10 flex items-center justify-center">
                <Target className="w-8 h-8 text-[#4927F5]" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-1">95% Accuracy</h3>
            <p className="text-gray-600" data-testid="feature-description-1">
              AI-powered computer vision achieves 95% accuracy in fresh fruit bunch detection and counting across all weather conditions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow" data-testid="feature-card-2">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#4927F5]/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-[#4927F5]" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-2">Real-Time Processing</h3>
            <p className="text-gray-600" data-testid="feature-description-2">
              Instant data transmission and cloud processing enable real-time analysis and immediate yield forecasting during flight operations.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow" data-testid="feature-card-3">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#4927F5]/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#4927F5]" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-3">Enhanced Safety</h3>
            <p className="text-gray-600" data-testid="feature-description-3">
              Advanced obstacle detection and terrain-following technology reduces flight interruptions by 45% for safer autonomous operations.
            </p>
          </div>
        </div>

        {/* Update Timeline */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8" data-testid="heading-timeline">
            Development Timeline
          </h2>
          
          {updates.map((update, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#4927F5] hover:shadow-xl transition-shadow"
              data-testid={`update-card-${index}`}
            >
              <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#4927F5]" />
                  <span className="text-sm text-gray-600" data-testid={`update-date-${index}`}>{update.date}</span>
                  <span className="text-sm font-semibold text-[#4927F5] bg-[#4927F5]/10 px-3 py-1 rounded-full" data-testid={`update-version-${index}`}>
                    {update.version}
                  </span>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full" data-testid={`update-category-${index}`}>
                  {update.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" data-testid={`update-title-${index}`}>
                {update.title}
              </h3>
              <p className="text-gray-600 leading-relaxed" data-testid={`update-description-${index}`}>
                {update.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gray-100 rounded-lg p-8 text-center" data-testid="section-cta">
          <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="heading-cta">
            Want to Test Our Latest Beta?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto" data-testid="text-cta-description">
            Join our beta testing program and get early access to the latest drone technology improvements.
          </p>
          <a href="https://wa.me/6281387873919" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#4927F5] hover:bg-[#3818D4] text-white text-lg px-8 py-6" data-testid="button-contact">
              Contact Us for Beta Access
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
