import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsTools } from "react-icons/bs";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";
import Resume from "../../download/Resume.pdf";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="light"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2><BsTools/>&nbsp;Skills</h2>
                    <p>
                        Proficient in <span className="highlight">HTML5</span> and <span className="highlight">CSS</span>, ensuring the foundation of every 
                        project is solid. My expertise extends to <span className="highlight">SCSS</span> for efficient 
                        styling, <span className="highlight">Javascript</span> for dynamic interactivity, and <span className="highlight">React.js</span> for 
                        building interactive user interfaces. I'm a beginner level in server - side 
                        development using <span className="highlight">Node.js</span> and <span className="highlight">Express.js</span>, and I also excel 
                        in <span className="highlight">DSA</span> with <span className="highlight">Java</span>, with a strong grasp of 
                        <span className="highlight"> Object-Oriented Programming</span> principles. Additionally, I am a <span className="highlight"> UI/UX </span>
                        starter and trying my hands on <span className="highlight">Python</span> development as well.
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open((Resume))}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
