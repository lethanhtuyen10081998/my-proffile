import { ContactSection } from "@/components/pages/contact";
import { Metadata } from "next";
import Head from "next/head";

export default function ContactPage() {
  return <ContactSection />;
}
export const metadata: Metadata = {
  title: "Contact | Tuyen Le",
  description: "Contact Tuyen Le",
};
