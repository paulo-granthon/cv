import { ReactElement } from "react";

interface SocialProps {
    label: string,
    url: string,
    className: string,
}

const Social = ({ label, url, className }: SocialProps): ReactElement => (
  <a href={url} target="_blank" rel="noreferrer" className="social__link">
    <i className={`bx ${className} social__icon`}></i> {label}
  </a>
);

interface SocialsProps {
    label: string,
    social: string, 
}

export const Socials = ({ label, social }: SocialsProps): ReactElement => {
  return (
    <section className="social section">
      <h2 className="section-title">{label}</h2>
      <div className="social__container bd-grid">
        {social.map((social) => <Social key={social.name} {...social} />)}
      </div>
    </section>
  );
};
