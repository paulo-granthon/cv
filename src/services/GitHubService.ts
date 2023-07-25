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

        const languages: string[] = [];
        response.data.forEach((repo: any) => {
            if (repo.language && !languages.includes(repo.language)) {
                languages.push(repo.language);
            }
        });

        return languages;
    } catch (error) {
        console.error('Error fetching GitHub repositories languages:', error);
        return [];
    }
}
