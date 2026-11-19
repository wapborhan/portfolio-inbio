import React from "react";
import RouterWhyMe from "@/components/router/pages/whyme/RouterWhyMe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Me - Borhan",
  description: "Why Choose Me for Your Projects",
};

export default function WhyMePage() {
  return <RouterWhyMe />;
}
