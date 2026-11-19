import React from "react";
import AboutMore from "@/components/router/pages/about/AboutMore";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Borhan",
  description: "Personal Portfolio & About Me",
};

export default function AboutPage() {
  return <AboutMore />;
}
