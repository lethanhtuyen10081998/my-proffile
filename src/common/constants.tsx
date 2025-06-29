import { Home, User, Briefcase, FolderOpen, MessageCircle } from "lucide-react";

export const navigationItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: MessageCircle },
];

export const skills = [
  { name: "React/Next.js", level: 100, color: "from-blue-500 to-cyan-500" },
  { name: "TypeScript", level: 100, color: "from-blue-600 to-blue-400" },
  { name: "Node.js", level: 90, color: "from-green-500 to-emerald-500" },
  { name: "Nestjs", level: 90, color: "from-orange-500 to-emerald-500" },
  { name: "Node.js", level: 90, color: "from-purple-500 to-blue-500" },
  { name: "Stripe", level: 90, color: "from-blue-500 to-pink-500" },
  { name: "Material UI", level: 90, color: "from-purple-500 to-blue-500" },
  { name: "Tiptap", level: 90, color: "from-blue-500 to-emerald-500" },
  { name: "n8n", level: 90, color: "from-indigo-500 to-blue-500" },
  { name: "UI/UX Design", level: 88, color: "from-purple-500 to-pink-500" },
  { name: "PostgreSQL", level: 82, color: "from-indigo-500 to-purple-500" },
  { name: "AWS/Docker", level: 70, color: "from-orange-500 to-red-500" },
  { name: "AI/ML", level: 70, color: "from-indigo-500 to-purple-500" },
];

export const projects = [
  {
    id: 1,
    title: "Travel Management System",
    description: `Travel management system for managing travel expenses and bookings. Using AI to generate reports and insights.`,
    tech: ["Next.js", "AI/ML", "Stripe", "Material UI", "Tiptap"],
    image: "/images/projects/travel.png",
    status: "Live",
    year: "2024",
  },
  {
    id: 2,
    title: "TAG Grading",
    description:
      "TAG Grading is a platform for grading and analyzing the quality of the product. Using Shopify and eBay, create product listing and manage orders.",
    tech: ["React", "Storybook", "TypeScript"],
    image: "/images/projects/taggrading.png",
    status: "Active",
    year: "2024",
  },
  {
    id: 3,
    title: "Origins",
    description:
      "The Origins Certified™ seal represents product excellence through responsible, sustainable farming practices that build consumer confidence and loyalty",
    tech: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Material UI",
      "Next.js",
    ],
    image: "/images/projects/origin.png",
    status: "Active",
    year: "2023",
  },
  {
    id: 4,
    title: "Carina",
    description:
      "Carina is an easy-to-use website where care professionals can match with those seeking home care and child care.",
    tech: ["GraphQL", "Node.js", "PostgreSQL", "Material UI", "Next.js"],
    image: "/images/projects/carina.png",
    status: "Active",
    year: "2021",
  },
];

export const experience = [
  {
    year: "2025",
    title: "Engineer Software Developer",
    company: "DevBlock Vietnam",
    location: "Ho Chi Minh City, Vietnam",
    current: true,
    time: "2020-2025",
  },
  {
    year: "2019",
    title: "FullStack Developer",
    company: "SmartSoft Vietnam",
    location: "Ho Chi Minh City, Vietnam",
    current: false,
    time: "2019-2020",
  },
];
