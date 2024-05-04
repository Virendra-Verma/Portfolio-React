import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "Handicraft E-Commerce Website",
        tags: ["react"],
        link: "https://handicraft-project-zcam-git-main-virendra-vermas-projects.vercel.app/",
        media: {
            thumbnail: require("../../images/portfolio/tasty-trove.jpg"),
        },
    },
    {
        id: 2,
        name: "Snake Game",
        tags: ["js"],
        link: "https://virendra-verma.github.io/SnakeGame.github.io/",
        media: {
            thumbnail: require("../../images/portfolio/tic-tac-toe.jpg"),
        },
    },
    {
        id: 3,
        name: "E-Commerce Website",
        tags: ["js"],
        link: "https://virendra-verma.github.io/E-commerce_website.github.io/",
        media: {
            thumbnail: require("../../images/portfolio/movix.jpg"),
        },
    },
    {
        id: 4,
        name: "Dev App",
        tags: ["react"],
        link: "https://dev-git-master-virendra-vermas-projects.vercel.app/",
        media: {
            thumbnail: require("../../images/portfolio/todo.jpeg"),
        },
    },
    {
        id: 5,
        name: "BMI Calculator",
        tags: ["js"],
        link: "https://virendra-verma.github.io/BMI-Calculator-main/",
        media: {
            thumbnail: require("../../images/portfolio/BMICalculator.jpeg"),
        },
    },
    {
        id: 6,
        name: "Tic Tac Toe Game",
        tags: ["js"],
        link: "https://virendra-verma.github.io/Tic-Tac-Toe-master/",
        media: {
            thumbnail: require("../../images/portfolio/Tic-Tac.webp"),
        },
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="dark"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
