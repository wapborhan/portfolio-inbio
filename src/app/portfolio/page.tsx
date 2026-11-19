"use client";

import React, { useEffect, useState } from "react";
import RoutePortfolio from "@/components/router/pages/portfolio/RoutePortfolio";
import axios from "axios";

const baseURL = "https://srdreamlab-e981b-default-rtdb.firebaseio.com";

export default function PortfolioPage() {
  const [projectData, setProjectData] = useState<{
    react: any[];
    javascript: any[];
    landingpage: any[];
  }>({
    react: [],
    javascript: [],
    landingpage: [],
  });

  useEffect(() => {
    let isMounted = true;

    axios(baseURL + "/react.json")
      .then(({ data }) => {
        if (isMounted && data) {
          setProjectData((prev) => ({ ...prev, react: data }));
        }
      })
      .catch((err) => console.error(err));

    axios(baseURL + "/javascript.json")
      .then(({ data }) => {
        if (isMounted && data) {
          setProjectData((prev) => ({ ...prev, javascript: data }));
        }
      })
      .catch((err) => console.error(err));

    axios(baseURL + "/landingpage.json")
      .then(({ data }) => {
        if (isMounted && data) {
          setProjectData((prev) => ({ ...prev, landingpage: data }));
        }
      })
      .catch((err) => console.error(err));

    return () => {
      isMounted = false;
    };
  }, []);

  return <RoutePortfolio project={projectData} />;
}
