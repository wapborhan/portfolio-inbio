"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "@/i18n/i18n";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return <>{children}</>;
}
