import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logoImage from "@assets/Group 1_1759888320639.png";
import footerLogoImage from "@assets/Group 2_1759888453960.png";
import cakravoloLogo from "@assets/cakravolo (500 x 160 px)_1759940883500.png";
import sense1Image from "@assets/sense1_1759979879439.png";
import posi1Image from "@assets/posi 1_1759985987980.png";
import droneImage from "@assets/Professional Drone in Mid-Flight_1759986873468.png";
import { Monitor, Database, Brain, CheckSquare, Cloud, FileCheck, Users } from "lucide-react";

export default function Cakravolo() {
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
      <section className="h-[210px] px-6 bg-gradient-to-br from-[#4927F5] to-[#6B46C1] flex items-center justify-center" data-testid="section-hero">
        <div className="flex items-center justify-center py-8">
          <img src={cakravoloLogo} alt="Cakravolo" className="h-auto w-auto max-h-[150px] object-contain" data-testid="heading-cakravolo" />
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-6 bg-gray-50" data-testid="section-workflow">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#4EE1A5]/10 text-[#4EE1A5] rounded-full text-sm font-medium mb-6" data-testid="badge-workflow">
              work flow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-workflow">
              AI Drone Trossen Telling
            </h2>
            <h3 className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="subheading-workflow">
              This automated process replaces manual census methods, providing rapid, accurate, and real-time yield data
            </h3>
          </div>

          <div className="space-y-16">
            {/* Step 1 - Left Image, Right Text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-testid="workflow-step-1">
              <div className="order-2 lg:order-1">
                <img 
                  src={droneImage} 
                  alt="Professional Drone in Mid-Flight" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  data-testid="workflow-image-1"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#4EE1A5] flex items-center justify-center" data-testid="workflow-icon-1">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#4EE1A5]" data-testid="workflow-label-1">STAGE 1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="workflow-title-1">
                  Flight Deployment
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6" data-testid="workflow-description-1">
                  Automated deployment of intelligent UAVs (Drones) across the plantation. Automation and Obstacle Avoidance ensures efficient, safe, and complete coverage of the estate.
                </p>
                <Link href="/drone-specifications">
                  <Button className="bg-[#4EE1A5] hover:bg-[#3DD194] text-white" data-testid="button-drone-specs">
                    Drone Specifications
                  </Button>
                </Link>
              </div>
            </div>

            {/* Step 2 - Left Text, Right Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-testid="workflow-step-2">
              <div className="order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B6B] flex items-center justify-center" data-testid="workflow-icon-2">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#FF6B6B]" data-testid="workflow-label-2">STAGE 2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="workflow-title-2">
                  Real-Time Sensing
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6" data-testid="workflow-description-2">
                  The drone executes a precision flight path while its cameras capture high-resolution imagery. AI Computer Vision instantly identifies and counts fresh fruit bunches (FFB) and flowers in real time.
                </p>
                <Link href="/computer-vision-demo">
                  <Button className="bg-[#4927F5] hover:bg-[#3818D4] text-white" data-testid="button-computer-vision-demo">
                    Computer Vision Demo
                  </Button>
                </Link>
              </div>
              <div className="order-2">
                <img 
                  src={sense1Image} 
                  alt="Real-Time Computer Vision Sensing" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  data-testid="workflow-image-2"
                />
              </div>
            </div>

            {/* Step 3 - Left Image, Right Text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-testid="workflow-step-3">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000" 
                  alt="AI Analysis Dashboard" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  data-testid="workflow-image-3"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#4EE1A5] flex items-center justify-center" data-testid="workflow-icon-3">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#4EE1A5]" data-testid="workflow-label-3">STAGE 3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="workflow-title-3">
                  Data Transmission
                </h3>
                <p className="text-gray-600 leading-relaxed" data-testid="workflow-description-3">
                  Data is immediately transferred from the drone to the processing center during the flight. Real-time Data Connection to Server facilitates instant data processing without delays.
                </p>
              </div>
            </div>

            {/* Step 4 - Left Text, Right Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-testid="workflow-step-4">
              <div className="order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B6B] flex items-center justify-center" data-testid="workflow-icon-4">
                    <CheckSquare className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#FF6B6B]" data-testid="workflow-label-4">STAGE 4</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="workflow-title-4">
                  AI Validation
                </h3>
                <p className="text-gray-600 leading-relaxed" data-testid="workflow-description-4">
                  Raw count data is run through rigorous algorithms on the server. Digital Due Diligence and AI-based analysis validate the bunch count, ensuring high accuracy.
                </p>
              </div>
              <div className="order-2">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000" 
                  alt="Comprehensive Report" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  data-testid="workflow-image-4"
                />
              </div>
            </div>

            {/* Step 5 - Left Image, Right Text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-testid="workflow-step-5">
              <div className="order-2 lg:order-1">
                <img 
                  src={posi1Image} 
                  alt="Real-Time Dashboard Tracking" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  data-testid="workflow-image-5"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#4EE1A5] flex items-center justify-center" data-testid="workflow-icon-5">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#4EE1A5]" data-testid="workflow-label-5">STAGE 5</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="workflow-title-5">
                  Reporting & Tracking
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6" data-testid="workflow-description-5">
                  The processed and validated data is immediately visualized for the client. Real-time Dashboard allows users to track the status of the in-field bunch census and access the final yield forecast.
                </p>
                <a href="https://replit.com/@prasttika/AgriVision" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#4EE1A5] hover:bg-[#3DD194] text-white" data-testid="button-system-demo">
                    System Demo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6 bg-white" data-testid="section-content">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4927F5] mb-6" data-testid="heading-platform">
              Cakravolo - AI Computer Vision Drone Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8" data-testid="text-platform-description">
              Our comprehensive platform combines cutting-edge drone technology with artificial intelligence to revolutionize agricultural management and productivity analysis.
            </p>
            <a href="https://wa.me/6281387873919" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#4927F5] hover:bg-[#3818D4] text-white text-lg px-8 py-6" data-testid="button-book-demo">
                Book Your Free Demo
              </Button>
            </a>
          </div>
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
                <li data-testid="service-item-1">Trossen Telling via Drone (Drone-Based Yield Forecasting)</li>
                <li data-testid="service-item-2">Oil Palm Productivity Analysis</li>
                <li data-testid="service-item-3">Land Cleanliness Monitoring (Weed and Debris Management)</li>
                <li data-testid="service-item-4">Plant Spacing Optimization</li>
                <li data-testid="service-item-5">Professional Field Surveys (Ground and Aerial Data Collection)</li>
                <li data-testid="service-item-6">Integrated Survey Data Management</li>
              </ul>
            </div>

            <div data-testid="footer-links">
              <h3 className="font-bold mb-4" data-testid="text-links-heading">Tautan Cepat</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link href="/#about" className="hover:text-[#4927F5] transition-colors" data-testid="link-about-us">About Us</Link></li>
                <li><Link href="/#blog" className="hover:text-[#4927F5] transition-colors" data-testid="link-blog">Blog & Insights</Link></li>
                <li><Link href="/#demos" className="hover:text-[#4927F5] transition-colors" data-testid="link-demos">Technology Demos</Link></li>
                <li><Link href="/#packages" className="hover:text-[#4927F5] transition-colors" data-testid="link-packages">Service Packages</Link></li>
                <li><Link href="/#team" className="hover:text-[#4927F5] transition-colors" data-testid="link-team">Founding Team</Link></li>
                <li><Link href="/#contact" className="hover:text-[#4927F5] transition-colors" data-testid="link-contact">Contact Us</Link></li>
              </ul>
            </div>

            <div data-testid="footer-address">
              <p className="text-gray-600 text-sm" data-testid="text-address">
                Permata Regency, Jl. H. Kelik<br />
                RT. 11/RW. 06 Kel. Srengseng<br />
                Kec. Kembangan, DKI Jakarta 11630
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-600 text-sm" data-testid="footer-copyright">
            Copyright 2025. Akeocode. leading the indonesia futuere of precision agriculture
          </div>
        </div>
      </footer>
    </div>
  );
}
