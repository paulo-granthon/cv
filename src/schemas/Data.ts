import { ProjectData } from "../shared/Portfolio";
import { LanguageAliases } from "../shared/Portfolio";

export type DataSchema = {
  profile: {
    name: string;
    ocupation: string;
    location: string;
    email: string;
    telephone: string;
  };
  socials: {
    label: string;
    name: string;
    url: string;
    className: string;
  }[];
  about: {
    label: string;
    description: string;
  };
  hardSkills: string[];
  frameworks: string[];
  languages: {
    items: string[];
  };
  languageAliases: LanguageAliases;
  hideLanguages: string[];
  softSkills: {
    title: string;
    items: string[];
  };
  works: {
    title: string;
    period: string;
    company: string;
    description: string[];
  }[];
  education: {
    title: string;
    period: string;
    institution: string;
    description: string[];
  }[];
  projects: ProjectData[];
};

export const Data: DataSchema = {
  profile: {
    name: "Paulo Granthon",
    ocupation: "FullStack Developer",
    location: "São José dos Campos, São Paulo",
    email: "pv.granthon@gmail.com",
    telephone: "+55 22 98124 9249",
  },
  socials: [
    {
      label: "paulo-granthon",
      name: "linkedin",
      url: "https://www.linkedin.com/in/paulo-granthon",
      className: "bxl-linkedin-square",
    },
    {
      label: "paulo-granthon",
      name: "github",
      url: "https://github.com/paulo-granthon",
      className: "bxl-github",
    },
  ],
  about: {
    label: "About",
    description:
      "Experienced Fullstack Developer skilled in web and desktop development using various languages and frameworks. Proficient in Agile methodologies. Strong focus on code quality and innovative solutions. Passionate about staying ahead of tech trends and thriving in challenging tasks.",
  },
  hardSkills: ["Git & GitHub", "CI/CD", "Docker", "SQL"],
  frameworks: [
    "React + Native",
    "Django",
    "Rocket",
    "Diesel",
    "NodeJS",
    "Nx",
    "Jest",
    "ExpressJS",
    "Spring Boot",
    "Vue",
    "Tkinter",
    "JavaFX",
    "Kysely",
    "Gin",
    "Mux",
    "Ent",
    "Gorm",
  ],
  languages: {
    items: ["C++", "C#"],
  },
  languageAliases: {
    Shell: "Bash",
    ShaderLab: "HLSL",
  } as LanguageAliases,
  hideLanguages: [
    "Svelte",
    "Dockerfile",
    "Markdown",
    "Makefile",
    "HTML",
    "CSS",
    "Vue",
    "PLpgSQL",
  ],
  softSkills: {
    title: "Soft Skills",
    items: [
      "Ownership Mindset",
      "Adaptabillity",
      "Self-Motivation",
      "Resilience",
      "Focus on Quality",
      "Creativity",
      "Attention to Detail",
      "Problem Solving",
      "Open-Mindedness",
    ],
  },
  works: [
    {
      title: "Backend Developer Intern",
      period: "Sep. 2023 - Now",
      company: "Gorila Invest",
      description: [
        "Contributed to the development and maintenance of `Securities` service, responsible for managing securities data, events and prices using primarily TypeScript and Golang.",
        "Participated in the implementation of endpoints, data fetching and processing, database queries, unit and integration tests as well as code reviews and migration of legacy code to new architecture.",
      ],
    },
    {
      title: "Fullstack Developer Freelancer",
      period: "Oct. 2023 - Jun. 2024",
      company: "Raízen",
      description: [
        "Planned and led the resolution of critical security vulnerability fixes for a platform that manages key routines and processes at the third-largest energy company in Brazil by revenue, and the fifth-largest overall.",
        "Addressed issues identified in a third-party penetration test, enhancing account security, mitigating privilege escalation risks, and securing API authentication for a more robust system architecture.",
        "Planned and led the implementation of a new API within a microservices architecture, along with the corresponding frontend, to support logistics and goods transportation management functionalities.",
      ],
    },
    {
      title: "Information Systems Developer",
      period: "Aug. 2022 - Jul. 2023",
      company: "GWCloud",
      description: [
        "Developed and maintained information systems for external clients of GWCloud.",
        "Contributed to the development of an award-winning HR platform for the Globo television network.",
      ],
    },
  ],
  education: [
    {
      title: "Database Technology",
      period: "Aug. 2022 - Jul. 2025",
      institution: "FATEC Prof. Jessen Vidal",
      description: [
        "I develop tailored solutions for challenges proposed by real companies each semester using Scrum methodology.",
        "Served as Product Owner of the team in my second project, leading the team to deliver the best project and earning recognition, participating in an internal meeting with the company to present our solution for their employee work schedule management needs.",
      ],
    },
  ],
  projects: [
    {
      title: "Online Curriculum Vitae",
      hl_tech: "React + TypeScript",
      url: "cv",
      additionalDesc:
        "Uses the GitHub API to fetch my profile picture, languages used and additional info for each of the projects on the portfolio section.",
      showGitHubLangs: true,
      additionalTech: ["AWS", "CI/CD", "React", "Docker", "Axios", "NodeJS"],
    },
    {
      title: "RustyTetris",
      hl_tech: "Rust",
      url: "rusty-tetris",
      additionalDesc: "",
      showGitHubLangs: false,
      additionalTech: [],
    },
    {
      title: "Portfolio",
      hl_tech: "Go + React + TypeScript",
      url: "portfolio_apis",
      additionalDesc: "",
      showGitHubLangs: true,
      additionalTech: ["Docker"],
    },
    {
      hide: true,
      title: "TheToDoOffice",
      hl_tech: "Django + HTMX",
      url: "TheToDoOffice",
      additionalDesc: "",
      showGitHubLangs: true,
      additionalTech: ["Django"],
    },
    {
      hide: true,
      title: "API2Semestre",
      hl_tech: "JavaFX",
      url: "API2Semestre",
      additionalDesc: "",
      showGitHubLangs: true,
      additionalTech: ["Scrum", "Product Owner", "Maven"],
    },
    {
      hide: true,
      title: "Envyman",
      hl_tech: "Bash",
      url: "envyman",
      additionalDesc: "",
      showGitHubLangs: false,
      additionalTech: [],
    },
  ] as ProjectData[],
};
