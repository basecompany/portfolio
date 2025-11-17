import TaskCarousel from "./component/TaskCarousel/TaskCarousel.tsx";
import TechBanner from "./component/TechBanner/TechBanner.tsx";
import CVRoadmap from "./component/CVRoadmap/CVRoadmap.tsx";
import MyProjects from "./component/myprojects/MyProjects.tsx";
import {useEffect, useState} from "react";
import Header from "./component/Header/Header.tsx";
import HomeSection, {type I_HomeSectionContent} from "./component/HomeSection/HomeSection.tsx";

export default function Portfolio() {

    const [showObjects, setShowObjects] = useState(true);
    const [showHeader, setshowHeader] = useState(false);

    const HomeSectionContent: I_HomeSectionContent = {
        title: "Hi, There",
        description: "I am Ilyass Baba, Driven software engineering with a passion for computer science and aviation. Skilled in a variety of programming languages and technologies, with experience as a freelance developer. Dedicated to continuous learning and applying cutting-edge tools and techniques to deliver innovative solutions. Seeking opportunities to further develop my skills and contribute to dynamic technical teams.",
        githubLink: "https://github.com/IlyassBa",
        linkedinLink: "https://www.linkedin.com/in/ilyass-baba-040aa7237/"
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setshowHeader(scrollY > window.innerHeight * 0.1); // Hide after 60% scroll
            setShowObjects(scrollY < window.innerHeight * 0.5); // Hide after 60% scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return(
        <div>

            <Header
                visible={showHeader}
                links={[
                    { label: "Home", href: "#Landing" },
                    { label: "Collaborations", href: "#task-carousel" },
                    { label: "Curriculum", href: "#CVRoadmap" },
                    { label: "Projects", href: "#my-projects" },
                ]}
            />
            <HomeSection
                showObjects={showObjects}
                content={HomeSectionContent}
            />
            <TaskCarousel/>
            <TechBanner/>
            <CVRoadmap/>
            <MyProjects/>

            {/*<Footer/>*/}

        </div>
    )
}


