import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Educations from "./components/Educations";

import ualberta from "./static/img/ualberta_logo.png";
import projectAccessible from "./static/img/project_accessible.png";
import projectSocial from "./static/img/project_social.png";
import projectDental from "./static/img/project_dental.png";
import { useState } from "react";
import Projects from "./components/Projects";
import Jobs from "./components/Jobs";
import Contact from "./components/Contact";

function App() {
  const [educations, setEducations] = useState([
    {
      logo: {
        src: ualberta,
        alt: "the logo of University of Alberta. The logo is green and constituted of a book, mountains, and rivers",
      },
      infos: [
        "University of Alberta",
        "Bachelor of Science Honors",
        "Computing Science",
        "2019-2023",
      ],
    },
  ]);

  const [projects, setProjects] = useState([
    {
      image: {
        src: projectAccessible,
        alt: "the accessible remote classroom chrome extension dashboard, it display my current speaking volume and my speech rate; it also has some feedback from the meeting participants",
      },
      title: "Accessible Remote Classroom Chrome Extension",
      description:
        "Build a chrome extension by pure html and css, description WIP",
      skillSet:
        "HTML, CSS, JavaScript, Chrome Extension, Google Sheet, Google App Script",
      github: "https://github.com/Hongwei-W/accessible_classroom",
      completionDate: "Aug. 2022",
    },
    {
      image: {
        src: projectSocial,
        alt: "Happy Tree Friends, a distributed social application dashboard, it shows a post from a foreign node",
      },
      title: "Happy Tree Friends -- A Distributed Social App",
      description: "WIP",
      skillSet: "HTML, CSS, JavaScript, Django, Python, Heroku",
      github:
        "https://github.com/CMPUT404-Organisation-Not-Found/SocialDistribution",
      completionDate: "Apr. 2022",
    },
    {
      image: {
        src: projectDental,
        alt: "a small chat window overlay on the dash board of dental check app where the patient (user) is chatting with his doctor",
      },
      title: "Dental Check -- A Human-Centered Software Prototype",
      description: "WIP",
      skillSet: "Figma, HCI User Studies",
      completionDate: "Apr. 2022",
      figma:
        "https://www.figma.com/file/wjbruG8Ndb4q5opftJos4R/Dental-Check?node-id=0%3A1",
    },
  ]);

  const [jobs, setJobs] = useState([
    {
      title: "Research Assistant",
      description: "description WIP",
      company: "Simon Fraser University",
      interval: "Jun. 2022 - Now",
      github: "https://github.com/Hongwei-W/accessible_classroom",
    },
  ]);

  const [contact, setContact] = useState([
    {
      email: "hongwei2[at]ualberta[dot]ca",
      linkedIn: "https://www.linkedin.com/in/hongwei-wang/",
      github: "https://github.com/hongwei-W/",
      leetcode: "https://leetcode.com/wanghw22/",
    },
  ]);

  return (
    <div className="App">
      <Nav />
      <Intro />
      <Educations educations={educations} />
      <Projects projects={projects} />
      <Jobs jobs={jobs} />
      <Contact contact={contact} />
    </div>
  );
}

export default App;
