# CV - Curriculum Vitae with React and Typescript

This is a Resume project built using React and TypeScript, and it provides a user-friendly interface for visitors to explore my professional background and technical expertise.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [GitHub Integration](#github-integration)
- [Fetching Data](#fetching-data)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

As a Full Stack Developer, I wanted to create a dynamic and interactive portfolio to showcase my skills and projects. This portfolio is a web application built with React and TypeScript, making it easy to customize and expand with new projects and information.

## Features

- Fetch GitHub repository data using GitHub API to display my profile picture, most used programming languages and additional info of my repositories.
- Display personal information including name, occupation, location, email, and telephone.
- Showcase my professional profile with a concise description and list of soft skills.
- Display my technical skills as a Full Stack Developer, including both hard and soft skills.
- Showcase my past projects, each with a title, description, and technology stack used.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Create a `.env` file in the root directory and provide your GitHub API token and username. For example:

```properties
VITE_GITHUB_TOKEN=your_github_api_token_here
VITE_GITHUB_USERNAME=your_github_username_here
```

4. Start the development server with `npm run dev`.

## Project Structure

The project follows a simple directory structure:

- `src`: Contains all the source code for the React application.
  - `App.tsx`: The core of the application, where all the components are combined to create the full resume page. 
  - `components`: Contains reusable React components used throughout the project.
  - `services`: Contains utility functions for fetching data from GitHub API.
  - `schemas`: Contains TypeScript interfaces used for data structures.
  - `styles`: Contains global styles and CSS modules.
  - `Data.ts`: Contains the main data for the portfolio, including personal information, skills, and project details.

## Technologies Used

The portfolio is built with the following technologies and libraries:

- React: A popular JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript, providing enhanced code quality and tooling.
- Axios: A popular HTTP client used to fetch data from GitHub API.
- Vite: A fast and lightweight build tool for modern web projects.

## GitHub Integration

The portfolio integrates with GitHub to fetch and display data from my GitHub repositories. By providing my GitHub API token and username in the `.env` file, the application fetches data such as the project descriptions and languages used in each repository.

## Fetching Data

The `GitHubService.ts` file contains functions to fetch data from the GitHub API. It retrieves information about repositories, including descriptions and languages used. The fetched data is then used to dynamically populate the portfolio with my latest projects.

## Customization

The portfolio is designed to be easily customizable. The `Data.ts` file contains all the relevant information, allowing me to update my personal details, skills, and projects without making changes to the codebase.

## Deployment

This portfolio can be deployed on a hosting platform (e.g., Vercel, Netlify) to make it accessible to the public. The deployment process is straightforward, and the application can be accessed currently via [Vercel](https://p-granthon.vercel.app/).

## Contributing

Contributions to this project are welcome! If you find a bug, have a suggestion, or want to add a new feature, feel free to submit an issue or pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. Feel free to use, modify, and distribute the code as per the terms of the MIT License.

## **Disclaimer:**

The source code in this project is licensed under the [MIT License](https://opensource.org/licenses/MIT). The license covers the source code files and does not grant any rights to the personal information or data contained in the project.

Please note that the personal information, including but not limited to names, contact details, and any other sensitive data, is private and not covered by the project's license. The use or distribution of personal information without explicit permission is prohibited.

By using the source code provided in this project, you agree to comply with the terms of the applicable license and acknowledge that your use of any personal information from the project is strictly prohibited.

For more information about the project's licensing and handling of personal information, please refer to the [LICENSE](./LICENSE) file and the project's documentation.

