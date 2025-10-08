import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logoImage from "@assets/Group 1_1759888320639.png";
import footerLogoImage from "@assets/Group 2_1759888453960.png";
import cakravoloLogo from "@assets/cakravolo (500 x 160 px)_1759940883500.png";

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
      <section className="py-20 px-6 bg-white" data-testid="section-workflow">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4927F5] mb-6" data-testid="heading-workflow">
              Workflow
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12" data-testid="text-workflow-intro">
              This automated process replaces manual census methods, providing rapid, accurate, and real-time yield data.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse" data-testid="table-workflow">
              <thead>
                <tr className="bg-[#4927F5] text-white">
                  <th className="border border-gray-300 px-6 py-4 text-left font-bold" data-testid="th-step">Step</th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-bold" data-testid="th-action">Action</th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-bold" data-testid="th-technology">Technology/Result</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50" data-testid="row-step-1">
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-[#4927F5]">1. Flight Deployment</td>
                  <td className="border border-gray-300 px-6 py-4">Automated deployment of intelligent UAVs (Drones) across the plantation.</td>
                  <td className="border border-gray-300 px-6 py-4">Automation and Obstacle Avoidance ensures efficient, safe, and complete coverage of the estate.</td>
                </tr>
                <tr className="hover:bg-gray-50" data-testid="row-step-2">
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-[#4927F5]">2. Real-Time Sensing</td>
                  <td className="border border-gray-300 px-6 py-4">The drone executes a precision flight path while its cameras capture high-resolution imagery.</td>
                  <td className="border border-gray-300 px-6 py-4">AI Computer Vision instantly identifies and counts fresh fruit bunches (FFB) and flowers in real time.</td>
                </tr>
                <tr className="hover:bg-gray-50" data-testid="row-step-3">
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-[#4927F5]">3. Data Transmission</td>
                  <td className="border border-gray-300 px-6 py-4">Data is immediately transferred from the drone to the processing center during the flight.</td>
                  <td className="border border-gray-300 px-6 py-4">Real-time Data Connection to Server facilitates instant data processing without delays.</td>
                </tr>
                <tr className="hover:bg-gray-50" data-testid="row-step-4">
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-[#4927F5]">4. AI Validation</td>
                  <td className="border border-gray-300 px-6 py-4">Raw count data is run through rigorous algorithms on the server.</td>
                  <td className="border border-gray-300 px-6 py-4">Digital Due Diligence and AI-based analysis validate the bunch count, ensuring high accuracy.</td>
                </tr>
                <tr className="hover:bg-gray-50" data-testid="row-step-5">
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-[#4927F5]">5. Reporting & Tracking</td>
                  <td className="border border-gray-300 px-6 py-4">The processed and validated data is immediately visualized for the client.</td>
                  <td className="border border-gray-300 px-6 py-4">Real-time Dashboard allows users to track the status of the in-field bunch census and access the final yield forecast.</td>
                </tr>
              </tbody>
            </table>
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
            Copyright 2025. PT Arkeo Global Indonesia
          </div>
        </div>
      </footer>
    </div>
  );
}
