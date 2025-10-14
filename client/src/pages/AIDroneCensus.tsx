import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import logoImage from "@assets/Group 1_1759888320639.png";
import footerLogoImage from "@assets/Group 2_1759888453960.png";
import { Camera, Cpu, Database, Navigation, BarChart, Shield } from "lucide-react";

export default function AIDroneCensus() {
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
      <section className="py-20 px-6 bg-gradient-to-br from-[#FF7D04] to-[#E06D03]" data-testid="section-hero">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-hero">
            AI Drone Census
          </h1>
          <p className="text-xl text-orange-50 max-w-3xl mx-auto" data-testid="text-hero-description">
            Advanced yield forecasting through autonomous AI-powered trossen counting
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6 bg-white" data-testid="section-overview">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-[#FF7D04]/10 text-[#FF7D04] rounded-full text-sm font-medium mb-6" data-testid="badge-overview">
              Service Overview
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="heading-overview">
              Automated Bunch Counting System
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto" data-testid="text-overview">
              Our AI Drone Census service revolutionizes traditional manual census methods by deploying intelligent UAVs that autonomously navigate plantations, identifying and counting every bunch and flower with 98% accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gray-50" data-testid="section-process">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-testid="heading-process">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg" data-testid="process-card-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#FF7D04]/10 flex items-center justify-center mb-4">
                  <Navigation className="w-6 h-6 text-[#FF7D04]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="process-title-1">
                  Automated Flight Path
                </h3>
                <p className="text-gray-600" data-testid="process-description-1">
                  High-precision mapping enables fully automated drone navigation with zigzag patterns and obstacle avoidance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="process-card-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#4927F5]/10 flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-[#4927F5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="process-title-2">
                  AI Computer Vision
                </h3>
                <p className="text-gray-600" data-testid="process-description-2">
                  Real-time identification and counting of bunches and flowers using advanced computer vision algorithms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="process-card-3">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#D639D4]/10 flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-[#D639D4]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="process-title-3">
                  Real-Time Data Transfer
                </h3>
                <p className="text-gray-600" data-testid="process-description-3">
                  Immediate, secure data delivery to analysis servers for instant processing and validation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="process-card-4">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#FF7D04]/10 flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-[#FF7D04]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="process-title-4">
                  AI Processing
                </h3>
                <p className="text-gray-600" data-testid="process-description-4">
                  Rapid image analysis using proprietary AI algorithms for bunch detection and counting accuracy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="process-card-5">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#4927F5]/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#4927F5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="process-title-5">
                  Digital Due Diligence
                </h3>
                <p className="text-gray-600" data-testid="process-description-5">
                  AI-based analysis and validation ensures data accuracy and reliability for decision-making.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="process-card-6">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#D639D4]/10 flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-[#D639D4]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="process-title-6">
                  Real-Time Dashboard
                </h3>
                <p className="text-gray-600" data-testid="process-description-6">
                  Track in-field bunch census status with comprehensive dashboards and final reports.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white" data-testid="section-pricing">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-[#FF7D04] shadow-xl" data-testid="pricing-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#FF7D04] mb-2" data-testid="pricing-title">
                Trossen Counting Package
              </h3>
              <p className="text-sm text-gray-600 mb-3" data-testid="pricing-subtitle">
                AI Computer Vision Drone Service
              </p>
              <p className="text-3xl font-bold text-gray-900 mb-2" data-testid="pricing-amount">
                IDR 100,000 per hectare
              </p>
              <p className="text-gray-600 mb-6" data-testid="pricing-minimum">
                Minimum area: 100 hectares
              </p>
              <p className="text-gray-600 mb-4" data-testid="pricing-description">
                Complete trossen counting process using specialized AI Computer Vision Drone system, integrated with real-time data analysis server.
              </p>
              <div className="bg-[#FF7D04]/5 p-4 rounded-lg">
                <p className="font-semibold text-[#FF7D04]" data-testid="pricing-accuracy">
                  ✨ 98% Accuracy in Yield Forecasting
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50" data-testid="section-cta">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-[#FF7D04] text-white p-12 text-center" data-testid="card-cta">
            <CardContent>
              <h2 className="text-4xl font-bold mb-4" data-testid="heading-cta">
                Ready for Accurate Yield Forecasting?
              </h2>
              <p className="mb-8 text-orange-50 max-w-3xl mx-auto" data-testid="text-cta-description">
                Replace manual census methods with our AI-powered drone system for precise, real-time yield data.
              </p>
              <Button className="bg-white hover:bg-gray-100 text-[#FF7D04] px-8 py-6 text-lg" data-testid="button-request-demo">
                Request Demo →
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
