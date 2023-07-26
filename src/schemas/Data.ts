import { ProjectData } from '../shared/Portfolio';
import { LanguageAliases } from '../shared/Portfolio';

export const Data = {
    profile: {
        name: "Paulo Granthon",
        ocupation: "FullStack Developer",
        location: "São José dos Campos, São Paulo",
        email: "pg.granthon@gmail.com",
        telephone: "+55 22 98124 9249",
    },
    about: {
        label: "About",
        description: "Experienced Fullstack Developer skilled in web and desktop development using various languages and frameworks. Proficient in Agile methodologies, delivering efficient solutions. Strong focus on code quality and innovative solutions. Passionate about staying ahead of tech trends and thriving in challenging tasks.",
    },
    hardSkills: [
        "Git & GitHub",
        "CI/CD",
        "Docker",
        "SQL",
    ],
    frameworks: [
        "React",
        "Django",
        "Rocket",
        "Diesel",
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
            "Curiosity",
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
                "I Develop tailored solutions for challenges proposed by real companies each semester using Scrum methodology.",
                "Served as Product Owner of the team in my second project, leading the team to deliver the best project and earning recognition, participating in an internal meeting with the company to present our solution for their employee work schedule management needs.",
            ],
        },
    ],
    projects: [
        {
            title: "Online Curriculum Vitae | React + TypeScript",
            url: "cv",
            additionalDesc: "This curriculum. Fetches my profile picture, languages and additional info for the projects on the portfolio section from my GitHub profile.",
            additionalTech: [
                "React",
                "Docker",
            ]
        },
        {
            title: "RustyTetris | Rust",
            url: "rusty-tetris",
            additionalDesc: "",
            additionalTech: [],
        },
        {
            title: "TheToDoOffice | Django + HTMX",
            url: "TheToDoOffice",
            additionalDesc: "",
            additionalTech: [],
        },
        {
            title: "Khali | Tkinter",
            url: "Khali",
            additionalDesc: "",
            additionalTech: [],
        },
        {
            title: "API2Semestre | JavaFX",
            url: "API2Semestre",
            additionalDesc: "",
            additionalTech: [],
        },
    ] as ProjectData[],
}
