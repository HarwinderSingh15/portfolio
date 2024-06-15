/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harwinder Singh",
  title: "Hi all, I'm Harwinder",
  subTitle: emoji(
    "A passionate and experienced Software Developer 🚀 with over 2 years of expertise in building mobile applications using JavaScript, React Native, and web applications with React / Next.js. Skilled in automation with Python and Selenium, and knowledgeable in Node.js and other modern libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1DUL_Y6SoRnMhibE_ktRZt_xpvNS_XlWA/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HarwinderSingh15",
  linkedin: "https://www.linkedin.com/in/harwinder-singh-5189a71ab/",
  gmail: "harwindersinghsaini015@gmail.com",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@harwindersinghsaini015",
  stackoverflow: "https://stackoverflow.com/users/18721901/harwinder-singh",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAFTING AWESOME MOBILE & WEB EXPERIENCES WITH A TOUCH OF MAGIC",
  skills: [
    emoji(
      "⚡ Transforming prototypes and wireframes into stunning app and UI components"
    ),
    emoji(
      "⚡ Harnessing the power of Redux (THUNK/SAGA) for seamless state management and enhanced app performance"
    ),
    emoji(
      "⚡ Expertise in integrating with REST APIs, implementing request models, offline storage, and leveraging third-party libraries"
    ),
    emoji(
      "⚡ Seamlessly integrating payment gateways like Stripe, Paypal, and In-app Purchase for smooth transactions"
    ),
    emoji(
      "⚡ Seamless integration with third-party services such as Firebase, Google Maps, Socket.io, and Agora for enhanced functionality"
    ),
    emoji(
      "⚡ Implementing hassle-free third-party logins including Google, Facebook, Apple, and Twitter for streamlined user experience"
    ),
    emoji(
      "⚡ Leveraging Native Modules to incorporate native functionalities seamlessly"
    ),
    emoji(
      "⚡ Implementing robust testing methodologies to ensure app reliability and performance across various devices and platforms"
    ),
    emoji(
      "⚡ Proficient in building scalable and high-performance solutions with React.js, React Native, and Next.js"
    ),
    emoji(
      "⚡ Experienced in developing and maintaining mobile applications for iOS and Android platforms"
    ),
    emoji("⚡ Skilled in writing clean, efficient, and maintainable code"),
    emoji(
      "⚡ Expertise in responsive design principles to ensure applications work across various devices and screen sizes"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Google Maps",
      fontAwesomeClassname: "fas fa-map"
    },
    {
      skillName: "Sockets",
      fontAwesomeClassname: "fas fa-bolt"
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lala Lajpat Rai Memorial Polytechnic College - Moga",
      logo: require("./assets/images/mrsptulogo.png"),
      subHeader: "BCA",
      duration: "2024",
      desc: "Maharaja Ranjit Singh Punjab Technical University"
    },
    {
      schoolName:
        "Sant Longowal Institute of Engineering and Technology - Sangrur",
      logo: require("./assets/images/logo1.png"),
      subHeader: "Diploma in Computer Science",
      duration: "2014",
      desc: "Sant Longowal Institute of Engineering and Technology"
    }
    // {
    //   schoolName: "Govt.Model Sanskriti Sr. Sec. School - Sector 20 Panchkula",
    //   logo: require("./assets/images/school.png"),
    //   subHeader: "Secondary (10th)",
    //   duration: "2011",
    //   desc: "Board of School Education Haryana"
    //   // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "React-Native",
      progressPercentage: "90%"
    },
    {
      Stack: "React",
      progressPercentage: "95%"
    },
    {
      Stack: "Nextjs",
      progressPercentage: "80%"
    },
    {
      Stack: "Github",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Frontend Developer (React-Native, Reactjs, Nextjs)",
      company: "iTechnolabs Software",
      companylogo: require("./assets/images/iTech.png"),
      date: "Feb 2023 – Present",
      desc: "As a Frontend Developer at iTechnolabs Software, specializing in React-Native, React.js, and Next.js. In this role, I am committed to designing and implementing sophisticated mobile and web interfaces that prioritize user experience and technical excellence. I collaborate closely with cross-functional teams to drive continuous improvement and deliver high-quality solutions that meet our clients' needs"
    },
    {
      role: "Junior Frontend Developer (Reactjs, React-Native, Nextjs)",
      company: "Redsky Advance Solutions Pvt. Ltd.",
      companylogo: require("./assets/images/redsky.jpg"),
      date: "Feb 2022 – Feb 2023",
      desc: "I held the position of Junior Frontend Developer at Redsky Advance Solutions Pvt. Ltd. from February 2022 to February 2023. During my tenure, I specialized in utilizing React.js, React-Native, and Next.js to develop dynamic and responsive applications. Working alongside experienced developers, I contributed to the creation of innovative solutions that enhanced user experience and supported the company's objectives."
    }
    // {
    //   role: "iOS & React-Native Developer",
    //   company: "Immanent Solutions",
    //   companylogo: require("./assets/images/Immanent.png"),
    //   date: "June 2018 – Oct 2021",
    //   desc: "At Immanent Solutions, I embarked on my professional journey as an iOS Developer, transitioning seamlessly into the realm of React-Native for hybrid mobile app development. I played a pivotal role in delivering innovative solutions, laying the foundation for my expertise in mobile app development."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "THE PROJECTS I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/simplified.webp"),
      projectName: "Simplified",
      projectDesc:
        "Simplified is a AI powered design and collaboration for modern marketing teams",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://simplified.com/"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/ELD.webp"),
      projectName: "ELD App",
      projectDesc:
        "Eld lets you be fulfilled and engaged together with like-minded. Create and find activities. Chat with friends. Engage together.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.eldApp&pcampaignid=web_share"
        }
      ]
    },
    {
      image: require("./assets/images/ELD.webp"),
      projectName: "ELD Analytics Portal",
      projectDesc:
        "One can sponsor their activities within the ELD app and view analytics data on this portal with charts and statistics",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://analytics.eldapp.net/"
        }
      ]
    },
    {
      image: require("./assets/images/igrab.webp"),
      projectName: "iGrab",
      projectDesc:
        "iGrab is solution for downloading reels from Facebook and Instagram seamlessly without the inruption of ads.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.igrab&pcampaignid=web_share"
        }
      ]
    },
    {
      image: require("./assets/images/volley_engine.webp"),
      projectName: "VolleyEngine",
      projectDesc:
        "VolleyEngine make easy for High School athletes to connect DIRECTLY with college coaches saving thousands of dollars in recruiting services",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.volleyengine.app&pcampaignid=web_share"
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

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
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
  number: "+91-8837616294",
  email_address: "harwindersinghsaini015@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
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
