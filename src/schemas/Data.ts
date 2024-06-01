import { ProjectData } from '../shared/Portfolio';
import { LanguageAliases } from '../shared/Portfolio';

export const Data = {
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
        description: "Experienced Fullstack Developer skilled in web and desktop development using various languages and frameworks. Proficient in Agile methodologies. Strong focus on code quality and innovative solutions. Passionate about staying ahead of tech trends and thriving in challenging tasks.",
    },
    hardSkills: [
        "Git & GitHub",
        "CI/CD",
        "Docker",
        "SQL",
        "Cloud",
        "AWS",
    ],
    frameworks: [
        "React",
        "Django",
        "Rocket",
        "Diesel",
        "NodeJS",
    ],
    languages: {
        items: [
            "C++",
        ],
    },
    languageAliases: {
        Shell: "Bash",
        ShaderLab: "HLSL",
    } as LanguageAliases,
    hideLanguages: [
        "Svelte",
        "Dockerfile",
        "Markdown",
    ],
    softSkills: {
        title: "Soft Skills",
        items: [
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
            title: "Information Systems Developer",
            period: "Aug. 2022 - Jul. 2023",
            company: "GWCloud",
            description: [
                "Developed and maintained information systems for external clients of GWCloud.",
                "My work included both the Back End and Front End using ServiceNow, JavaScript, and HTML as the main technologies.",
                "Contributed to the development of an award-winning HR platform for the Globo television network."
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
            additionalDesc: "Uses the GitHub API to fetch my profile picture, languages used and additional info for each of the projects on the portfolio section.",
			showGitHubLangs: true,
            additionalTech: [
                "AWS",
                "CI/CD",
                "React",
                "Docker",
                "Axios",
                "NodeJS",
            ]
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
            title: "TheToDoOffice",
			hl_tech: "Django + HTMX",
            url: "TheToDoOffice",
            additionalDesc: "",
			showGitHubLangs: true,
            additionalTech: [
                "Django",
            ],
        },
        {
            title: "Khali",
			hl_tech: "Tkinter",
            url: "Khali",
            additionalDesc: "",
			showGitHubLangs: true,
            additionalTech: [
                "Scrum",
            ],
        },
        {
            title: "API2Semestre",
			hl_tech: "JavaFX",
            url: "API2Semestre",
            additionalDesc: "",
			showGitHubLangs: true,
            additionalTech: [
                "Scrum",
                "Product Owner",
                "Maven",
            ],
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
}
