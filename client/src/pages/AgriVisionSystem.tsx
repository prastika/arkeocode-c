import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import logoImage from "@assets/Group 1_1759888320639.png";
import footerLogoImage from "@assets/Group 2_1759888453960.png";
import { Eye, Layers, Zap, Globe, Settings, TrendingUp } from "lucide-react";

export default function AgriVisionSystem() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#4927F5] text-white py-4 px-6 sticky top-0 z-50" data-testid="header">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer" data-testid="logo">
              <img src={logoImage} alt="Arkeocode" className="h-10 w-auto" />
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8" data-testid="nav-menu">
            <Link href="/" className="hover:opacity-80 transition-opacity" data-testid="link-home">Home</Link>
            <Link href="/cakravolo" className="hover:opacity-80 transition-opacity" data-testid="link-cakravolo">Cakravolo</Link>
            <Link href="/#service" className="hover:opacity-80 transition-opacity" data-testid="link-service">Service</Link>
            <Link href="/#article" className="hover:opacity-80 transition-opacity" data-testid="link-article">Article</Link>
          </nav>
          
          <Button className="bg-[#FF7D04] hover:bg-[#E06D03] text-white" data-testid="button-contact-header">
            Contact Us
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#D639D4] to-[#A020A4]" data-testid="section-hero">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-hero">
            AgriVision System
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto" data-testid="text-hero-description">
            Advanced agricultural intelligence platform powered by computer vision and AI analytics
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6 bg-white" data-testid="section-overview">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-[#D639D4]/10 text-[#D639D4] rounded-full text-sm font-medium mb-6" data-testid="badge-overview">
              Platform Overview
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="heading-overview">
              Next-Generation Agricultural Intelligence
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto" data-testid="text-overview">
              AgriVision System integrates cutting-edge computer vision, machine learning, and real-time data processing to provide comprehensive agricultural insights and decision support for plantation managers.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50" data-testid="section-features">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-testid="heading-features">
            System Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg" data-testid="feature-card-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#D639D4]/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-[#D639D4]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-1">
                  Computer Vision AI
                </h3>
                <p className="text-gray-600" data-testid="feature-description-1">
                  Advanced image recognition for crop identification, health assessment, and yield prediction with 98% accuracy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="feature-card-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#4927F5]/10 flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-[#4927F5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-2">
                  Multi-Layer Analysis
                </h3>
                <p className="text-gray-600" data-testid="feature-description-2">
                  Combines NDVI, thermal imaging, and RGB data for comprehensive plantation health monitoring.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="feature-card-3">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#FF7D04]/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#FF7D04]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-3">
                  Real-Time Processing
                </h3>
                <p className="text-gray-600" data-testid="feature-description-3">
                  Instant data processing and analysis with live updates to your dashboard for immediate action.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="feature-card-4">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#D639D4]/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-[#D639D4]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-4">
                  GIS Mapping Integration
                </h3>
                <p className="text-gray-600" data-testid="feature-description-4">
                  Seamless integration with Geographic Information Systems for spatial analysis and field planning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="feature-card-5">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#4927F5]/10 flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-[#4927F5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-5">
                  Customizable Workflows
                </h3>
                <p className="text-gray-600" data-testid="feature-description-5">
                  Tailor the system to your specific operational needs with flexible configuration options.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="feature-card-6">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#FF7D04]/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#FF7D04]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-6">
                  Predictive Analytics
                </h3>
                <p className="text-gray-600" data-testid="feature-description-6">
                  Machine learning models predict crop performance, disease outbreaks, and optimal harvest timing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white" data-testid="section-benefits">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-testid="heading-benefits">
            Platform Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-[#D639D4]" data-testid="benefit-card-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="benefit-title-1">
                  Enhanced Decision Making
                </h3>
                <p className="text-gray-600" data-testid="benefit-description-1">
                  Access to comprehensive data analytics enables informed strategic decisions for plantation management and resource allocation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-[#4927F5]" data-testid="benefit-card-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="benefit-title-2">
                  Operational Efficiency
                </h3>
                <p className="text-gray-600" data-testid="benefit-description-2">
                  Automate monitoring and analysis processes, reducing manual labor and increasing productivity across your operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-[#FF7D04]" data-testid="benefit-card-3">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="benefit-title-3">
                  Cost Optimization
                </h3>
                <p className="text-gray-600" data-testid="benefit-description-3">
                  Precise fertilizer and pesticide recommendations minimize waste and reduce input costs while maintaining crop health.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-[#D639D4]" data-testid="benefit-card-4">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="benefit-title-4">
                  Scalable Solutions
                </h3>
                <p className="text-gray-600" data-testid="benefit-description-4">
                  Cloud-based architecture supports operations from small farms to large-scale plantations without infrastructure limitations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50" data-testid="section-cta">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-br from-[#D639D4] to-[#A020A4] text-white p-12 text-center" data-testid="card-cta">
            <CardContent>
              <h2 className="text-4xl font-bold mb-4" data-testid="heading-cta">
                Transform Your Plantation with AgriVision
              </h2>
              <p className="mb-8 text-purple-100 max-w-3xl mx-auto" data-testid="text-cta-description">
                Experience the power of AI-driven agricultural intelligence. Schedule a demo to see AgriVision System in action.
              </p>
              <Button className="bg-white hover:bg-gray-100 text-[#D639D4] px-8 py-6 text-lg" data-testid="button-schedule-demo">
                Schedule Demo →
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 px-6" data-testid="footer">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="mb-4" data-testid="footer-logo">
                <img src={footerLogoImage} alt="Arkeocode" className="h-12 w-auto" />
              </div>
              
              <p className="text-gray-600 text-sm" data-testid="text-footer-description">
                Arkeocode is leading the future of Precision Agriculture by integrating high-speed UAV (Drone) capabilities with the analytical power of Computer Vision AI.
              </p>
            </div>

            <div data-testid="footer-services">
              <h3 className="font-bold mb-4" data-testid="text-services-heading">Our Services:</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li data-testid="service-item-1">Trossen Telling via Drone</li>
                <li data-testid="service-item-2">Oil Palm Productivity Analysis</li>
                <li data-testid="service-item-3">Land Cleanliness Monitoring</li>
                <li data-testid="service-item-4">Plant Spacing Optimization</li>
              </ul>
            </div>

            <div data-testid="footer-links">
              <h3 className="font-bold mb-4" data-testid="text-links-heading">Quick Links</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link href="/" className="hover:text-[#4927F5] transition-colors" data-testid="link-home">Home</Link></li>
                <li><Link href="/cakravolo" className="hover:text-[#4927F5] transition-colors" data-testid="link-cakravolo">Cakravolo</Link></li>
                <li><Link href="/#service" className="hover:text-[#4927F5] transition-colors" data-testid="link-service">Services</Link></li>
              </ul>
            </div>

            <div data-testid="footer-contact">
              <h3 className="font-bold mb-4" data-testid="text-contact-heading">Our Contact</h3>
              <p className="text-gray-600 text-sm mb-3" data-testid="text-email">
                <a href="mailto:arkeocode@gmail.com" className="hover:text-[#4927F5] transition-colors">
                  arkeocode@gmail.com
                </a>
              </p>
              <p className="text-gray-600 text-sm" data-testid="text-address">
                Jl. RC. Veteran Raya No.20 Lantai 4,<br />
                Jakarta Selatan 12330
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-600 text-sm" data-testid="footer-copyright">
            Copyright 2025. PT Arkeo Global Indonesia
          </div>
        </div>
      </footer>
    </div>
  );
}
