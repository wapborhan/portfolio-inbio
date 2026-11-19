export interface ProjectItem {
  id: string | number;
  name: string;
  language: string;
  image: string;
  source_link?: string;
  live_link?: string;
  about_link?: string;
  short_desc?: string;
}

export interface PortfolioData {
  react?: ProjectItem[];
  javascript?: ProjectItem[];
  landingpage?: ProjectItem[];
  apps?: ProjectItem[];
}
