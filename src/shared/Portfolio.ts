export interface RepoData {
  description: string;
  languages: string[];
}

export interface ProjectData {
  hide?: boolean;
  title: string;
  hl_tech: string;
  url: string;
  additionalDesc: string;
  showGitHubLangs: boolean;
  additionalTech: string[];
}

export interface ProjectProps {
  hide?: boolean;
  title: string;
  hl_tech: string;
  url: string;
  description: string[];
  tech: string[];
}

export interface PortfolioProps {
  portfolio: ProjectProps[];
}

export interface LanguageAliases {
  [key: string]: string;
}
