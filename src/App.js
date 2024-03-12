import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Educations from "./components/Educations";

import ualberta from "./static/img/ualberta_logo.png";
import projectHomepage from "./static/img/project_homepage.png";
import projectTicket from "./static/img/project_ticket.jpg";
import projectAccessible from "./static/img/project_accessible.png";
import projectSocial from "./static/img/project_social.png";
import projectDental from "./static/img/project_dental.png";
import projectHabit from "./static/img/project_habit.png";
import jobFullscript from "./static/img/job_fullscript.svg";
import jobSAP from "./static/img/job_SAP.png";
import jobSFU from "./static/img/job_SFU.png";
import jobEMQ from "./static/img/job_EMQ.png";
import jobAbercrombie from "./static/img/job_abercrombie.png";
import jobUAlberta from "./static/img/job_UAlberta.png";

import { useState } from "react";
import Projects from "./components/Projects";
import Jobs from "./components/Jobs";
import Contact from "./components/Contact";
import Divider from "./components/Divider";
import Copyright from "./components/Copyright";

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
        "Sep. 2019 - Dec. 2023",
      ],
    },
  ]);

  const [projects, setProjects] = useState([
    {
      title: "A Full Lifecycle of a Web Application Deployment",
      subtitle: "DevOps Development",
      description: "Completed an end-to-end DevOps workflow through a course: configured a VPS and server TLS certificates using Ansible, and created GitLab CI/CD pipelines for Python application integration and deployment on Docker containers",
      skillSet: "Ansible, AWS EC2, Dokcer, GitLab CI/CD, Python",
      completionDate: "Work In Progress (updated: Mar. 2024)",
    },
    {
      image: {
        src: projectTicket,
        alt: "a screenshot of the reward flight tickets from Pushover that are available for booking",
      },
      title: "Reward Flight Tickets Checker",
      subtitle: "DevOps Development + API Client",
      description: "Developed a Python API client and deployed it on Azure Function App for automatically fetching rewards tickets, dynamically analyzing against historical Blob Storage data and YAML specs, and pushing notifications via Pushover",
      skillSet: "Python, Azure Function, Azure Blob Storage, Pushover",
      github: {
        title: "GitHub Repository of the API Client, available upon request",
      },
      completionDate: "Jan. 2024",
    },
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
    // {
    //   title:
    //     "PSRS Parallel Sorting by Random Sampling Algorithm Implementation",
    //   description:
    //     "Implemented SPMD program that reached 5 times speedup on a shared memory multi-processor system, with C++ and pthread library",
    //   word: {
    //     url: "https://drive.google.com/file/d/1RyFB7Fn5Uoo6dcg9H9EfRiWwP61RPPxQ/view?usp=sharing",
    //     title: "Implementation Report",
    //   },
    //   skillSet: "C++, pthread (multi-threading), Linux",
    //   completionDate: "Sep. 2022",
    // },
    {
      image: {
        src: projectAccessible,
        alt: "the accessible remote classroom chrome extension dashboard, it display my current speaking volume and my speech rate; it also has some feedback from the meeting participants",
      },
      title: "Accessible Remote Classroom Chrome Extension",
      subtitle: "Fullstack Development",
      description:
        "This Chrome Extension helps the d/Deaf and hard-of-hearing (DHH) community participate and present on Google Meet. Accessible Classroom automatically measures your voice volume and speech rate, analyzes meeting participation and voice vs text chat usage, gives DHH people a chance to raise their accessibility accommodation and draw everyone's attention if there is a violation. Demo and application are available upon request.",
      skillSet: "Google Sheet (App Script), HTML/CSS, JavaScript, Bootstrap",
      github: {
        url: "https://github.com/Hongwei-W/accessible_classroom",
        title: "GitHub Repository of the Chrome Extension",
      },
      completionDate: "Aug. 2022",
    },
    {
      image: {
        src: projectSocial,
        alt: "Happy Tree Friends, a distributed social application dashboard, it shows a post from a foreign node",
      },
      title: "Happy Tree Friends -- A Distributed Social App",
      subtitle: "Fullstack Development",
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
      subtitle: "UI/UX Design",
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
      subtitle: "Android App Development",
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
        src: jobFullscript,
        alt: "Fullscript logo, the logo is a fullscript's green leaf and the company name is on the right",
      },
      title: "DevOps Engineer Intern",
      description:
        "· Invented a manual (man) page generation feature for a Cobra-based command line tool built in Go, integrated it into the GitLab CI pipeline for asset bundling, and automated client-side man page updates post CLI releases\n" +
        "· Demoed at DevOps Monthly to elicit feedback on feature usability and clarity, enhanced with custom Shell functions\n" +
        "· Fixed documentation ambiguity by refactoring the underlying code, contributing upstream to spf13/pflag repository\n" +
        "· Collaborated on code reviews for all team merge requests, including those outside of my direct responsibilities",
      company: "Fullscript",
      interval: "Jan. 2024 - Apr. 2024",
    },
    {
      image: {
        src: jobSAP,
        alt: "SAP Inc. logo, the logo has a background color of blue with three letter 's', 'a', 'p' in the middle",
      },
      title: "Software Developer",
      description:(
      <>
        <span style={{ fontSize: '1.025rem' }}>Full-Stack Development of a Compliance Evaluation Web Application</span><br /> 
        · Reconstructed a Python Flask back-end using MVC design patterns, achieving 90% test coverage with pytest, and prompt-engineered GPT-4 to automate 50% of the compliance instruction generation; remodeled its MongoDB schema<br />
        · Launched a pilot Angular front-end which utilized Figma for UI/UX designs by a two-person team, later expanded it into an extensible project, and smoothly transitioned both front and back-end to a ten-person team<br />
        · Managed an Apache server deployment and initiated an experiment with Jenkins CD pipelines for evolving business needs<br />
        <span style={{ fontSize: '1.025rem' }}>Python Source Code Scrapers</span><br />
        · Used Agile practices to improve Source Code Scrapers by at least a 6-fold increase in speed, using Python libraries such as Scrapy, Selenium, bs4 for scraping, and Pandas for data analysis<br />
        · Containerized the scrapers with docker for ensuring portability and consistency across platforms<br />
      </>
      ), 
      company: "SAP Inc.",
      interval: "Jan. 2023 - Sep. 2023",
      medal: {
        url: "https://www.credly.com/badges/3fe6e4dc-6784-4fbc-921e-63dc3dbbb735/linked_in_profile",
        title: "SAP FastTrack winner for outstanding performance, recognized by the manager",
      },
      comment: {
        url: "https://www.linkedin.com/in/hongwei-wang/#recommendations",
        title: "Recommendations from my manager and supervisor",
      }
    },
    {
      image: {
        src: jobSFU,
        alt: "Simon Fraser University school logo, short hand 'SFU' on the top within a red box, school full name at the buttom",
      },
      title: "Research Assistant/Prototyper",
      description: (
        <>
          · Iteratively developed a Chrome Extension using JavaScript for supporting the d/Deaf and hard-of-hearing (DHH) community in virtual conferencing (VC) by assessing participants' voicing performance and offering reminders about proper etiquette<br />
          · Facilitated mock VC seminars with DHH participants to test my extension for its inclusivity and accessibility; extension was awarded 90% overall rating for supporting inclusiveness and the willingness of using it in future<br />
          · Published the paper <a href="https://dl.acm.org/doi/10.1145/3610901">'it's Not an Issue of Malice, but of Ignorance': Towards Inclusive Video Conferencing for Presenters Who Are D/Deaf or Hard of Hearing."</a> on an ACM journal
        </>
      ),
      company: "Simon Fraser University",
      interval: "Jun. 2022 - Sept. 2022",
      github: {
        url: "https://github.com/Hongwei-W/accessible_classroom",
        title: "GitHub Repository of the Chrome Extension",
      },
      external: {
        url: "https://dl.acm.org/doi/10.1145/3610901",
        title: "Published Paper",
      }
    },
    {
      image: {
        src: jobUAlberta,
        alt: "UAlberta school logo, the logo is on the right, the school full name is on the right",
      },
      title: "Research Assistant/Prototyper",
      description:
        "· Developed a web application for evaluating First Nations Cree language text prediction in typing, integrating three trained NLP models using Django, JavaScript, and HTML/CSS\n" +
        "· Conducted user studies with 30+ participants to assess NLP model accuracies and text prediction granularities",
      company: "University of Alberta",
      interval: "Sep. 2022 - Dec. 2022",
    },
    {
      image: {
        src: jobEMQ,
        alt: 'EMQ logo, "E", "M", "Q", three letters in the image, "E" has a design of three vertical bars',
      },
      title: "Software Developer",
      description:
        "· Achieved top 3 contributor by delivering MQTT broker clean_session feature, aligned MQTT protocol, written in C\n" +
        "· Launched 1 release (0.3.2) with the assistance of the manager and reached 400+ GitHub starred users\n" +
        "· Redesigned broker’s Linux interface and product documentation through design thinking\n" +
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
        "· Awarded three times MVPs in two stores in Canada and China, crushed morning sale records more than once\n" +
        "· Promoted to stock associate to sales (Qingdao), permanent from seasonal employee (Edmonton)",
      company: "Abercrombie & Fitch",
      interval: "Jul. 2018 - Sep. 2023 (29 months)",
    },
  ]);

  const [contact, setContact] = useState([
    {
      email: "wanghw22[at]gmail[dot]com",
      linkedIn: "https://www.linkedin.com/in/hongwei-wang/",
      github: "https://github.com/hongwei-W/",
      leetcode: "https://leetcode.com/wanghw22/",
      resume:
        "https://drive.google.com/file/d/1-kQHkBIH6_kIEqco2ft0bQcOSlC__2g0/view?usp=sharing",
    },
  ]);

  const [copyright, setCopyright] = useState({
    msg: "© 2024 Hongwei Wang. All rights reserved.",
  });

  return (
    <div className="App">
      <Nav />
      <Intro />
      <Divider text="education" id="EDUCATION" />
      <Educations educations={educations} />
      <Divider text="work" id="WORK" />
      <Jobs jobs={jobs} />
      <Divider text="project" id="PROJECT" />
      <Projects projects={projects} />
      <Divider text="contact" id="CONTACT" />
      <Contact contact={contact} />
      <Copyright copyright={copyright} />
    </div>
  );
}

export default App;
