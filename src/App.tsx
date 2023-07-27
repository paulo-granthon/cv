import { useState, useEffect } from 'react';
import {
    fetchGitHubProfilePicture,
    fetchGitHubRepositoriesLanguages,
    fetchPortfolioData,
} from './services/GitHubService';

import { Profile } from "./components/Profile"
import { About } from "./components/About"
import { ListSection } from "./components/ListSection"
import { MetaTags } from "./components/MetaTags";
import { Works } from "./components/Works";
import { Education } from "./components/Education";
import { Portfolio } from "./components/Portfolio";
import { Socials } from "./components/Socials";

import { PDF } from "./components/PDF";

import { Data as dataSchema } from "./schemas/Data";

import { ProjectProps } from "./shared/Portfolio"

function App() {
    const {
        profile,
        socials,
        about,
        hardSkills,
        frameworks,
        languages,
        languageAliases,
        hideLanguages,
        softSkills,
        works,
        education,
        projects,
    } = dataSchema;

    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const [languagesFetched, setlanguagesFetched] = useState<string[]>([]);
    const [portfolio, setPortfolio] = useState<ProjectProps[]>([]);
    const [isGenerating, setIsGenerating] = useState(false);
    useEffect(() => {

        // Fetch the GitHub profile picture when the component mounts
        fetchGitHubProfilePicture()
            .then((avatarUrl) => setProfilePicture(avatarUrl))
            .catch((error) => console.error('Error fetching profile picture:', error));

        // Fetch the hard skills from GitHub repositories when the component mounts
        fetchGitHubRepositoriesLanguages(hideLanguages, languageAliases)
            .then((langs) => setlanguagesFetched([ ...languages.items, ...langs ]))
            .catch((error) => console.error('Error fetching GitHub repositories languages:', error));

        // Fetch the portfolio data from GitHub when the component mounts
        fetchPortfolioData(projects, hideLanguages, languageAliases)
            .then((projs) => setPortfolio(projs || [] ))
            .catch((error) => console.error('Error fetching portfolio data from GitHub:', error));

    }, []);
    return (
        <>
            <MetaTags {...profile} {...about} />
            <main className="l-main bd-container" id="bd-container">
                <div className="resume" id="area-cv">
                    <div className="resume__left">
                        {!isGenerating ? (
                            <PDF contentId="bd-container" setIsGenerating={setIsGenerating}/ >

                        ) : (
                            null
                        )}
                        <Profile {...profile} image={profilePicture} />
                        <About {...about} />
                        <ListSection title="Hard Skills" items={hardSkills} />
                        <ListSection title="Frameworks" items={frameworks} />
                        {languagesFetched.length > 0 && (
                            <ListSection title="Languages" items={languagesFetched} />
                        )}
                        <ListSection {...softSkills} />
                        <Socials label="Socials" socials={socials} />
                    </div>
                    <div className="resume__right">
                        <Works works={works} />
                        <Education education={education} />
                        <Portfolio portfolio={portfolio} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
