"use client";

import { CVMainContent } from "@/components/pages/cv/cv-main-content";
import { CVPreview } from "@/components/pages/cv/cv-preview";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

interface CVClientProps {
  locale: "en" | "vi";
}

export default function CVClient({ locale }: CVClientProps) {
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Simulate PDF download
    const link = document.createElement("a");
    link.href = "#";
    link.download = "CV_Creative_Developer.pdf";
    link.click();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My CV - Creative Developer",
          text: "Check out my professional CV",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (isPreviewMode) {
    return (
      <CVPreview locale={locale} onClose={() => setIsPreviewMode(false)} />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-black/20 shadow-lg">
            <CVMainContent />
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
