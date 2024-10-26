// GitHubService.ts
import axios from "axios";
import {
  ProjectData,
  ProjectProps,
  LanguageAliases,
} from "../shared/Portfolio";

const GITHUB_API_BASE_URL = "https://api.github.com";

export async function fetchGitHubProfilePicture() {
  try {
    const githubUsername = import.meta.env.VITE_GITHUB_USERNAME;
    const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

    if (!githubUsername || !githubToken) {
      console.error(
        "GitHub username or token not found in environment variables.",
      );
      return null;
    }

    const response = await axios.get(
      `${GITHUB_API_BASE_URL}/users/${githubUsername}`,
      {
        headers: {
          Authorization: `token ${githubToken}`,
        },
      },
    );

    return response.data.avatar_url;
  } catch (error) {
    console.error("Error fetching GitHub profile picture:", error);
    return null;
  }
}

export async function fetchGitHubRepositoriesLanguages(
  hideLanguages: string[],
  languageAliases: LanguageAliases,
) {
  try {
    const githubUsername = import.meta.env.VITE_GITHUB_USERNAME;
    const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

    const response = await axios.get(
      `${GITHUB_API_BASE_URL}/users/${githubUsername}/repos?per_page=100`,
      {
        headers: {
          Authorization: `token ${githubToken}`,
        },
      },
    );

    // Count the frequency of each language
    const languages: { [language: string]: { lines: number; repos: number } } =
      {};

    const totalRepoCount = response.data.length;

    const repoLanguagesResponses = await Promise.all(
      response.data.map(async (repo: { languages_url: string }) => {
        return axios.get(`${repo.languages_url}`, {
          headers: {
            Authorization: `token ${githubToken}`,
          },
        });
      }),
    );

    repoLanguagesResponses.forEach((repoLanguagesResponse) => {
      const repoLanguages: {
        [key: string]: number;
      } = repoLanguagesResponse.data;
      Object.entries(repoLanguages).forEach(([language, lines]) => {
        languages[language] = {
          lines: (languages[language]?.lines || 0) + lines,
          repos: (languages[language]?.repos || 0) + 1,
        };
      });
    });

    return Object.entries(languages)
      .filter(([language]) => !hideLanguages.includes(language))
      .map(([language, value]) => ({
        name: languageAliases[language] || language,
        frequency: (value.lines * value.repos) / totalRepoCount,
      }))
      .sort((a, b) => b.frequency - a.frequency)
      .map((lang) => lang.name);
  } catch (error) {
    console.error("Error fetching GitHub repositories languages:", error);
    return [];
  }
}

export async function fetchPortfolioData(
  portfolio: ProjectData[],
  hideLanguages: string[],
  languageAliases: LanguageAliases,
): Promise<ProjectProps[]> {
  try {
    const githubUsername = import.meta.env.VITE_GITHUB_USERNAME;
    const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

    const fetchRepoDetails = async (repoUrl: string) => {
      const response = await axios.get(repoUrl, {
        headers: {
          Authorization: `token ${githubToken}`,
        },
      });
      return response.data;
    };

    const fetchRepoLanguages = async (repoUrl: string) => {
      const response = await axios.get(repoUrl, {
        headers: {
          Authorization: `token ${githubToken}`,
        },
      });
      return response.data;
    };

    const projectPropsList: ProjectProps[] = [];

    for (const item of portfolio) {
      if (item.hide) {
        continue;
      }

      const description = item.additionalDesc ? [item.additionalDesc] : [];
      const repoUrl = `https://api.github.com/repos/${githubUsername}/${item.url}`;

      // Fetch repository details (including description)
      const repoDetailsResponse = await fetchRepoDetails(repoUrl);

      let langs: string[] = [];

      if (item.showGitHubLangs) {
        // Fetch languages for the current repository
        const repoLanguagesResponse = await fetchRepoLanguages(
          `${repoUrl}/languages`,
        );
        const repoLanguages = Object.keys(repoLanguagesResponse);
        const repoLanguageCount = repoLanguages.length;

        const languages: { [language: string]: number } = {};
        repoLanguages.forEach((language) => {
          languages[language] =
            (languages[language] || 0) + 1 / repoLanguageCount;
        });

        langs = Object.entries(languages)
          .sort((a, b) => b[1] - a[1])
          .map(([language]) => language)
          .filter((lang) => !hideLanguages.includes(lang))
          .map((lang) =>
            languageAliases[lang] ? languageAliases[lang] : lang,
          );
      }

      const projectProps: ProjectProps = {
        title: item.title,
        hl_tech: item.hl_tech,
        url: `https://github.com/${githubUsername}/${item.url}`,
        description: [repoDetailsResponse.description || "", ...description],
        tech: [...item.additionalTech, ...langs],
      };

      projectPropsList.push(projectProps);
    }

    return projectPropsList;
  } catch (error) {
    console.error("Error fetching portfolio data from GitHub:", error);
    return [];
  }
}
