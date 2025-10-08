import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { contactFormSchema, type ContactForm, type Stat, type Service, type Product, type Benefit } from "@shared/schema";
import { Monitor, Smartphone, Database, Cpu, Cloud, Brain, Rocket, CheckSquare, ArrowRight } from "lucide-react";
import logoImage from "@assets/Group 1_1759888320639.png";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const stats: Stat[] = [
  { number: "7+", label: "Years Experience" },
  { number: "10", label: "Complete Projects" },
  { number: "30+", label: "Happy Clients" },
  { number: "25+", label: "Team Members" },
];

const services: Service[] = [
  {
    id: "1",
    title: "Web App Dev",
    description: "Build robust and scalable web applications with cutting-edge technologies for your business.",
    icon: "monitor",
  },
  {
    id: "2",
    title: "Mobile App Dev",
    description: "Create stunning mobile applications for iOS and Android platforms with seamless user experience.",
    icon: "smartphone",
  },
  {
    id: "3",
    title: "Data Analyst",
    description: "Transform your data into actionable insights with advanced analytics and visualization.",
    icon: "database",
  },
  {
    id: "4",
    title: "IoT Solution",
    description: "Connect your devices and build smart solutions with our IoT expertise and platform.",
    icon: "cpu",
  },
  {
    id: "5",
    title: "DevOps",
    description: "Streamline your development and operations with our comprehensive DevOps solutions.",
    icon: "cloud",
  },
];

const benefits: Benefit[] = [
  {
    id: "1",
    title: "EXPERTISE",
    description: "Our team of experts brings years of experience in delivering high-quality solutions.",
    icon: "brain",
  },
  {
    id: "2",
    title: "FAST ACCESS",
    description: "Quick turnaround time with agile methodologies to meet your business needs.",
    icon: "rocket",
  },
  {
    id: "3",
    title: "INTEGRATED",
    description: "Seamlessly integrate with your existing systems and workflows.",
    icon: "check",
  },
];

const products: Product[] = [
  {
    id: "1",
    title: "Eventornary.id",
    description: "Make better application for many years with beautiful reportsand security, all of them",
    image: "/api/placeholder/300/200",
    link: "#",
  },
  {
    id: "2",
    title: "Eventornary.id",
    description: "Make better application for many years with beautiful reportsand security, all of them",
    image: "/api/placeholder/300/200",
    link: "#",
  },
  {
    id: "3",
    title: "Eventornary.id",
    description: "Make better application for many years with beautiful reportsand security, all of them",
    image: "/api/placeholder/300/200",
    link: "#",
  },
  {
    id: "4",
    title: "Eventornary.id",
    description: "Make better application for many years with beautiful reportsand security, all of them",
    image: "/api/placeholder/300/200",
    link: "#",
  },
  {
    id: "5",
    title: "Eventornary.id",
    description: "Make better application for many years with beautiful reportsand security, all of them",
    image: "/api/placeholder/300/200",
    link: "#",
  },
  {
    id: "6",
    title: "Eventornary.id",
    description: "Make better application for many years with beautiful reportsand security, all of them",
    image: "/api/placeholder/300/200",
    link: "#",
  },
];

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case "monitor": return <Monitor className="w-8 h-8" />;
    case "smartphone": return <Smartphone className="w-8 h-8" />;
    case "database": return <Database className="w-8 h-8" />;
    case "cpu": return <Cpu className="w-8 h-8" />;
    case "cloud": return <Cloud className="w-8 h-8" />;
    default: return <Monitor className="w-8 h-8" />;
  }
};

const getBenefitIcon = (iconName: string) => {
  switch (iconName) {
    case "brain": return <Brain className="w-12 h-12" />;
    case "rocket": return <Rocket className="w-12 h-12" />;
    case "check": return <CheckSquare className="w-12 h-12" />;
    default: return <Brain className="w-12 h-12" />;
  }
};

