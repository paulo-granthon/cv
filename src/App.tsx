import { useState, useEffect } from "react";
import {
  fetchGitHubProfilePicture,
  fetchGitHubRepositoriesLanguages,
  fetchPortfolioData,
} from "./services/GitHubService";

import { Profile } from "./components/Profile";
import { About } from "./components/About";
import { ListSection } from "./components/ListSection";
import { MetaTags } from "./components/MetaTags";
import { Works } from "./components/Works";
import { Education } from "./components/Education";
import { Portfolio } from "./components/Portfolio";
import { Socials } from "./components/Socials";
// import { Localization } from "./components/Localization";

import { PDF } from "./components/PDF";
import { Theme } from "./components/Theme";

import { getData, DataSchema } from "./schemas/Data";

import { ProjectProps } from "./shared/Portfolio";

import { API, Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
API.configure(awsconfig);

const helloApiInit = {
  headers: {},
};

function App() {
  const {
    profile,
    socials,
    about,
    hardSkills,
    frameworks,
    languages,
    languageAliases,
    hideLanguages,
    softSkills,
    works,
    education,
    projects,
  }: DataSchema = getData;

  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [languagesFetched, setlanguagesFetched] = useState<string[]>([]);
  const [portfolio, setPortfolio] = useState<ProjectProps[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [theme, setTheme] = useState<string>("0");

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "1" ? "0" : "1";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    API.get("hello", "/hello", helloApiInit)
      .then((response) => {
        console.log("request successful from /hello:", response);
      })
      .catch((error) => {
        console.log("request error from /hello:", error);
      });

    // API.get("ghfetch", "/ghpfp", helloApiInit).then(response => {
    //     console.log("request successful from /ghpfp:", response);
    // }).catch(error => {
    //     console.log("request error from /ghpfp:", error);
    // })

    if (localStorage.getItem("theme") === "1") {
      setTheme("1");
      document.body.classList.add("dark-theme");
    }

    // Fetch the GitHub profile picture when the component mounts
    fetchGitHubProfilePicture()
      .then((avatarUrl) => setProfilePicture(avatarUrl))
      .catch((error) =>
        console.error("Error fetching profile picture:", error),
      );

    // Fetch the hard skills from GitHub repositories when the component mounts
    fetchGitHubRepositoriesLanguages(hideLanguages, languageAliases)
      .then((langs) => setlanguagesFetched([...languages.items, ...langs]))
      .catch((error) =>
        console.error("Error fetching GitHub repositories languages:", error),
      );

    // Fetch the portfolio data from GitHub when the component mounts
    fetchPortfolioData(projects, hideLanguages, languageAliases)
      .then((projs) => setPortfolio(projs || []))
      .catch((error) =>
        console.error("Error fetching portfolio data from GitHub:", error),
      );
  }, [hideLanguages, languageAliases, languages.items, projects]);

  return (
    <>
      <MetaTags {...profile} {...about} />
      <main className="l-main bd-container" id="bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            {!isGenerating ? (
              <div className="cv-toolbox">
                <PDF
                  contentId="bd-container"
                  setIsGenerating={setIsGenerating}
                />
                <Theme theme={theme} toggleTheme={toggleTheme} />
              </div>
            ) : null}
            <Profile {...profile} image={profilePicture} />
            <About {...about} />
            <ListSection title="Hard Skills" items={hardSkills} />
            <ListSection title="Frameworks" items={frameworks} />
            {languagesFetched.length > 0 && (
              <ListSection title="Languages" items={languagesFetched} />
            )}
            <ListSection {...softSkills} />
            <Socials label="Socials" socials={socials} />
          </div>
          <div className="resume__right">
            <Works works={works} />
            <Education education={education} />
            <Portfolio portfolio={portfolio} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
