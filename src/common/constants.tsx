import { Home, User, Briefcase, FolderOpen, MessageCircle } from "lucide-react";

export const navigationItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: MessageCircle },
];

export const skills = [
  { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
  { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
  { name: "Node.js", level: 85, color: "from-green-500 to-emerald-500" },
  { name: "UI/UX Design", level: 88, color: "from-purple-500 to-pink-500" },
  { name: "PostgreSQL", level: 82, color: "from-indigo-500 to-purple-500" },
  { name: "AWS/Docker", level: 78, color: "from-orange-500 to-red-500" },
];

export const projects = [
  {
    id: 1,
    title: "AI E-Commerce Platform",
    description: "Next-gen e-commerce with AI recommendations",
    tech: ["Next.js", "AI/ML", "Stripe"],
    image: "/placeholder.svg?height=200&width=300",
    status: "Live",
    year: "2024",
  },
  {
    id: 2,
    title: "Design System",
    description: "Comprehensive React component library",
    tech: ["React", "Storybook", "TypeScript"],
    image: "/placeholder.svg?height=200&width=300",
    status: "Active",
    year: "2024",
  },
  {
    id: 3,
    title: "Collaboration Tool",
    description: "Real-time editing and video calls",
    tech: ["WebRTC", "Socket.io", "Redis"],
    image: "/placeholder.svg?height=200&width=300",
    status: "Beta",
    year: "2023",
  },
  {
    id: 4,
    title: "DeFi Dashboard",
    description: "Crypto analytics and portfolio tracking",
    tech: ["Web3.js", "Ethereum", "Chart.js"],
    image: "/placeholder.svg?height=200&width=300",
    status: "Live",
    year: "2023",
  },
];

export const experience = [
  {
    year: "2024",
    title: "Senior Full-Stack Developer",
    company: "Tech Innovation Corp",
    location: "San Francisco, CA",
    current: true,
  },
  {
    year: "2023",
    title: "Frontend Architect",
    company: "Digital Solutions Ltd",
    location: "New York, NY",
    current: false,
  },
  {
    year: "2022",
    title: "React Developer",
    company: "StartUp Ventures",
    location: "Remote",
    current: false,
  },
];
