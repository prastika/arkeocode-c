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
