import Heading from "./components/Heading"
import Section from "./components/Section"
import List from "./components/List"

import { useState } from 'react'

function App() {
    return (
        <>
            <main className="l-main bd-container" id="bd-container">
                <div className="resume" id="area-cv">
                    <div className="resume__left">
                        <Heading title={"Hello"} />
                        <Section title={"This is a section"}>oi</Section>
                        <List items={["1", "2", "3"]} render={(item: string) => <span className="gold">{item}</span>} />
                    </div>
                    <div className="resume__left">

                    </div>
                </div>
            </main>
        </>
    )
}

export default App
