import { ReactElement } from "react";

interface AboutProps {
    label: string,
    description: string,
}

export const About = ({ label, description }: AboutProps): ReactElement => (
    <section className="profile section" id="profile">
        <h2 className="section-title">{label}</h2>
        <p className="profile__description">{description}</p>
    </section>
);
