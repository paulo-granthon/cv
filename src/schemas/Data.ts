interface HardSkillAlias {
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
        label: "Perfil",
        description: "Experienced Fullstack Developer skilled in web and desktop app development using various languages and frameworks. Proficient in Agile methodologies, delivering efficient solutions. Strong focus on code quality, adhering to industry standards, and innovative problem-solving. Passionate about staying ahead of tech trends and thriving in excellence-driven teams.",
    },
    hardSkills: {
        title: "Skills",
        items: [
            "C++",
        ],
    },
    hardSkillAlias: {
        Shell: "Bash",
        ShaderLab: "HLSL",
    } as HardSkillAlias,
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
