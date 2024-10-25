import { ReactElement } from "react";
import { Description } from "./Description";

interface CourseProps {
  title: string;
  period: string;
  institution: string;
  description: string[];
}

const Course = ({
  title,
  period,
  institution,
  description,
}: CourseProps): ReactElement => {
  return (
    <div className="education__content">
      <div className="education__time">
        <span className="education__rounder"></span>
        <span className="education__line"></span>
      </div>
      <div className="education__data bd-grid">
        <h3 className="education__title">{title}</h3>
        <span className="education__year">
          {period} | {institution}
        </span>
        {description.map((desc, i) => (
          <Description key={i} desc={desc} />
        ))}
      </div>
    </div>
  );
};

interface EducationProps {
  education: CourseProps[];
}

export const Education = ({ education }: EducationProps): ReactElement => {
  return (
    <section className="education-experience section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education__container bd-grid">
        {education.map((course) => (
          <Course key={course.institution} {...course} />
        ))}
      </div>
    </section>
  );
};
