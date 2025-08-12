import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Portfolio from "@/pages/portfolio";
import Contact from "@/pages/contact";
import Team from "@/pages/team";
import NotFound from "@/pages/not-found";

import Company from "@/pages/company";

import Careers from "@/pages/careers";

import Values from "@/pages/values";

import It from "@/pages/it";


import Machinery from "@/pages/machinery";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/about/company" component={Company} />
      <Route path="/about/values" component={Values} />
      <Route path="/services" component={Services} />

      <Route path="/services/it" component={It} />
      <Route path="/services/machinery" component={Machinery} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />
      <Route path="/careers" component={Careers} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
   

    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>

  );
}

export default App;
