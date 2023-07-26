export interface RepoData {
    description: string,
    languages: string[],
}

export interface ProjectData {
    title: string;
    url: string;
    additionalDesc: string;
    additionalTech: string[];
}

export interface ProjectProps {
    title: string,
    url: string,
    description: string[],
    tech: string[],
}

export interface PortfolioProps {
    portfolio: ProjectProps[], 
}

export interface LanguageAliases {
    [key: string]: string;
}

