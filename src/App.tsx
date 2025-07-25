import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TraditionalSarees from "./pages/TraditionalSarees";
import OccasionalLehengas from "./pages/OccasionalLehengas";
import Collections from "./pages/Collections";
import Sale from "./pages/Sale";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/maggam-works" element={<TraditionalSarees />} />
          <Route path="/computer-embroidery" element={<OccasionalLehengas />} />
          <Route path="/kurtas" element={<TraditionalSarees />} />
          <Route path="/sarees" element={<TraditionalSarees />} />
          <Route path="/dresses" element={<OccasionalLehengas />} />
          <Route path="/bottoms" element={<TraditionalSarees />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/traditional-sarees" element={<TraditionalSarees />} />
          <Route path="/occasional-lehengas" element={<OccasionalLehengas />} />
          <Route path="/party-gowns" element={<TraditionalSarees />} />
          <Route path="/casual-kurtis" element={<TraditionalSarees />} />
          <Route path="/salwar-kameez" element={<TraditionalSarees />} />
          <Route path="/kids" element={<TraditionalSarees />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
