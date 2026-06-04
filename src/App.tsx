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
    const scrollToTarget = () => document.getElementById(targetId)?.scrollIntoView({ behavior: "auto" });

    scrollToTarget();
    window.setTimeout(scrollToTarget, 100);
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
