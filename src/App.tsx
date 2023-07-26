import { useState, useEffect } from 'react';
import {
    fetchGitHubProfilePicture,
    fetchGitHubRepositoriesLanguages
} from './services/GitHubService';

import { Profile } from "./components/Profile"
import { Skills } from "./components/Skills"
import { MetaTags } from "./components/MetaTags";

import { Data as dataSchema } from "./schemas/Data";

function App() {
    const {
        profile,
        about,
        hardSkills,
        hardSkillAlias,
        hideLanguages,
        softSkills,
    } = dataSchema;
    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const [hardSkillsFetched, setHardSkillsFetched] = useState<string[]>([]);

    useEffect(() => {

        // Fetch the GitHub profile picture when the component mounts
        fetchGitHubProfilePicture()
            .then((avatarUrl) => setProfilePicture(avatarUrl))
            .catch((error) => console.error('Error fetching profile picture:', error));

        // Fetch the hard skills from GitHub repositories when the component mounts
        fetchGitHubRepositoriesLanguages()
            .then((languages) => {
                languages = languages.filter((lang) => !hideLanguages.includes(lang));
                const languagesMapped = languages.map((skill) => hardSkillAlias[skill] ? hardSkillAlias[skill] : skill);
                setHardSkillsFetched([ ...hardSkills.items, ...languagesMapped ]);
            })
            .catch((error) => console.error('Error fetching GitHub repositories languages:', error));
    }, []);
    
    return (
        <>
            <MetaTags {...profile} {...about} />
            <main className="l-main bd-container" id="bd-container">
                <div className="resume" id="area-cv">
                    <div className="resume__left">
                        {profilePicture !== null ? (
                            <Profile {...profile} image={profilePicture} />
                        ) : (
                            <p>Loading profile...</p>
                        )}
                        {hardSkillsFetched.length > 0 && (
                            <Skills title="Hard Skills" items={hardSkillsFetched} />
                        )}
                        <Skills {...softSkills} />
                    </div>
                    <div className="resume__left">

                    </div>
                </div>
            </main>
        </>
    )
}

export default App
