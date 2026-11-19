import React from "react";
import RouterServices from "@/components/router/pages/services/RouterServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Borhan",
  description: "Services Offered",
};

export default function ServicesPage() {
  return <RouterServices />;
}
