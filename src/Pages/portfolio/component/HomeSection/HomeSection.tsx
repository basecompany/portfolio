import "./HomeSection.css"
import Object from "./component/object/Object.tsx";
import {Github, Linkedin, Mail} from "lucide-react";
import {type JSX} from "react";

export interface I_HomeSectionContent{
    title: string,
    description: string,
    githubLink: string,
    linkedinLink: string,
    mailLink: string,
}
export interface I_HomeSectionProps {
    showObjects: boolean;
}

function HomeSection({ showObjects }: I_HomeSectionProps): JSX.Element {


    const HomeSectionContent: I_HomeSectionContent = {
        title: "Hi, There",
        description: "I am Ilyass Baba, Driven software engineering with a passion for computer science and aviation. Skilled in a variety of programming languages and technologies, with experience as a freelance developer. Dedicated to continuous learning and applying cutting-edge tools and techniques to deliver innovative solutions. Seeking opportunities to further develop my skills and contribute to dynamic technical teams.",
        githubLink: "https://github.com/IlyassBa",
        linkedinLink: "https://www.linkedin.com/in/ilyass-baba-040aa7237/",
        mailLink: "mailto:ilyassbaba.me@gmail.com",
    }



    return (
        <div className="Landing" id="Landing">
            <div className={`OBJECTS ${showObjects ? "visible" : "hidden"}`}>
                <Object />
            </div>

            <div className={`Landing-Text animate__fadeIn ${showObjects ? "visible" : "hidden"}`}>
                <div className="Landing-Text-Title">
                    <h1>{HomeSectionContent.title}</h1>
                </div>
                <div className="Landing-Text-Text">
                    <p>{HomeSectionContent.description}</p>
                </div>
                <div className="Landing-Text-Button">
                    <a href={HomeSectionContent.githubLink} target="_blank">
                        <Github />
                    </a>

                    <a href={HomeSectionContent.linkedinLink} target="_blank">
                        <Linkedin />
                    </a>

                    <a href={HomeSectionContent.mailLink} target="_blank">
                        <Mail />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HomeSection;
