import { ReactElement } from "react";

interface ProfileProps {
  name: string;
  ocupation: string;
  location: string;
  email: string;
  telephone: string;
  image: string | null;
}

export const Profile = ({
  name,
  ocupation,
  location,
  email,
  telephone,
  image,
}: ProfileProps): ReactElement => {
  return (
    <section className="home" id="home">
      <div className="home__container section bd-grid">
        <div className="home__data bd-grid">
          {image !== null ? (
            <img src={image} alt="profile_image" className="home__img" />
          ) : (
            <p>Loading picture...</p>
          )}
          <h1 className="home__title">
            <strong>{name}</strong>
          </h1>
          <h3 className="home__profession">{ocupation}</h3>
        </div>
        <div className="home__address bd-grid">
          <span className="home__information">
            <i className="bx bx-map home__icon" /> {location}
          </span>
          <span className="home__information">
            <i className="bx bx-envelope home__icon" /> {email}
          </span>
          <span className="home__information">
            <i className="bx bx-phone home__icon" /> {telephone}
          </span>
        </div>
      </div>
    </section>
  );
};
