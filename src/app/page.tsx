"use client";

import React, { useEffect, useState } from "react";
import HomePage from "@/components/Homepage";
import axios from "axios";

const baseURL = "https://srdreamlab-e981b-default-rtdb.firebaseio.com";

export default function Page() {
  const [project, setProject] = useState<any[]>([]);

  useEffect(() => {
    let isMounted = true;
    axios(baseURL + "/react.json")
      .then(({ data }) => {
        if (isMounted && data) setProject(data);
      })
      .catch((err) => console.error(err));

    return () => {
      isMounted = false;
    };
  }, []);

  return <HomePage project={project} />;
}
