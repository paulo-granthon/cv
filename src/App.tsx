import { useState, useEffect } from 'react';
import {
    fetchGitHubProfilePicture,
    fetchGitHubRepositoriesLanguages
} from './services/GitHubService';

import { Profile } from "./components/Profile"
import { About } from "./components/About"
import { ListSection } from "./components/ListSection"
import { MetaTags } from "./components/MetaTags";
import { Works } from "./components/Works";

import { Data as dataSchema } from "./schemas/Data";

function App() {
    const {
        profile,
        about,
        hardSkills,
        frameworks,
        languages,
        languagesAlias,
        hideLanguages,
        softSkills,
        works,
    } = dataSchema;
    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const [languagesFetched, setlanguagesFetched] = useState<string[]>([]);

    useEffect(() => {

        // Fetch the GitHub profile picture when the component mounts
        fetchGitHubProfilePicture()
            .then((avatarUrl) => setProfilePicture(avatarUrl))
            .catch((error) => console.error('Error fetching profile picture:', error));

        // Fetch the hard skills from GitHub repositories when the component mounts
        fetchGitHubRepositoriesLanguages()
            .then((langs) => {
                langs = langs.filter((lang) => !hideLanguages.includes(lang));
                const languagesMapped = langs.map((lang) => languagesAlias[lang] ? languagesAlias[lang] : lang);
                setlanguagesFetched([ ...languages.items, ...languagesMapped ]);
            })
            .catch((error) => console.error('Error fetching GitHub repositories languages:', error));
    }, []);
    
    return (
        <>
            <MetaTags {...profile} {...about} />
            <main className="l-main bd-container" id="bd-container">
                <div className="resume" id="area-cv">
                    <div className="resume__left">
                        <Profile {...profile} image={profilePicture} />
                        <About {...about} />
                        <ListSection title="Hard Skills" items={hardSkills} />
                        <ListSection title="Frameworks" items={frameworks} />
                        {languagesFetched.length > 0 && (
                            <ListSection title="Languages" items={languagesFetched} />
                        )}
                        <ListSection {...softSkills} />
                    </div>
                    <div className="resume__left">
                        <Works works={works} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
