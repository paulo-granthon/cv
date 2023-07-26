// GitHubService.ts
import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

export async function fetchGitHubProfilePicture() {
    try {
        const githubUsername = import.meta.env.VITE_GITHUB_USERNAME;
        const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

        if (!githubUsername || !githubToken) {
            console.error('GitHub username or token not found in environment variables.');
            return null;
        }

        const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${githubUsername}`, {
            headers: {
                Authorization: `token ${githubToken}`,
            },
        });

        return response.data.avatar_url;
    } catch (error) {
        console.error('Error fetching GitHub profile picture:', error);
        return null;
    }
}

export async function fetchGitHubRepositoriesLanguages() {
    try {
        const githubUsername = import.meta.env.VITE_GITHUB_USERNAME;
        const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

        const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${githubUsername}/repos`, {
            headers: {
                Authorization: `token ${githubToken}`,
            },
        });

        // Count the frequency of each language
        const languages: { [language: string]: number } = {};

        const totalRepoCount = response.data.length;

        const repoLanguagesPromises = response.data.map((repo: any) => {
            return axios.get(`${repo.languages_url}`, {
                headers: {
                    Authorization: `token ${githubToken}`,
                },
            });
        });

        const repoLanguagesResponses = await Promise.all(repoLanguagesPromises);

        repoLanguagesResponses.forEach((repoLanguagesResponse) => {
            const repoLanguages = Object.keys(repoLanguagesResponse.data);
            const repoLanguageCount = repoLanguages.length;
            repoLanguages.forEach((language) => {
                languages[language] = (languages[language] || 0) + 1 / totalRepoCount / repoLanguageCount;
            });
        });

        return Object.entries(languages).sort((a, b) => b[1] - a[1]).map(([language]) => language);

    } catch (error) {
        console.error('Error fetching GitHub repositories languages:', error);
        return [];
    }
}
