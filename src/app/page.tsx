"use client";

import React, { useEffect, useState } from "react";
import HomePage from "@/components/Homepage";
import axios from "axios";
import { getImageUrl } from "@/lib/image";
import defaultReact from "@/data/react.json";

const baseURL = "https://srdreamlab-e981b-default-rtdb.firebaseio.com";

const normalizeList = (items: any[]) => {
  if (!Array.isArray(items)) return [];
  return items.map((item) => ({
    ...item,
    image: getImageUrl(item.image),
  }));
};

export default function Page() {
  const [project, setProject] = useState<any[]>(normalizeList(defaultReact));

  useEffect(() => {
    let isMounted = true;
    axios(baseURL + "/react.json")
      .then(({ data }) => {
        if (isMounted && data && Array.isArray(data) && data.length > 0) {
          setProject(normalizeList(data));
        }
      })
      .catch((err) => console.error(err));

    return () => {
      isMounted = false;
    };
  }, []);

  return <HomePage project={project} />;
}
