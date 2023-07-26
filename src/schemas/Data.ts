interface LanguagesAlias {
    [key: string]: string;
}

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
        description: "Experienced Fullstack Developer skilled in web and desktop development using various languages and frameworks. Proficient in Agile methodologies, delivering efficient solutions. Strong focus on code quality and innovative solutions. Passionate about staying ahead of tech trends and thriving in excellence-driven teams.",
    },
    hardSkills: [
        "CI/CD",
        "Docker",
        "SQL",
    ],
    frameworks: [
        "React",
        "Django",
        "Rocket",
        "Diesel",
        "JavaFX",
    ],
    languages: {
        items: [
            "C++",
        ],
    },
    languagesAlias: {
        Shell: "Bash",
        ShaderLab: "HLSL",
    } as LanguagesAlias,
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
}
