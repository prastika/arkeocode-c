import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logoImage from "@assets/Group 1_1759888320639.png";
import footerLogoImage from "@assets/Group 2_1759888453960.png";
import cakravoloLogo from "@assets/cakravolo (500 x 160 px)_1759940883500.png";
import { Monitor, Database, Brain, CheckSquare, Cloud } from "lucide-react";

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
              Alur Kerja
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-workflow">
              Survei Cerdas: Data, Analisis, dan Laporan dalam Satu Alur Kerja
            </h2>
          </div>

          <div className="space-y-16">
            {/* Step 1 - Left Image, Right Text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-testid="workflow-step-1">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1000" 
                  alt="Professional Drone Survey" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  data-testid="workflow-image-1"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#4EE1A5] flex items-center justify-center" data-testid="workflow-icon-1">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#4EE1A5]" data-testid="workflow-label-1">TAHAP 1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="workflow-title-1">
                  Survei oleh Tenaga Profesional Tersertifikasi
                </h3>
                <p className="text-gray-600 leading-relaxed" data-testid="workflow-description-1">
                  Mempergunakan teknologi pemetaan drone terkini untuk memantau perkebangan secara komprehensif. Seluruh proses dilakukan oleh surveyor bersertifikat untuk menjamin integrasi dan detail data terbaik.
                </p>
              </div>
            </div>

            {/* Step 2 - Left Text, Right Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-testid="workflow-step-2">
              <div className="order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B6B] flex items-center justify-center" data-testid="workflow-icon-2">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#FF6B6B]" data-testid="workflow-label-2">TAHAP 2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="workflow-title-2">
                  Konsolidasi dan Validasi Data Survei
                </h3>
                <p className="text-gray-600 leading-relaxed" data-testid="workflow-description-2">
                  Mengintegrasikan setiap data pemetaan drone melalui alur kerja yang sistematis yang mencakup: validasi data, sinkronisasi koordinat GPS presisi, dan quality control yang ketat untuk menjamin informasi perkebungan yang lengkap dan akurat.
                </p>
              </div>
              <div className="order-2">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000" 
                  alt="Data Consolidation" 
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
                  <span className="text-sm font-semibold text-[#4EE1A5]" data-testid="workflow-label-3">TAHAP 3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="workflow-title-3">
                  Analisis AI
                </h3>
                <p className="text-gray-600 leading-relaxed" data-testid="workflow-description-3">
                  Sistem AI yang kami kembangkan berdasarkan riset mendalam akan mengolah data hasil integrasi secara sistematis untuk mengidentifikasi pola-pola penting dalam kebun sawit Anda.
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
                  <span className="text-sm font-semibold text-[#FF6B6B]" data-testid="workflow-label-4">TAHAP 4</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="workflow-title-4">
                  Laporan
                </h3>
                <p className="text-gray-600 leading-relaxed" data-testid="workflow-description-4">
                  Hanya dalam satu hari setelah seluruh survei selesai, laporan visual yang komprehensif sudah siap untuk diakses.
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000" 
                  alt="Dashboard Access" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  data-testid="workflow-image-5"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#4EE1A5] flex items-center justify-center" data-testid="workflow-icon-5">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#4EE1A5]" data-testid="workflow-label-5">TAHAP 5</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="workflow-title-5">
                  Akses Dashboard & Penyampaian Data
                </h3>
                <p className="text-gray-600 leading-relaxed" data-testid="workflow-description-5">
                  Akses real-time ke dashboard interaktif untuk memantau progress survei dan hasil analisis. Semua data tersedia dalam format digital yang mudah diakses dan dibagikan kepada tim Anda.
                </p>
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
              Cakravolo Platform
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto" data-testid="text-platform-description">
              Our comprehensive platform combines cutting-edge drone technology with artificial intelligence to revolutionize agricultural management and productivity analysis.
            </p>
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
            Copyright 2025. Akeocode. leading the indonesia futuer of precision agriculture
          </div>
        </div>
      </footer>
    </div>
  );
}
