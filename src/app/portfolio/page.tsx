"use client";

import React, { useEffect, useState } from "react";
import RoutePortfolio from "@/components/router/pages/portfolio/RoutePortfolio";
import axios from "axios";
import { getImageUrl } from "@/lib/image";
import defaultReact from "@/data/react.json";
import defaultJavascript from "@/data/javascript.json";
import defaultLanding from "@/data/landingpage.json";

const baseURL = "https://srdreamlab-e981b-default-rtdb.firebaseio.com";

const normalizeList = (items: any[]) => {
  if (!Array.isArray(items)) return [];
  return items.map((item) => ({
    ...item,
    image: getImageUrl(item.image),
  }));
};

export default function PortfolioPage() {
  const [projectData, setProjectData] = useState<{
    react: any[];
    javascript: any[];
    landingpage: any[];
  }>({
    react: normalizeList(defaultReact),
    javascript: normalizeList(defaultJavascript),
    landingpage: normalizeList(defaultLanding),
  });

  useEffect(() => {
    let isMounted = true;

    axios(baseURL + "/react.json")
      .then(({ data }) => {
        if (isMounted && data && Array.isArray(data) && data.length > 0) {
          setProjectData((prev) => ({ ...prev, react: normalizeList(data) }));
        }
      })
      .catch((err) => console.error(err));

    axios(baseURL + "/javascript.json")
      .then(({ data }) => {
        if (isMounted && data && Array.isArray(data) && data.length > 0) {
          setProjectData((prev) => ({ ...prev, javascript: normalizeList(data) }));
        }
      })
      .catch((err) => console.error(err));

    axios(baseURL + "/landingpage.json")
      .then(({ data }) => {
        if (isMounted && data && Array.isArray(data) && data.length > 0) {
          setProjectData((prev) => ({ ...prev, landingpage: normalizeList(data) }));
        }
      })
      .catch((err) => console.error(err));

    return () => {
      isMounted = false;
    };
  }, []);

  return <RoutePortfolio project={projectData} />;
}
