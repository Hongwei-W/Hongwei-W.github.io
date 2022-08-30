import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Educations from "./components/Educations";

import ualberta from "./static/img/ualberta_logo.png";
import projectHomepage from "./static/img/project_homepage.png";
import projectAccessible from "./static/img/project_accessible.png";
import projectSocial from "./static/img/project_social.png";
import projectDental from "./static/img/project_dental.png";
import { useState } from "react";
import Projects from "./components/Projects";
import Jobs from "./components/Jobs";
import Contact from "./components/Contact";
import Divider from "./components/Divider";

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
        src: projectHomepage,
        alt: "my homepage screenshot, with Navigation bar on the top, my portrait in the middle left and my intro in the middle right, my education experience (University of Alberta) by the end of the page",
      },
      title: "Hongwei's Homepage",
      description:
        "Hongwei's homepage introduces some basic facts about Hongwei, it is also a showcase for him: what projects, jobs, and skills he has. He thought a one-page resume is too small a space to see a person fully.",
      external: {
        url: "/",
      },
      skillSet: "React, HTML/CSS, Bootstrap, Google Domain",
      github: {
        url: "https://github.com/Hongwei-W",
      },
      completionDate: "Constantly Update",
    },
    {
      image: {
        src: projectAccessible,
        alt: "the accessible remote classroom chrome extension dashboard, it display my current speaking volume and my speech rate; it also has some feedback from the meeting participants",
      },
      title: "Accessible Remote Classroom Chrome Extension",
      description:
        "This Chrome Extension helps the d/Deaf and hard-of-hearing (DHH) community participate and present on Google Meet. Accessible Classroom automatically measures your voice volume and speech rate; it analyzes meeting participation and voice vs text chat usage; it also gives DHH people a chance to raise their accessibility accommodation requests and draw everyone's attention if there is a violation. By using this Extension, Hongwei hopes that the accommodation requests can be more respected by hearing people.",
      skillSet: "Google Sheet (App Script), HTML/CSS, JavaScript, Bootstrap",
      github: {
        url: "https://github.com/Hongwei-W/accessible_classroom",
      },
      completionDate: "Aug. 2022",
    },
    {
      image: {
        src: projectSocial,
        alt: "Happy Tree Friends, a distributed social application dashboard, it shows a post from a foreign node",
      },
      title: "Happy Tree Friends -- A Distributed Social App",
      description:
        "Imagine this: a web app that you can write post, share to your friend(s), follow other, and most importantly, connect external of web app like this. You never stuck in one, closed ecosystem, instead, you are freely connect other people from other web app on our app without switching apps and remembering accounts. Thanks to our separation of front and backend, even you can connect our web app easily. ",
      skillSet: "Django, Heroku, Bootstrap, HTML/CSS, JavaScript (AJAX)",
      github: {
        url: "https://github.com/CMPUT404-Organisation-Not-Found/SocialDistribution",
      },
      video: {
        url: "https://drive.google.com/file/d/1ewbsIphpNsm-6joQltzpCrVx9PD042YB/view?usp=sharing",
        title: "Watch Demo Video",
      },
      completionDate: "Apr. 2022",
    },
    {
      image: {
        src: projectDental,
        alt: "a small chat window overlay on the dash board of dental check app where the patient (user) is chatting with his doctor",
      },
      title: "Dental Check -- A Human-Centered Software Prototype",
      description:
        "With Dental Check, dentists can track patients' records on an iPad. After dentists fill out periodontal charts, the system automatically builds an interactive 3D model of the patient's teeth. Build-in AI analyzer finds out lesions that are worth noticing and marks with colors. Dentists can interact with the model and edit these marks, they can also compare one patient's previous records by layering one on top of the others. Patients can also track their dentistry visits by creating their accounts and seeing their model on the dentists' permit.",
      skillSet:
        "Figma, Human-Centered Design, Usability Research (Cognitive Walk through, Wizard of Oz, Thank Aloud)",
      completionDate: "Apr. 2022",
      figma: {
        // url: "https://www.figma.com/file/wjbruG8Ndb4q5opftJos4R/Dental-Check?node-id=0%3A1",
        // title: "Figma Interactive Prototype",
        title: "Figma Interactive Prototype (come back later)",
      },
      slides: {
        // url: "https://docs.google.com/presentation/d/1PTpWswLwuLzsqJz7TBFP6K1iuU8yEPU5/edit?usp=sharing&ouid=117905099578856205481&rtpof=true&sd=true",
        // title: "Project Presentation Slides",
        title: "Project Presentation Slides (come back later)",
      },
      word: {
        // url: "https://docs.google.com/document/d/1rQs8atM8m7btMVb658ghpTFUVqzc5xVX/edit?usp=sharing&ouid=117905099578856205481&rtpof=true&sd=true",
        // title: "Prototype in Word Document",
        title: "Prototype in Word Document (come back later)",
      },
    },
  ]);

  const [jobs, setJobs] = useState([
    {
      title: "Research Assistant",
      description: "Other Work Experience WIP",
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
      <Divider text="education" id="EDUCATION" />
      <Educations educations={educations} />
      <Divider text="project" id="PROJECT" />
      <Projects projects={projects} />
      <Divider text="work (coming soon...)" id="WORK" />
      <Jobs jobs={jobs} />
      <Divider text="contact" id="CONTACT" />
      <Contact contact={contact} />
    </div>
  );
}

export default App;
