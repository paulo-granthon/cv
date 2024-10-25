import { ReactElement } from "react";
import { Description } from "./Description";

interface WorkProps {
  title: string;
  period: string;
  company: string;
  description: string[];
}

const Work = ({
  title,
  period,
  company,
  description,
}: WorkProps): ReactElement => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">{title}</h3>
        <span className="experience__company">
          {period} | {company}
        </span>
        {description.map((desc, i) => (
          <Description key={i} desc={desc} />
        ))}
      </div>
    </div>
  );
};

interface WorksProps {
  works: WorkProps[];
}

export const Works = ({ works }: WorksProps): ReactElement => {
  return (
    <section className="work-experience section" id="experience">
      <h2 className="section-title">Recent Experience</h2>
      <div className="experience__container bd-grid">
        {works.map((work) => (
          <Work key={work.company} {...work} />
        ))}
      </div>
    </section>
  );
};
