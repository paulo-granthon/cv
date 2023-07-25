import { useState } from 'react'

import Heading from "./components/Heading"
import Section from "./components/Section"
import List from "./components/List"

import { Profile } from "./components/Profile"

import { Data as dataSchema } from "./schemas/Data";

function App() {

    const { profile } = dataSchema;

    return (
        <>
            <main className="l-main bd-container" id="bd-container">
                <div className="resume" id="area-cv">
                    <div className="resume__left">
                        <Profile {...profile} />
                    </div>
                    <div className="resume__left">

                    </div>
                </div>
            </main>
        </>
    )
}

export default App
