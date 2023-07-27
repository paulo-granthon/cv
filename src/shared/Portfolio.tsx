export interface RepoData {
    description: string,
    languages: string[],
}

export interface ProjectData {
    title: string,
    hl_tech: string,
    url: string,
    additionalDesc: string,
    additionalTech: string[],
}

export interface ProjectProps {
    title: string,
    hl_tech: string,
    url: string,
    description: string[],
    tech: string[],
}

export interface PortfolioProps {
    portfolio: ProjectProps[], 
}

export interface LanguageAliases {
    [key: string]: string,
}

