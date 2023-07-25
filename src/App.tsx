import Heading from "./components/Heading"
import { Section } from "./components/Section"
import List from "./components/List"

import { useState } from 'react'

function App() {
    return (
        <>
            <Heading title={"Hello"} />
            <Section title={"This is a section"}>oi</Section>
            <List items={["1", "2", "3"]} render={(item: string) => <span className="gold">{item}</span>} />
        </>
    )
}

export default App
