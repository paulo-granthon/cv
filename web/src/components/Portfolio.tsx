import { ReactElement } from "react";
import { Description } from "./Description";
import { 
    ProjectProps,
    PortfolioProps,
} from "../shared/Portfolio";

const Project = ({ title, hl_tech, url, description, tech }: ProjectProps): ReactElement => {
    return (
        <div className="experience__content project">
            <div className="experience__time">
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
            </div>
            <div className="experience__data bd-grid">
                <div className="project__header">
                    <h3 className="experience__title">{title}</h3>
                    <h3 className="experience__hl-tech">{hl_tech}</h3>
                    <a className='bx actions project-url-icon bx-link-external' href={url} target="_blank"></a>
                </div>
                <a className="project-url" href={url} target="_blank">{url}</a>
                {description.map((desc, i) => <Description key={i} desc={desc} />)}
                {tech.length > 0 ? (
                    <div className="project-tech-list">
                        {tech.map((t, i) => <p key={i}>{t}</p>)}
                    </div>
                ) : (null)}
            </div>
        </div>
    );
};

export const Portfolio = ({ portfolio }: PortfolioProps): ReactElement => {
    return (
        <section className="projects-experience section" id="projects">
            <h2 className="section-title">Portfolio</h2>
            <div className="experience__container bd-grid">
            {portfolio !== null ? (
                <div className="projects__list">
                {portfolio.map((project) => (
                    <Project key={project.title} {...project} />
                ))}
                </div>
            ) : (
                <p>Loading portfolio...</p>
            )}
            </div>
        </section>
    );
};
