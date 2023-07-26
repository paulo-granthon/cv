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
    works: [
        {
            title: "Information Systems Developer",
            period: "Aug. 2022 - Jul. 2023",
            company: "GWCloud",
            description: [
                "I participated in the development and maintenance of information systems for external clients of GWCloud, alongside an Agile team.",
                "My main tools were ServiceNow, JavaScript, and HTML. My work included both the Back End and Front End of each project, making it a Full Stack developer position.",
                "During my time at GWCloud, I took part in the development of an HR platform for the Globo television network, which was awarded the "Operational Excellence" classification in the broadcaster's Partners in Excellence program due to the quality of the product delivered by me and my team."
            ],
        },
    ],
}
