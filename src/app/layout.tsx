"use client";

import type { Metadata } from "next";
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingParticles } from "@/components/pages/home/components/background/floating-particles";
import { MobileHeader } from "@/components/pages/home/layout/navigation/mobile-header";
import { MobileBottomNav } from "@/components/pages/home/layout/navigation/mobile-bottom-nav";
import { DesktopSidebar } from "@/components/pages/home/layout/navigation/desktop-sidebar";
import { DesktopStatusBar } from "@/components/pages/home/layout/navigation/desktop-status-bar";
import { MouseCursor } from "@/components/material/mouse-cursor";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider>
          <FloatingParticles />

          <div className="min-h-screen relative overflow-hidden">
            <MouseCursor />

            <MobileHeader />
            <MobileBottomNav />

            <DesktopSidebar />

            <main className="md:ml-24 md:mt-8 md:pb-8 min-h-screen mx-4">
              <AnimatePresence mode="wait">{children}</AnimatePresence>
            </main>

            <DesktopStatusBar />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
