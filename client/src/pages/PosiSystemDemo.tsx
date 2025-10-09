import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, BarChart3, MapPin, TrendingUp, Database } from "lucide-react";
import logoImage from "@assets/Group 1_1759888320639.png";

export default function PosiSystemDemo() {
  const features = [
    {
      title: "Real-Time Positioning",
      description: "GPS-based tracking system provides accurate geolocation data for each detected fruit bunch, enabling precise field mapping.",
      icon: MapPin
    },
    {
      title: "Yield Analytics",
      description: "Advanced analytics dashboard processes drone-collected data to generate comprehensive yield forecasts and productivity reports.",
      icon: BarChart3
    },
    {
      title: "Trend Analysis",
      description: "Historical data comparison and trend analysis help identify productivity patterns and optimize harvest planning.",
      icon: TrendingUp
    },
    {
      title: "Data Integration",
      description: "Seamless integration with existing farm management systems allows for centralized data storage and accessibility.",
      icon: Database
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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="px-4 py-2 bg-[#4927F5]/10 rounded-full">
              <span className="text-[#4927F5] font-semibold text-sm" data-testid="badge-demo">LIVE DEMO SYSTEM</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="heading-main">
            POSI - Positioning & Insights System
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8" data-testid="text-description">
            Our advanced positioning and analytics platform transforms drone-collected data into actionable insights for precision agriculture.
          </p>
          <a href="https://replit.com/@prasttika/AgriVision" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#4927F5] hover:bg-[#3818D4] text-white text-lg px-8 py-6" data-testid="button-external-demo">
              View Live Demo on Replit
            </Button>
          </a>
        </div>

        {/* System Overview */}
        <div className="bg-gradient-to-r from-[#4927F5] to-[#6B46F5] rounded-lg shadow-xl p-8 md:p-12 text-white mb-16" data-testid="section-overview">
          <h2 className="text-3xl font-bold mb-6" data-testid="heading-overview">System Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Dashboard</h3>
              <p className="text-white/90 leading-relaxed">
                Monitor live drone operations and view real-time data processing. Track bunch census progress, 
                flight status, and instant yield calculations as data streams from the field.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Geospatial Mapping</h3>
              <p className="text-white/90 leading-relaxed">
                Visualize plantation data on interactive maps with precise GPS coordinates. 
                Each detected fruit bunch is georeferenced for accurate field-level analysis and reporting.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Yield Forecasting</h3>
              <p className="text-white/90 leading-relaxed">
                AI-powered algorithms analyze collected data to generate accurate yield predictions. 
                Historical trends and current census data combine to optimize harvest planning.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Data Export & Integration</h3>
              <p className="text-white/90 leading-relaxed">
                Export comprehensive reports in multiple formats (PDF, Excel, CSV). 
                API integration allows seamless connection with existing farm management systems.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-testid="heading-features">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                data-testid={`feature-card-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#4927F5]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#4927F5]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" data-testid={`feature-title-${index}`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed" data-testid={`feature-description-${index}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16" data-testid="section-specs">
          <h2 className="text-3xl font-bold text-gray-900 mb-8" data-testid="heading-specs">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-[#4927F5] pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Processing</h3>
              <p className="text-gray-600">Cloud-based processing with real-time data synchronization and instant visualization updates</p>
            </div>
            <div className="border-l-4 border-[#4927F5] pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">GPS Accuracy</h3>
              <p className="text-gray-600">Sub-meter positioning accuracy using RTK-GPS technology for precise geolocation</p>
            </div>
            <div className="border-l-4 border-[#4927F5] pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Storage</h3>
              <p className="text-gray-600">Secure cloud storage with automatic backup and multi-year historical data retention</p>
            </div>
            <div className="border-l-4 border-[#4927F5] pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Platform Compatibility</h3>
              <p className="text-gray-600">Web-based dashboard accessible from desktop, tablet, and mobile devices</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-100 rounded-lg p-8 text-center" data-testid="section-cta">
          <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="heading-cta">
            Experience the Full System
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto" data-testid="text-cta-description">
            See our POSI system in action with live data visualization and interactive features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://replit.com/@prasttika/AgriVision" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#4927F5] hover:bg-[#3818D4] text-white px-8 py-6" data-testid="button-view-demo">
                View Interactive Demo
              </Button>
            </a>
            <a href="https://wa.me/6281387873919" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-[#4927F5] text-[#4927F5] hover:bg-[#4927F5]/10 px-8 py-6" data-testid="button-contact-sales">
                Contact for Implementation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
