"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Rocket,
  ArrowRight,
  Heart,
  FolderOpen,
  Calendar,
  Star,
  Code,
  Zap,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FloatingOrbs } from "@/components/pages/home/components/background/floating-orbs";
import { GradientMesh } from "@/components/pages/home/components/background/gradient-mesh";
import { skills } from "@/common/constants";

export function HomeSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 min-h-[calc(100vh-8rem)]">
      {/* Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:col-span-8 md:row-span-2 relative"
      >
        <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm relative overflow-hidden">
          <FloatingOrbs />
          <GradientMesh />
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <CardContent className="p-6 md:p-8 h-full flex flex-col justify-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="mb-4 badge-gradient text-blue-300">
                <Sparkles className="w-4 h-4 mr-2" />
                Available for Projects
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-4 text-white"
            >
              <motion.span
                className="inline-block"
                style={{
                  background:
                    "linear-gradient(-45deg, #3b82f6, #8b5cf6, #ec4899, #10b981)",
                  backgroundSize: "400% 400%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              >
                Creative
              </motion.span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl"
            >
              Crafting exceptional digital experiences with cutting-edge
              technologies and innovative design solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group"
              >
                <Rocket className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Heart className="w-5 h-5 mr-2" />
                Let's Talk
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Cards */}
      <div className="md:col-span-4 grid grid-cols-3 md:grid-cols-1 gap-4 md:gap-6">
        {[
          { number: "50+", label: "Projects", icon: FolderOpen },
          { number: "3+", label: "Years", icon: Calendar },
          { number: "100%", label: "Satisfaction", icon: Star },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-4 md:p-6 flex md:flex-row flex-col items-center gap-2 md:gap-4">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-colors">
                  <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-blue-400" />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-lg md:text-2xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-xs md:text-sm">
                    {stat.label}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Skills & Recent Project */}
      <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Quick Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-lg md:text-xl text-white">
                <Code className="w-5 h-5 mr-2" />
                Core Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4">
              {skills.slice(0, 4).map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-white/60">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm group cursor-pointer hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-lg md:text-xl text-white">
                <span className="flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Latest Project
                </span>
                <ChevronRight className="w-5 h-5 text-white/60 group-hover:translate-x-1 transition-transform" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <img
                  src="/placeholder.svg?height=120&width=200"
                  alt="Latest project"
                  className="w-full h-20 md:h-24 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-semibold text-white">
                    AI E-Commerce Platform
                  </h4>
                  <p className="text-sm text-white/70">
                    Next-gen shopping experience with AI recommendations
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-blue-600/20 text-blue-300 text-xs">
                    Next.js
                  </Badge>
                  <Badge className="bg-purple-600/20 text-purple-300 text-xs">
                    AI/ML
                  </Badge>
                  <Badge className="bg-green-600/20 text-green-300 text-xs">
                    Stripe
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
