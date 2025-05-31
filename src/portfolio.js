import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Omobolanle Shaibu",
  title: "Hi, I'm Bolanle",
  subTitle: emoji(
    "After graduating secondary school, I took a gap year to focus on building a strong foundation in tech. I am now a university student actively working as a Frontend Developer. I specialize in creating intuitive and responsive user interfaces, and I'm passionate about using technology to solve real-world problems. My current skill set includes React.js, JavaScript, HTML, CSS, Bootstrap, and Linux. I'm committed to continuous growth and eager to explore full-stack and cloud technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1lJofSZs10hHaAR93lELYG1vyPW-B8ows/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/lanle05",
  linkedin: "https://www.linkedin.com/in/omobolanle-shaibu-426a7b200/",
  gmail: "omobolanle.shaibu@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FRONTEND DEVELOPER AND FULL-STACK DEVELOPER IN TRAINING",
  skills: [
    emoji(
      "⚡ Designed and built interactive, responsive user interfaces using React.js and JavaScript."
    ),
    emoji(
      "⚡ Developed Progressive Web Apps (PWAs) with modern frontend stacks."
    ),
    emoji(
      "⚡ Integrated third-party services including Firebase for authentication and real-time database needs."
    ),
    emoji(
      "⚡ Continuously learning new technologies to transition into full-stack development."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Babcock University",
      logo: require("./assets/images/babcock.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2023 - Present"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "ALX Africa",
      logo: require("./assets/images/alx.png"),
      subHeader: "Software Engineering Program",
      duration: "November 2022 - August 2024",
      link: "https://www.alxafrica.com/",
      // subHeader: "Bachelor of Science in Computer Science",
      // duration: "September 2013 - April 2017",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development (HTML, CSS, JavaScript, React.js)",
      progressPercentage: "85%"
    },
    {
      Stack: "Version Control (Git & GitHub)",
      progressPercentage: "90%"
    },
    {
      Stack: "Linux & Shell Scripting",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Software Engineer",
    //   company: "ALX Africa",
    //   companylogo: require("./assets/images/alx.png"),
    //   date: "November 2022 – Present",
    //   desc: "Full-stack Software Engineer Intern",
    //   descBullets: [
    //     "Worked with Linux, Shell Scripting, Javascript and Python",
    //   ]
    // },
    {
      role: "Front-End Developer Intern",
      company: "Bluechip Technologies",
      companylogo: require("./assets/images/bluechip.jpeg"),
      date: "November 2022 – August 2023",
      desc: "Front-end Software Developer Intern",
      descBullets: [
        "I learnt HTML, CSS, Bootstrap, Javascript and React framework on the job within a 3-month period, having begun to code in this company.",
        "Help build multiple static pages for various projects in the company like a Learning management system app, an e-commerce app and a banking app.",
        "I also assisted with administrative duties such as managing the budget for the month and shopping for supplies for the month."
      ]
    }
    // {
    //   role: "Frontend Developer Intern",
    //   company: "HNGx",
    //   companylogo: require("./assets/images/hng internship logo.jpeg"),
    //   date: "September 2023 – Current",
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle:
    "Solo-built products that reflect my journey, creativity, and growth as a developer",
  projects: [
    {
      image: require("./assets/images/flashcard.png"),
      projectName: "Language-Learning Flashcard App",
      projectDesc:
        "Language Learning Flashcard App Designed and built a language learning app using React and Tailwind CSS. Users can create custom flashcard decks or generate random ones to practice vocabulary. The dashboard tracks learning progress and stores saved decks locally for continued learning.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://language-learning-flashcard-app.vercel.app/dashboard"
        },
        {
          name: "GitHub",
          url: "https://github.com/lanle05/lanle05-language-learning-flashcard-app-portfolio"
        }
      ]
    },
    // {
    //   image: require("./assets/images/movieboximage.png"),
    //   projectName: "Movie Search Site",
    //   projectDesc: "Movie app that grants user access to get the latest movies",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://movie-box-lanle05.vercel.app/"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },
    {
      image: require("./assets/images/galleryimage.png"),
      projectName: "Drag and Drop Gallery",
      projectDesc:
        "A fully responsive and user-friendly image gallery built with React. Authenticated users can log in and rearrange images using a drag-and-drop interface. The gallery includes search functionality by image tags, skeleton loaders while fetching images, smooth animations for feedback, and proper form validation with error handling. Login Credentials: Username: user@example.com, Password: 1Password",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://drag-and-drop-3symx92y4-lanle05.vercel.app/"
        },

        {
          name: "GitHub",
          url: "https://github.com/lanle05/drag_and_drop"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+234 913 111 8449",
  email_address: "omobolanle.shaibu@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "lanle_xoxoxo", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
