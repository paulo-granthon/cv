import { ReactElement } from "react";
import { Description } from "./Description";
import { WorkCurrent } from "../schemas/Data";

type WorkProps = Omit<WorkCurrent, "description"> & {
  description?: string[];
};

const Work = ({
  title,
  period,
  company,
  description,
}: WorkProps): ReactElement => {
  return (
    <>
      <div className="experience__content">
        <div className="experience__time">
          <span className="experience__rounder"></span>
          <span className="experience__line"></span>
        </div>
        <div className="experience__data bd-grid">
          <div className="experience__data_header">
            <h3 className="experience__title">{title}</h3>
            <span className="experience__company">
              {period} | {company}
            </span>
          </div>
          {description &&
            description.map((desc, i) => <Description key={i} desc={desc} />)}
        </div>
      </div>
    </>
  );
};

interface WorksProps {
  works: WorkProps[];
}

export const Works = ({ works }: WorksProps): ReactElement => {
  return (
    <section className="work-experience section" id="experience">
      <h2 className="section-title">Professional History</h2>
      <div className="experience__container bd-grid">
        {works.map((work) => (
          <div className="experience__group">
            <Work key={work.company} {...work} />
            {work.previous &&
              work.previous.map((prev) => (
                <Work key={work.company} company={work.company} {...prev} />
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};
