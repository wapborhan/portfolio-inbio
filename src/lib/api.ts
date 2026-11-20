import { ProjectItem, PortfolioData } from "@/types/project";
import { readFileSync } from "fs";
import path from "path";
import { getImageUrl } from "./image";

const BASE_URL = "https://srdreamlab-e981b-default-rtdb.firebaseio.com";

const normalizeProject = (item: any): ProjectItem => {
  return {
    ...item,
    image: getImageUrl(item.image),
  };
};

export async function getReactProjects(): Promise<ProjectItem[]> {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "react.json");
    const fileContent = readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent);
    if (!Array.isArray(data)) return [];
    return data.map(normalizeProject);
  } catch (error) {
    console.error("Error loading local React projects:", error);
    return [];
  }
}

export async function getJavascriptProjects(): Promise<ProjectItem[]> {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "javascript.json");
    const fileContent = readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent);
    if (!Array.isArray(data)) return [];
    return data.map(normalizeProject);
  } catch (error) {
    console.error("Error loading local JavaScript projects:", error);
    return [];
  }
}

export async function getLandingProjects(): Promise<ProjectItem[]> {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "landingpage.json");
    const fileContent = readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent);
    if (!Array.isArray(data)) return [];
    return data.map(normalizeProject);
  } catch (error) {
    console.error("Error loading local Landing projects:", error);
    return [];
  }
}

export async function getPortfolioData(): Promise<PortfolioData> {
  const [react, javascript, landingpage] = await Promise.all([
    getReactProjects(),
    getJavascriptProjects(),
    getLandingProjects(),
  ]);

  return {
    react,
    javascript,
    landingpage,
  };
}
