import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Program from "./pages/Program";
import TechTracksPage from "./pages/TechTracksPage";
import FeaturesPage from "./pages/FeaturesPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Partnerships from "./pages/Partnerships";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/program" element={<Program />} />
            <Route path="/tech-tracks" element={<TechTracksPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partnerships" element={<Partnerships />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
