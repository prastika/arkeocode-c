import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import logoImage from "@assets/Group 1_1759888320639.png";
import footerLogoImage from "@assets/Group 2_1759888453960.png";
import { Rocket, Target, Users, TrendingUp } from "lucide-react";

export default function LandingPage() {
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
            Landing Page Services
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto" data-testid="text-hero-description">
            Professional landing page design and development for your precision agriculture solutions
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6 bg-white" data-testid="section-overview">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-[#D639D4]/10 text-[#D639D4] rounded-full text-sm font-medium mb-6" data-testid="badge-overview">
              Our Approach
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="heading-overview">
              Strategic Landing Page Development
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto" data-testid="text-overview">
              We create high-converting landing pages that effectively communicate your precision agriculture services to potential clients.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50" data-testid="section-features">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-testid="heading-features">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg" data-testid="feature-card-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#4927F5]/10 flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-[#4927F5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-1">
                  Fast Loading
                </h3>
                <p className="text-gray-600" data-testid="feature-description-1">
                  Optimized for speed to ensure quick load times and better user engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="feature-card-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#FF7D04]/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#FF7D04]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-2">
                  Conversion Focused
                </h3>
                <p className="text-gray-600" data-testid="feature-description-2">
                  Designed with conversion optimization in mind to maximize lead generation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="feature-card-3">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#D639D4]/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#D639D4]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-3">
                  User-Centric
                </h3>
                <p className="text-gray-600" data-testid="feature-description-3">
                  Intuitive design that provides excellent user experience across all devices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-testid="feature-card-4">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#4927F5]/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#4927F5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="feature-title-4">
                  Data-Driven
                </h3>
                <p className="text-gray-600" data-testid="feature-description-4">
                  Built with analytics integration to track performance and optimize results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white" data-testid="section-cta">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-[#4927F5] text-white p-12 text-center" data-testid="card-cta">
            <CardContent>
              <h2 className="text-4xl font-bold mb-4" data-testid="heading-cta">
                Ready to Launch Your Landing Page?
              </h2>
              <p className="mb-8 text-purple-100 max-w-3xl mx-auto" data-testid="text-cta-description">
                Contact us today to create a high-converting landing page for your precision agriculture services.
              </p>
              <Button className="bg-[#FF7D04] hover:bg-[#E06D03] text-white px-8 py-6 text-lg" data-testid="button-get-started">
                Get Started →
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
