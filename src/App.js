import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Educations from "./components/Educations";

import ualberta from "./static/img/ualberta_logo.png";
import projectHomepage from "./static/img/project_homepage.png";
import projectAccessible from "./static/img/project_accessible.png";
import projectSocial from "./static/img/project_social.png";
import projectDental from "./static/img/project_dental.png";
import projectHabit from "./static/img/project_habit.png";
import jobSFU from "./static/img/job_SFU.png";
import jobEMQ from "./static/img/job_EMQ.png";
import jobAbercrombie from "./static/img/job_abercrombie.png";
import jobUAlberta from "./static/img/job_UAlberta.png";

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
        "Bachelor of Science - Honors",
        "Computing Science",
        "2019-2023",
      ],
    },
  ]);

  const [projects, setProjects] = useState([
    // {
    //   image: {
    //     src: projectHomepage,
    //     alt: "my homepage screenshot, with Navigation bar on the top, my portrait in the middle left and my intro in the middle right, my education experience (University of Alberta) by the end of the page",
    //   },
    //   title: "Hongwei's Homepage",
    //   description:
    //     "Hongwei's homepage introduces some basic facts about Hongwei, it is also a showcase for him: what projects, jobs, and skills he has. He thought a one-page resume is too small a space to see a person fully.",
    //   external: {
    //     url: "/",
    //   },
    //   skillSet: "React, HTML/CSS, Bootstrap, Google Domain",
    //   github: {
    //     url: "https://github.com/Hongwei-W",
    //   },
    //   completionDate: "Constantly Updating",
    // },
    {
      title: "PSRS Parallel Sorting by Random Sampling Algorithm Implementation",
      description:
        "Implemented SPMD program that reached 5 times speedup on a shared memory multi-processor system, with C++ and pthread library",
      word: {
        url: "https://drive.google.com/file/d/1RyFB7Fn5Uoo6dcg9H9EfRiWwP61RPPxQ/view?usp=sharing",
        title: "Implementation Report"
      },
      skillSet: "C++, pthread (multi-threading), Linux",
      completionDate: "Sep. 2022",
    },
    {
      image: {
        src: projectAccessible,
        alt: "the accessible remote classroom chrome extension dashboard, it display my current speaking volume and my speech rate; it also has some feedback from the meeting participants",
      },
      title: "Accessible Remote Classroom Chrome Extension",
      description:
        "This Chrome Extension helps the d/Deaf and hard-of-hearing (DHH) community participate and present on Google Meet. Accessible Classroom automatically measures your voice volume and speech rate, analyzes meeting participation and voice vs text chat usage, gives DHH people a chance to raise their accessibility accommodation and draw everyone's attention if there is a violation. Demo and application are available upon request.",
      skillSet: "Google Sheet (App Script), HTML/CSS, JavaScript, Bootstrap",
      // github: {
      //   url: "https://github.com/Hongwei-W/accessible_classroom",
      //   title: "GitHub",
      // },
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
      skillSet: "Figma, Human-Centered Design, Usability Research",
      completionDate: "Apr. 2022",
      figma: {
        url: "https://www.figma.com/file/t4FU4FKmUxrAktUocoPwuV/Dental-Check-(Copy)?node-id=0%3A1",
        title: "Figma Interactive Prototype",
      },
      slides: {
        url: "https://drive.google.com/file/d/15HFPy1F9Wgh4UIpQJjmexTXeqzeZshF_/view?usp=sharing",
        title: "Project Presentation Slides",
      },
      word: {
        url: "https://drive.google.com/file/d/1FyxrpdGthBdIKb-UgETVlc8ztMCJoOS8/view?usp=sharing",
        title: "Prototype in Word Document",
      },
    },
    {
      image: {
        src: projectHabit,
        alt: "a screenshot showing that an Android App is being designed, the Android Studio app is opened and a mock phone is layer on top of Android Studio",
      },
      title: "Habit Tracker -- An Android App",
      description:
        "Habit Tracker is an app that allows users to write a habit, set a goal, and track its progress. It also allows users to see others' habits with the owner's permission. Habit Tracker integrates Google Map APIs and can store photos so that you can recall your completion vividly. ",
      skillSet: "Java, OOP Principles, Android Studio, UI/Unit Testing",
      completionDate: "Dec. 2021",
      github: {
        url: "https://github.com/CMPUT301F21T28/habit_tracker",
      },
    },
  ]);

  const [jobs, setJobs] = useState([
    {
      image: {
        src: jobUAlberta,
        alt: "UAlberta school logo, the logo is on the right, the school full name is on the right",
      },
      title: "Research Assistant/Prototyper",
      description:
        "· Developed Cree predictive text interface with various trained NLP models, written in Django, JS, and Google form\n" +
        "· Conducted user studies for the granularities to prediction and Cree learning, drafted paper manuscript",
      company: "University of Alberta",
      interval: "Sep. 2022 - Now",
    },
    {
      image: {
        src: jobSFU,
        alt: "Simon Fraser University school logo, short hand 'SFU' on the top within a red box, school full name at the buttom",
      },
      title: "Research Assistant/Prototyper",
      description:
        "· Iteratively developed a Chrome Extension for supporting the d/Deaf and hard-of-hearing (DHH) community in virtual conferencing (VC) using JS and Google App Script, formulated features through formative user studies\n" +
        "· Proven to facilitate VC’s inclusivity and accessibility by testing with DHH participants in mocked seminars\n" +
        "· Drafted paper manuscript, preprint available upon request",
      company: "Simon Fraser University",
      interval: "Jun. 2022 - Now",
      // github: {
      //   // url: "https://github.com/Hongwei-W/accessible_classroom",
      //   title: "GitHub (coming soon)",
      // },
    },
    {
      image: {
        src: jobEMQ,
        alt: 'EMQ logo, "E", "M", "Q", three letters in the image, "E" has a design of three vertical bars',
      },
      title: "Software Developer",
      description:
        "· Achieved top 3 contributor by delivering MQTT broker clean_session feature, aligned MQTT protocol, written in C\n" +
        "· Launched 1 major release (0.3.2) with the assistance of the manager and reached 400+ GitHub starred users\n" +
        "· Redesigned broker’s Linux interface and product documentation iteratively, by researching needs and feedback\n" +
        "· Efficiently communicated with the manager for prioritizing tickets with scrum practices, used Jira and Slack",
      company: "EMQ Technologies Co. Ltd.",
      interval: "Jan. 2021 - Jul. 2021",
      github: {
        url: "https://github.com/emqx/nanomq/pulls?q=is%3Apr+is%3Aclosed+author%3AHongwei-W",
        title: "My GitHub Pull Requests",
      },
    },
    {
      image: {
        src: jobAbercrombie,
        alt: "Abercrombie & Fitch company logo, with it for sub-brands 2. Abercrombie Kids, 3. Hollister, 4. Gilly Hicks in the bottom",
      },
      title: "Sales & Stock Associate",
      description:
        "· Crushed morning MVT and ATV multiple times by identifying customers’ segments and providing useful one-on-one outfit recommendations\n" +
        "· Awarded store MVP 2 times and facilitated training employees with managers with proven communication skills\n" +
        "· Promoted to permanent from seasonal employee and awarded store MVP within the first month of job started",
      company: "Abercrombie & Fitch Edmonton + Hollister Qingdao",
      interval: "Jul. 2018 – Oct. 2020",
    },
  ]);

  const [contact, setContact] = useState([
    {
      email: "hongwei2[at]ualberta[dot]ca",
      linkedIn: "https://www.linkedin.com/in/hongwei-wang/",
      github: "https://github.com/hongwei-W/",
      leetcode: "https://leetcode.com/wanghw22/",
      resume: "https://drive.google.com/file/d/1yNjSM_7770cEMoFCg0iR2Ib0ZphfaVKK/view?usp=sharing",
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
      <Divider text="work" id="WORK" />
      <Jobs jobs={jobs} />
      <Divider text="contact" id="CONTACT" />
      <Contact contact={contact} />
    </div>
  );
}

export default App;
