"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "@/components/translate/i18n";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return <>{children}</>;
}
