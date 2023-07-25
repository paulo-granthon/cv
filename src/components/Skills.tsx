import { ReactElement } from "react";

interface SkillProps {
  skill: string;
}

const Skill = ({ skill }: SkillProps): ReactElement => (
    <li className="skills__name">
        <span className="skills__circle" />
        {skill}
    </li>
);

interface SkillsProps {
    title: string;
    items: string[];
}

export const Skills = ({
    title,
    items
}: SkillsProps ): ReactElement => {
    return (
        <>
            <section className="hard-skills section" id="skills">
                <h2 className="section-title">{ title }</h2>
                <div className="skills__content bd-grid">
                    <ul className="skills__data">
                        {items.map((skill) => <Skill key={skill} skill={skill} />)}
                    </ul>
                </div>
            </section>
        </>
    );
};

