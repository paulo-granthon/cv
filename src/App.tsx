import { useState, useEffect } from 'react';
import { fetchGitHubProfilePicture } from './services/GitHubService';

import { Profile } from "./components/Profile"
import { MetaTags } from "./components/MetaTags";

import { Data as dataSchema } from "./schemas/Data";

function App() {
    const { profile, about } = dataSchema;
    const [profilePicture, setProfilePicture] = useState<string | null>(null);

    useEffect(() => {
        // Fetch the GitHub profile picture when the component mounts
        fetchGitHubProfilePicture()
        .then((avatarUrl) => setProfilePicture(avatarUrl))
        .catch((error) => console.error('Error fetching profile picture:', error));
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
                    </div>
                    <div className="resume__left">

                    </div>
                </div>
            </main>
        </>
    )
}

export default App
