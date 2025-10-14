import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import Cakravolo from "@/pages/Cakravolo";
import ComputerVisionDemo from "@/pages/ComputerVisionDemo";
import DroneSpecifications from "@/pages/DroneSpecifications";
import DroneBetaVersion from "@/pages/DroneBetaVersion";
import PosiSystemDemo from "@/pages/PosiSystemDemo";
import LandingPage from "@/pages/LandingPage";
import ComprehensiveMonitoring from "@/pages/ComprehensiveMonitoring";
import AIDroneCensus from "@/pages/AIDroneCensus";
import AgriVisionSystem from "@/pages/AgriVisionSystem";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={Home} />
      <Route path="/cakravolo" component={Cakravolo} />
      <Route path="/computer-vision-demo" component={ComputerVisionDemo} />
      <Route path="/drone-specifications" component={DroneSpecifications} />
      <Route path="/drone-beta-version" component={DroneBetaVersion} />
      <Route path="/posi-system-demo" component={PosiSystemDemo} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/comprehensive-monitoring" component={ComprehensiveMonitoring} />
      <Route path="/ai-drone-census" component={AIDroneCensus} />
      <Route path="/agrivision-system" component={AgriVisionSystem} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