export default function Home() {
  const { toast } = useToast();
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#4927F5] text-white py-4 px-6 sticky top-0 z-50" data-testid="header">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2" data-testid="logo">
            <img src={logoImage} alt="Arkeocode" className="h-10 w-auto" />
          </div>
          
          <nav className="hidden md:flex items-center gap-8" data-testid="nav-menu">
            <a href="#home" className="hover:opacity-80 transition-opacity" data-testid="link-home">Home</a>
            <a href="#about" className="hover:opacity-80 transition-opacity" data-testid="link-about">About</a>
            <a href="#service" className="hover:opacity-80 transition-opacity" data-testid="link-service">Service</a>
            <a href="#career" className="hover:opacity-80 transition-opacity" data-testid="link-career">Career</a>
            <a href="#news" className="hover:opacity-80 transition-opacity" data-testid="link-news">News</a>
          </nav>
          
          <Button className="bg-[#FF7D04] hover:bg-[#E06D03] text-white" data-testid="button-contact-header">
            Contact Us
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gray-100 py-20 px-6" data-testid="section-hero">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" data-testid="heading-hero">
              Tech Company Build Product to Transform Existing Service to Digitalize World
            </h1>
            <p className="text-gray-600 text-lg mb-8" data-testid="text-hero-description">
              Arkeocode specializes in creating cutting-edge IT solutions that transform businesses. 
              We develop innovative software, web, and mobile applications tailored to meet your unique needs.
            </p>
            <Button className="bg-[#FF7D04] hover:bg-[#E06D03] text-white px-8 py-6 text-lg" data-testid="button-learn-more">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-20 px-6 bg-white" data-testid="section-company-profile">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#4927F5] text-center mb-8" data-testid="heading-company-profile">
            Company Profile
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto" data-testid="text-company-description">
            We always look at it as if we are a customer, what do we want from a service provider and then we implement it with discipline. 
            We do various tests from manual and automated testing methods to ensure applications that can be accepted by customers and 
            end users. We don't hesitate to share knowledge within the team when there are new findings from tools and other things we 
            implement both internally and externally so that we can continue to develop and innovate.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-50" data-testid="section-stats">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#FF7D04] mb-12" data-testid="heading-stats">
            We're in Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-5xl font-bold text-[#4927F5] mb-2" data-testid={`stat-number-${index}`}>
                  {stat.number}
                </div>
                <div className="text-gray-600" data-testid={`stat-label-${index}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Value Section */}
      <section className="py-20 px-6 bg-gray-100" data-testid="section-vmv">
        <div className="max-w-7xl mx-auto space-y-12">
          <div data-testid="vision-block">
            <h2 className="text-3xl font-bold text-[#4927F5] mb-4" data-testid="heading-vision">Vision</h2>
            <p className="text-gray-600" data-testid="text-vision">
              Utilizing a concept that builds products and digital solutions for our clients and society to be better with continuous 
              improvement and innovation that is useful and easy to use.
            </p>
          </div>

          <div data-testid="mission-block">
            <h2 className="text-3xl font-bold text-[#4927F5] mb-4" data-testid="heading-mission">Mission</h2>
            <p className="text-gray-600" data-testid="text-mission">
              Build products for users that are easy to build and help solve business tasks and complex data and labor.
            </p>
          </div>

          <div data-testid="value-block">
            <h2 className="text-3xl font-bold text-[#4927F5] mb-4" data-testid="heading-value">Value</h2>
            <p className="text-gray-600" data-testid="text-value">
              Conduct discovery for what will actually be useful to users from how we build and we create for products to help.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="py-20 px-6 bg-white" data-testid="section-services">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#4927F5] text-center mb-12" data-testid="heading-services">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="border-2 hover:shadow-lg transition-shadow" data-testid={`service-card-${service.id}`}>
                <CardContent className="p-6">
                  <div className="text-[#4927F5] mb-4" data-testid={`service-icon-${service.id}`}>
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-bold mb-3" data-testid={`service-title-${service.id}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4" data-testid={`service-description-${service.id}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-[#4927F5]" data-testid="section-benefits">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12" data-testid="heading-benefits">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="text-center text-white" data-testid={`benefit-${benefit.id}`}>
                <div className="flex justify-center mb-4" data-testid={`benefit-icon-${benefit.id}`}>
                  {getBenefitIcon(benefit.icon)}
                </div>
                <h3 className="text-xl font-bold mb-3" data-testid={`benefit-title-${benefit.id}`}>
                  {benefit.title}
                </h3>
                <p className="text-purple-100" data-testid={`benefit-description-${benefit.id}`}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-20 px-6 bg-gray-50" data-testid="section-expert">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#4927F5] mb-6" data-testid="heading-expert">Expert</h2>
          <p className="text-gray-600 max-w-3xl" data-testid="text-expert">
            We have a team of experts skilled in real work at several big tech companies who are very, they can build carefully.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-6 bg-white" data-testid="section-products">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#4927F5] text-center mb-12" data-testid="heading-products">
            Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow" data-testid={`product-card-${product.id}`}>
                <div className="aspect-video bg-gray-200" data-testid={`product-image-${product.id}`}>
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3" data-testid={`product-title-${product.id}`}>
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4" data-testid={`product-description-${product.id}`}>
                    {product.description}
                  </p>
                  <Button className="bg-[#4927F5] hover:bg-[#3817D5] text-white w-full" data-testid={`button-learn-more-${product.id}`}>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-6 bg-gray-50" data-testid="section-clients">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#4927F5] text-center mb-12" data-testid="heading-clients">
            Clients
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto" data-testid="text-clients-description">
            We have worked with amazing clients and helped them transform their business through digital solutions.
          </p>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 px-6 bg-white" data-testid="section-join-team">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-[#4927F5] text-white p-12 text-center" data-testid="card-join-team">
            <CardContent>
              <h2 className="text-4xl font-bold mb-4" data-testid="heading-join-team">
                Be The Part<br />of Arkeocode Team
              </h2>
              <p className="mb-8 text-purple-100" data-testid="text-join-description">
                We need the best person from you and we see potential too, let's join us.
              </p>
              <Button className="bg-[#FF7D04] hover:bg-[#E06D03] text-white px-8 py-6 text-lg" data-testid="button-contact-now">
                Contact Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 px-6" data-testid="footer">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6" data-testid="footer-logo">
                <img src={logoImage} alt="Arkeocode" className="h-10 w-auto" />
              </div>
              
              <p className="text-gray-600 mb-6" data-testid="text-footer-description">
                Arkeocode is leading the future of Precision Agriculture by integrating high-speed UAV (Drone) capabilities with the analytical power of Computer Vision AI.
              </p>
            </div>

            <div data-testid="footer-services">
              <h3 className="font-bold mb-4 text-lg" data-testid="text-services-heading">Our Services:</h3>
              <ul className="space-y-2 text-gray-600">
                <li data-testid="service-item-1">• Trossen Telling via Drone (Drone-Based Yield Forecasting)</li>
                <li data-testid="service-item-2">• Oil Palm Productivity Analysis</li>
                <li data-testid="service-item-3">• Land Cleanliness Monitoring (Weed and Debris Management)</li>
                <li data-testid="service-item-4">• Plant Spacing Optimization</li>
                <li data-testid="service-item-5">• Professional Field Surveys (Ground and Aerial Data Collection)</li>
                <li data-testid="service-item-6">• Integrated Survey Data Management</li>
              </ul>
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
