import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import logoImage from "@assets/Group 1_1759888320639.png";
import footerLogoImage from "@assets/Group 2_1759888453960.png";
import { Map, Activity, FileText, Clock, Leaf, AlertCircle } from "lucide-react";

export default function ComprehensiveMonitoring() {
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
      <section className="py-20 px-6 bg-gradient-to-br from-[#4927F5] to-[#6B46C1]" data-testid="section-hero">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-hero">
            Comprehensive Monitoring
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto" data-testid="text-hero-description">
            Periodic monitoring using Drone & AI for maximum productivity and plantation health
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6 bg-white" data-testid="section-overview">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-[#D639D4]/10 text-[#D639D4] rounded-full text-sm font-medium mb-6" data-testid="badge-overview">
              Service Overview
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="heading-overview">
              Complete Estate Analysis
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto" data-testid="text-overview">
              Our comprehensive monitoring service provides detailed insights into your plantation's health, productivity, and areas requiring attention. Using advanced drone technology and AI analysis, we deliver actionable data within 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50" data-testid="section-features">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-testid="heading-features">
            Monitoring Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg" data-testid="feature-card-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#4927F5]/10 flex items-center justify-center mb-4">
                  <Map className="w-6 h-6 text-[#4927F5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-1">
                  High-Resolution Mapping
                </h3>
                <p className="text-gray-600" data-testid="feature-description-1">
                  Drone mapping coverage from 250 to 5,000 hectares with orthophoto generation for detailed visualization.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="feature-card-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#FF7D04]/10 flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-[#FF7D04]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-2">
                  Spectral Analysis (NDVI)
                </h3>
                <p className="text-gray-600" data-testid="feature-description-2">
                  Individual palm tree health analysis using Normalized Difference Vegetation Index technology.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="feature-card-3">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#D639D4]/10 flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-[#D639D4]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-3">
                  Crop Health Classification
                </h3>
                <p className="text-gray-600" data-testid="feature-description-3">
                  AI-driven classification of palm trees into Normal, Young, and Abnormal categories.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="feature-card-4">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#4927F5]/10 flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-[#4927F5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-4">
                  Field Cleanliness Evaluation
                </h3>
                <p className="text-gray-600" data-testid="feature-description-4">
                  Detailed weed detection and ground cover cleanliness monitoring for optimal plantation maintenance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="feature-card-5">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#FF7D04]/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-[#FF7D04]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-5">
                  Harvest Forecasting
                </h3>
                <p className="text-gray-600" data-testid="feature-description-5">
                  Accurate harvest area estimation and yield forecasting to plan operations effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="feature-card-6">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#D639D4]/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#D639D4]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-6">
                  Rapid Reporting
                </h3>
                <p className="text-gray-600" data-testid="feature-description-6">
                  Comprehensive digital reports delivered within 48 hours of data collection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white" data-testid="section-pricing">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-[#4927F5] shadow-xl" data-testid="pricing-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#4927F5] mb-2" data-testid="pricing-title">
                Premium Drone Survey Package
              </h3>
              <p className="text-3xl font-bold text-gray-900 mb-2" data-testid="pricing-amount">
                IDR 75,000 per hectare
              </p>
              <p className="text-gray-600 mb-6" data-testid="pricing-minimum">
                Minimum area: 100 hectares
              </p>
              <p className="text-gray-600 mb-4" data-testid="pricing-description">
                This package provides comprehensive analysis of your estate, combining drone mapping and AI analysis.
              </p>
              <div className="bg-[#4927F5]/5 p-4 rounded-lg">
                <p className="font-semibold text-[#4927F5]" data-testid="pricing-turnaround">
                  ⏱️ Turnaround Time: Completed in 1-2 days
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50" data-testid="section-cta">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-[#4927F5] text-white p-12 text-center" data-testid="card-cta">
            <CardContent>
              <h2 className="text-4xl font-bold mb-4" data-testid="heading-cta">
                Start Monitoring Your Plantation Today
              </h2>
              <p className="mb-8 text-purple-100 max-w-3xl mx-auto" data-testid="text-cta-description">
                Get comprehensive insights into your plantation's health and productivity with our advanced monitoring service.
              </p>
              <Button className="bg-[#FF7D04] hover:bg-[#E06D03] text-white px-8 py-6 text-lg" data-testid="button-request-service">
                Request Service →
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
