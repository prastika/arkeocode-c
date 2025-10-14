import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import logoImage from "@assets/Group 1_1759888320639.png";
import footerLogoImage from "@assets/Group 2_1759888453960.png";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { plantationSurveySchema, type PlantationSurvey } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type RecommendationResult = {
  service: "AI Drone Trossen Counting" | "Comprehensive Monitoring";
  reason: string;
  upgradePath?: string;
};

export default function LandingPage() {
  const [recommendation, setRecommendation] = useState<RecommendationResult | null>(null);

  const form = useForm<PlantationSurvey>({
    resolver: zodResolver(plantationSurveySchema),
  });

  const getRecommendation = (data: PlantationSurvey): RecommendationResult => {
    // D = "Real-time yield data" AND C = "Low confidence" → AI Drone Trossen Counting
    if (data.criticalData === "yield_data" && data.yieldConfidence === "low_confidence") {
      return {
        service: "AI Drone Trossen Counting",
        reason: "Your need for real-time yield data combined with low confidence in current forecasting methods makes AI Drone Trossen Counting the ideal solution. Our 98% accurate AI-powered census will transform your yield forecasting capabilities.",
      };
    }

    // D = "Real-time yield data" AND E = "Yes" → AI Drone Trossen Counting
    if (data.criticalData === "yield_data" && data.matureStands === "yes") {
      return {
        service: "AI Drone Trossen Counting",
        reason: "Dense, mature palm stands combined with your need for real-time yield data make AI Drone Trossen Counting essential. Our autonomous drones navigate complex canopies to deliver precise bunch counts for accurate harvest planning.",
      };
    }

    // D = "Detailed spatial data" OR B = "Gaining accurate maps" → Comprehensive Monitoring
    if (data.criticalData === "spatial_data" || data.primaryGoal === "accurate_maps") {
      return {
        service: "Comprehensive Monitoring",
        reason: "Your focus on detailed spatial mapping and plantation health analysis aligns perfectly with our Comprehensive Monitoring service. Get high-resolution maps, NDVI analysis, and complete field assessment.",
        upgradePath: "Once your spatial foundation is established, consider upgrading to AI Trossen Counting for precision yield forecasting.",
      };
    }

    // Any other combination → Start with Comprehensive Monitoring
    return {
      service: "Comprehensive Monitoring",
      reason: "Based on your current operational profile, we recommend starting with Comprehensive Monitoring to establish a strong data foundation for your plantation management.",
      upgradePath: "As your data infrastructure matures, we can discuss upgrading to AI Drone Trossen Counting for advanced yield forecasting capabilities.",
    };
  };

  const onSubmit = (data: PlantationSurvey) => {
    const result = getRecommendation(data);
    setRecommendation(result);
  };

  const resetSurvey = () => {
    setRecommendation(null);
    form.reset();
  };

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
      <section className="py-16 px-6 bg-gradient-to-br from-[#4927F5] to-[#6B46C1]" data-testid="section-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="heading-hero">
            Plantation Readiness Survey
          </h1>
          <p className="text-xl text-purple-100" data-testid="text-hero-description">
            Choosing Your Digital Solution
          </p>
          <p className="text-purple-100 mt-4 max-w-2xl mx-auto" data-testid="text-hero-subtitle">
            This short survey helps us understand your operation so we can recommend the perfect service package (Comprehensive Monitoring or AI Yield Forecasting).
          </p>
        </div>
      </section>

      {/* Survey or Results Section */}
      {!recommendation ? (
        <section className="py-20 px-6 bg-gray-50" data-testid="section-survey">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg" data-testid="card-survey">
              <CardContent className="p-8 md:p-12">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Question A */}
                    <div data-testid="question-estate-size">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        1. Operation Scale & Immediate Goal
                      </h3>
                      <FormField
                        control={form.control}
                        name="estateSize"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-gray-700 font-semibold">
                              A. What is the total size of the estate you wish to survey?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="space-y-2"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="less_than_500" data-testid="radio-estate-less-500" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    Less than 500 Hectares
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="500_to_2000" data-testid="radio-estate-500-2000" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    500 – 2,000 Hectares
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="more_than_2000" data-testid="radio-estate-more-2000" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    More than 2,000 Hectares
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Question B */}
                    <div data-testid="question-primary-goal">
                      <FormField
                        control={form.control}
                        name="primaryGoal"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-gray-700 font-semibold">
                              B. What is your primary challenge or immediate goal? (Select one)
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="space-y-2"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="accurate_maps" data-testid="radio-goal-maps" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    Gaining accurate, up-to-date plantation maps and tree health data.
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="yield_forecasting" data-testid="radio-goal-yield" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    Improving the precision of my Fresh Fruit Bunch (FFB) yield forecasts (trossen counting).
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="pest_detection" data-testid="radio-goal-pest" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    Detecting early signs of pest, disease, and nutrient deficiencies.
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Question C */}
                    <div data-testid="question-yield-confidence">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        2. Current Pain Point (Trossen Counting Focus)
                      </h3>
                      <FormField
                        control={form.control}
                        name="yieldConfidence"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-gray-700 font-semibold">
                              C. How confident are you in the accuracy of your current method for forecasting FFB yield (bunch counting)?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="space-y-2"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="very_confident" data-testid="radio-confidence-very" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    Very confident (We use modern methods and data is highly reliable).
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="moderately_confident" data-testid="radio-confidence-moderate" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    Moderately confident (We use manual census, but results are often inconsistent).
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="low_confidence" data-testid="radio-confidence-low" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    Low confidence (Manual census is slow, expensive, and we routinely miss 10%+ of potential yield).
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Question D */}
                    <div data-testid="question-critical-data">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        3. Service Requirement Assessment
                      </h3>
                      <FormField
                        control={form.control}
                        name="criticalData"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-gray-700 font-semibold">
                              D. Which of the following data points is the most critical for your next decision-making cycle? (Select one)
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="space-y-2"
                              >
                                <FormItem className="flex items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="spatial_data" data-testid="radio-data-spatial" className="mt-1" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    Detailed spatial data: Weed detection, stand density, and high-resolution mapping. (Focuses on Comprehensive Monitoring)
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="yield_data" data-testid="radio-data-yield" className="mt-1" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    Real-time yield data: Validated, tree-by-tree bunch and flower counts for harvesting and budget planning. (Focuses on AI Drone / Trossen Counting)
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Question E */}
                    <div data-testid="question-mature-stands">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        4. Technical Environment
                      </h3>
                      <FormField
                        control={form.control}
                        name="matureStands"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-gray-700 font-semibold">
                              E. Are your estates primarily composed of dense, mature palm stands (over 7 years old)?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="space-y-2"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="yes" data-testid="radio-mature-yes" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    Yes, the majority is dense/mature.
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="no" data-testid="radio-mature-no" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    No, we have a mix of young and mature stand
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="pt-6">
                      <Button 
                        type="submit" 
                        className="w-full bg-[#4927F5] hover:bg-[#3818D4] text-white py-6 text-lg"
                        data-testid="button-submit-survey"
                      >
                        Get My Recommendation <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </section>
      ) : (
        <section className="py-20 px-6 bg-gray-50" data-testid="section-results">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg overflow-hidden" data-testid="card-results">
              <div className={`py-8 px-6 ${
                recommendation.service === "AI Drone Trossen Counting" 
                  ? "bg-gradient-to-br from-[#FF7D04] to-[#E06D03]" 
                  : "bg-gradient-to-br from-[#4927F5] to-[#6B46C1]"
              }`}>
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-16 h-16 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white text-center">
                  Your Recommended Solution
                </h2>
              </div>
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className={`text-4xl font-bold mb-4 ${
                    recommendation.service === "AI Drone Trossen Counting" 
                      ? "text-[#FF7D04]" 
                      : "text-[#4927F5]"
                  }`} data-testid="text-recommended-service">
                    {recommendation.service}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed" data-testid="text-recommendation-reason">
                    {recommendation.reason}
                  </p>
                </div>

                {recommendation.upgradePath && (
                  <div className="bg-purple-50 border-l-4 border-[#4927F5] p-6 mb-8" data-testid="upgrade-path">
                    <h4 className="font-bold text-gray-900 mb-2">Future Upgrade Path:</h4>
                    <p className="text-gray-600">{recommendation.upgradePath}</p>
                  </div>
                )}

                <div className="space-y-4">
                  <Link href={recommendation.service === "AI Drone Trossen Counting" ? "/ai-drone-census" : "/comprehensive-monitoring"}>
                    <Button 
                      className={`w-full py-6 text-lg ${
                        recommendation.service === "AI Drone Trossen Counting"
                          ? "bg-[#FF7D04] hover:bg-[#E06D03]"
                          : "bg-[#4927F5] hover:bg-[#3818D4]"
                      } text-white`}
                      data-testid="button-view-service"
                    >
                      View Service Details <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Button 
                    onClick={resetSurvey}
                    variant="outline" 
                    className="w-full py-6 text-lg border-gray-300 text-gray-700 hover:bg-gray-50"
                    data-testid="button-retake-survey"
                  >
                    Retake Survey
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

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
