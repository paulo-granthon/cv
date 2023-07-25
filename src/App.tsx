import { useState, useEffect } from 'react';
import {
    fetchGitHubProfilePicture,
    fetchGitHubRepositoriesLanguages
} from './services/GitHubService';

import { Profile } from "./components/Profile"
import { Skills } from "./components/Skills"
import { MetaTags } from "./components/MetaTags";

import { Data as dataSchema } from "./schemas/Data";

import "./App.css";

function App() {
    const { profile, about, hardSkills, softSkills } = dataSchema;
    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const [hardSkills, setHardSkills] = useState<string[]>([]);

    useEffect(() => {

        // Fetch the GitHub profile picture when the component mounts
        fetchGitHubProfilePicture()
            .then((avatarUrl) => setProfilePicture(avatarUrl))
            .catch((error) => console.error('Error fetching profile picture:', error));

        // Fetch the hard skills from GitHub repositories when the component mounts
        const { githubUsername, githubToken } = dataSchema;
        fetchGitHubRepositoriesLanguages(githubUsername, githubToken)
            .then((languages) => setHardSkills(languages))
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
                        {hardSkills.length > 0 && (
                            <Skills title="Hard Skills" items={hardSkills} />
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
