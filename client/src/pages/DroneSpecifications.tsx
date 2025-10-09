import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Plane } from "lucide-react";
import logoImage from "@assets/Group 1_1759888320639.png";

export default function DroneSpecifications() {
  const specifications = [
    { label: "Model Type", value: "Custom 4 Propeller (Quadcopter)" },
    { label: "Max Flight Range", value: "32 km" },
    { label: "Operational Altitude", value: "6,000 m (Above Sea Level)" },
    { label: "Max Flight Time", value: "43 minutes" },
    { label: "Mapping Capacity", value: "100–150 hectares per single flight" },
    { label: "Camera Resolution", value: "20 Megapixels (MP)" },
    { label: "Sensor Suite", value: "Omnidirectional Obstacle Sensing, Terrain-Follow Aerial Surveying" },
    { label: "Camera Characteristics", value: "4/3 CMOS Image Sensor (20MP)" },
    { label: "Shutter Speed", value: "1/2000s (Fastest Mechanical Shutter Speed)" },
    { label: "Burst Rate", value: "0.7s (High-Speed Burst when RGB Camera is used)" },
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
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[#4927F5] flex items-center justify-center" data-testid="icon-drone">
              <Plane className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-main">
            Drone Specifications
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-testid="text-description">
            Our custom UAV is engineered for high-performance and precision aerial surveying of palm oil estates.
          </p>
        </div>

        {/* Specifications Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-testid="specs-table">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#4927F5] text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold" data-testid="table-header-spec">
                    Specification
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold" data-testid="table-header-detail">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition-colors`}
                    data-testid={`spec-row-${index}`}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900" data-testid={`spec-label-${index}`}>
                      {spec.label}
                    </td>
                    <td className="px-6 py-4 text-gray-600" data-testid={`spec-value-${index}`}>
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-lg shadow-lg p-6" data-testid="card-performance">
            <h3 className="text-xl font-bold text-gray-900 mb-3">High Performance</h3>
            <p className="text-gray-600">
              Extended flight time of 43 minutes enables comprehensive coverage of 100-150 hectares in a single mission.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6" data-testid="card-precision">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Precision Imaging</h3>
            <p className="text-gray-600">
              20MP camera with 4/3 CMOS sensor captures ultra-high-resolution imagery for accurate AI analysis.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6" data-testid="card-safety">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Safety</h3>
            <p className="text-gray-600">
              Omnidirectional obstacle sensing and terrain-follow technology ensures safe autonomous operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
