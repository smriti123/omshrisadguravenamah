import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HommageAdmin from "./pages/HommageAdmin";
import HomeNew from "./pages/HomeNew";

const queryClient = new QueryClient();

const HashScrollToElement = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const targetId = decodeURIComponent(hash.slice(1));
    const retryDelays = [0, 50, 150, 350, 800, 1400, 2200];
    const timeoutIds: number[] = [];

    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (!target) return;

      target.scrollIntoView({ behavior: "auto" });
    };

    const frameId = window.requestAnimationFrame(scrollToTarget);
    retryDelays.forEach((delay) => {
      timeoutIds.push(window.setTimeout(scrollToTarget, delay));
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      timeoutIds.forEach((id) => window.clearTimeout(id));
    };
  }, [hash, pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HashScrollToElement />
        <Routes>
          <Route path="/" element={<HomeNew />} />
          <Route path="/old-home" element={<Index />} />
          <Route path="/admin/hommages" element={<HommageAdmin />} />
          <Route path="/home-new" element={<HomeNew />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
