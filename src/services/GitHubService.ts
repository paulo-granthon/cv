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

