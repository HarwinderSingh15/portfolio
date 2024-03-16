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
  username: "Mantu Kumar",
  title: "Hi all, I'm Mantu",
  subTitle: emoji(
    "A passionate and experienced Software Developer 🚀 having 5+ years of expertise in building Mobile applications with JavaScript / React Native / Java / Swift and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/18Vp_DXQli1vWvEADsdf-FTYTQuU8vw92/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/EndLess728",
  linkedin: "https://www.linkedin.com/in/mantu-kumar-16439117b",
  gmail: "aryanmk.mk5@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@EndLess728",
  stackoverflow: "https://stackoverflow.com/users/10422074/mantu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAFTING AWESOME MOBILE EXPERIENCES WITH A TOUCH OF MAGIC",
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
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Realm MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Stripe",
      fontAwesomeClassname: "fab fa-stripe"
    },
    {
      skillName: "Paypal",
      fontAwesomeClassname: "fab fa-paypal"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-code-branch"
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Sri Sukhmani Institute of Engineering & Technology - Dera Bassi",
      logo: require("./assets/images/sukhmani.jpeg"),
      subHeader: "B. Tech in Computer Science Engineering",
      duration: "2019",
      desc: "Punjab Technical University"
    },
    {
      schoolName:
        "Government Model Senior Secondary School - Sector 8 Chandigarh",
      logo: require("./assets/images/cbse.jpg"),
      subHeader: "Senior Secondary (12th)",
      duration: "2014",
      desc: "Central Board of School Education"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Govt.Model Sanskriti Sr. Sec. School - Sector 20 Panchkula",
      logo: require("./assets/images/school.png"),
      subHeader: "Secondary (10th)",
      duration: "2011",
      desc: "Board of School Education Haryana"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
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
      progressPercentage: "95%"
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
      role: "Senior React-Native Developer",
      company: "iTechnolabs Software",
      companylogo: require("./assets/images/iTech.png"),
      date: "Aug 2022 – Present",
      desc: "At iTechnolabs Software, I hold the role of Senior React-Native Developer, where I play a pivotal role in guiding our team through the development process. Leveraging my expertise, I provide mentorship and assistance to ensure the seamless creation of high-quality hybrid mobile applications that meet and exceed our clients' expectations."
    },
    {
      role: "Senior React-Native Developer",
      company: "Suffescom Solutions Pvt. Ltd.",
      companylogo: require("./assets/images/suffescom.png"),
      date: "Oct 2021 – Aug 2022",
      desc: "As a Senior React-Native Developer, I spearhead the development of high-performance hybrid mobile applications at Suffescom Solutions Pvt. Ltd. Leveraging my expertise, I lead a team in crafting cutting-edge solutions that drive business growth and user satisfaction."
    },
    {
      role: "iOS & React-Native Developer",
      company: "Immanent Solutions",
      companylogo: require("./assets/images/Immanent.png"),
      date: "June 2018 – Oct 2021",
      desc: "At Immanent Solutions, I embarked on my professional journey as an iOS Developer, transitioning seamlessly into the realm of React-Native for hybrid mobile app development. I played a pivotal role in delivering innovative solutions, laying the foundation for my expertise in mobile app development."
    }
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
      image: require("./assets/images/mealed.webp"),
      projectName: "Mealed",
      projectDesc:
        "Mealed is food ordering app. There are three apps available Customer App, Restaurant App and Driver App",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mealed.net/"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/iSend.webp"),
      projectName: "iSend",
      projectDesc:
        "Get your Parcel deliveredTo their destination at the right time in the quickest way. There are two apps Customer App, Driver App",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.isendlogistics.com/"
        }
      ]
    },
    {
      image: require("./assets/images/medsonwheels.webp"),
      projectName: "Meds On Wheels",
      projectDesc:
        "Meds On Wheels is used to Browse local pharmacies and order the medication to your door while tracking the delivery throughout the full process.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://meds-on-wheels.com/"
        }
      ]
    },
    {
      image: require("./assets/images/talkie.png"),
      projectName: "Talkie",
      projectDesc:
        "Speaking a foreign language isn’t always easy. Talkie is an app that helps your students learn by doing.Little but often. This app has three modules Admin, Teacher, Student",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://talkietheapp.com/"
        }
      ]
    },

    {
      image: require("./assets/images/emove.webp"),
      projectName: "EMove Ride",
      projectDesc:
        "EMove Ride app provides convenience to the customers to book a taxi and reach their destination. There are two apps Customer App, Driver App",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://emoveride.co.uk/"
        }
      ]
    },
    {
      image: require("./assets/images/ror.webp"),
      projectName: "Ride O Ride",
      projectDesc:
        "Ride O Ride provides comfortable travel solution at a cost-effective price. There are two apps Customer App, Driver App",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.suffescom.com/"
        }
      ]
    },
    {
      image: require("./assets/images/eventickets.webp"),
      projectName: "EvenTickets",
      projectDesc:
        "The app will scan to check the validity of tickets generated from EvenTickets website. It’s like a tool for Organizer to validate the original and duplicate tickets for their event.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://eventickets.com.au/"
        }
      ]
    },
    {
      image: require("./assets/images/yogavivo.webp"),
      projectName: "Yogavivo",
      projectDesc:
        "YOGA AND TRAINING WHERE YOU ARE Yogavivo makes it easier for you to get on the yoga mat, and to make quality yoga available no matter where you are.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://yogavivo.dk/"
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
  number: "+92-0000000000",
  email_address: "aryanmk.mk5@gmail.com"
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
