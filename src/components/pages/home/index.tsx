"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingParticles } from "@/components/pages/home/components/background/floating-particles";
import { MobileHeader } from "@/components/pages/home/layout/navigation/mobile-header";
import { MobileBottomNav } from "@/components/pages/home/layout/navigation/mobile-bottom-nav";
import { DesktopSidebar } from "@/components/pages/home/layout/navigation/desktop-sidebar";
import { DesktopStatusBar } from "@/components/pages/home/layout/navigation/desktop-status-bar";
import { HomeSection } from "@/components/pages/home/components/sections/home-section";
import { AboutSection } from "@/components/pages/home/components/sections/about-section";
import { ExperienceSection } from "@/components/pages/home/components/sections/experience-section";
import { ProjectsSection } from "@/components/pages/home/components/sections/projects-section";
import { ContactSection } from "@/components/pages/home/components/sections/contact-section";
import { MouseCursor } from "@/components/material/mouse-cursor";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "about":
        return <AboutSection />;
      case "experience":
        return <ExperienceSection />;
      case "projects":
        return <ProjectsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen relative overflow-hidden">
        <FloatingParticles />

        <MouseCursor />

        <MobileHeader />
        <MobileBottomNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <DesktopSidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Main Content */}
        <main className="md:ml-20 pt-16 md:pt-0 pb-16 md:pb-0 min-h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-4 md:p-8"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>

        <DesktopStatusBar />
      </div>
    </TooltipProvider>
  );
}
