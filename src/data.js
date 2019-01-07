const data = {
  name: {
    first: "Jared",
    middle: "Michael",
    last: "Tanner"
  },
  currentYear: "2018",
  email: "deraj21@gmail.com",
  phoneNum: "507-202-6521",
  links: {
    github: "https://github.com/Deraj21",
    linkedin: "https://www.linkedin.com/in/jaredmtanner/"
  },
  title: "Full-Stack Web Developer",
  city: "Mesa",
  state: "AZ",
  navbar: {
    links: [
      { text: "About", ref: "#about" },
      { text: "Projects", ref: "#projects" },
      { text: "Skills", ref: "#skills" },
      { text: "Contact", ref: "#contact" }
    ]
  },
  about: [
    "I am full-stack web developer.", //
    "I enjoy learning new things in order to develop my skill-set, and improve the technology I am working on.", //
    "Formidable problems are my jam. The rush of sitting down to solve an enigma is one of the reasons I became a software engineer. I enjoy the challenge, struggle, and eventual victory that comes with writing code.", //
    "The main reason, however, for wanting to get into software engineering, is so that I can build something worthwhile. My dream is to work building something great, with amazing individuals." //
  ],
  jobs: [
    {
      title: "Maintenance Worker",
      company: "First Service Residential",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      startDate: "August 2016",
      endDate: "Present"
    }
  ],
  schools: [
    {
      name: "DevMountain",
      courseType: "Certificate",
      link: "https://www.youracclaim.com/badges/ba6c4cdf-ae62-47ab-be84-8d5abafe502d/linked_in_profile",
      startDate: "March 2018",
      endDate: "September 2018",
      description: "Web dev online courseasdf ;laskdjf ; lasdfj asdf;lkj"
    }
  ],
  projects: [
    { // Hangman
      name: "Hangman",
      image: "hangman",
      description: [
        "Personal Project",
        "This website is a hangman game wrapped up with user rankings and fun word categories to choose from. It allows for a user to log in, play some hangman games, and then compare their scores with other players.",
        "I love playing games, so for me, this was a really fun project to come up with and create.",
        "I learned the importance of making an MVP plan while making this project. I designed the layout, dataflow, and database schemas all before starting to code, and it really helped me to keep track of where I was, and how far I had to go.",
        "It was built from scratch, using create-react-app, React, Redux, Node.js, express, and a postgres database. I also used css media queries to make my project mobile-friendly.",
        "I hosted the site with DigitalOcean for a couple months in order to learn how to host a project, and so I could share it with my friends and family."
      ],
      links: [
        {
          url: "https://github.com/Deraj21/hangman-website",
          text: "Github Page"
        },
        {
          url: "https://www.youtube.com/watch?v=_AAaCuGeVjE",
          text: "Video Walkthrough"
        }
      ]
    },
    { // Trello Clone
      name: "Trello Clone",
      image: "trello",
      description: [
        "Group Project",
        "This project is a clone of the popular time-management tool, Trello.com. We wanted to see how far we could get into building an enterprise app between the three of us over the course of four weeks.",
        "It was challenging, but with the help of the real Trello, we were able to decide on an MVP, divide up tasks, and set a timeline that kept us on track. Three times a week, we would hold meetings to each talk about our progress, and help each other with blockages.",
        "We used React, Redux, and react-router to build a responsive frontend that copied the clean style of Trello. For the backend, we used Node.js, express, a postgres database, and Auth0 with sessions."
      ],
      links: [
        {
          url: "https://github.com/Deraj21/trello-clone",
          text: "Github Page"
        },
        {
          url: "https://www.youtube.com/watch?v=VcydlEE5qvs&feature=youtu.be",
          text: "Video Walkthrough"
        }
      ]
    },
    { // DnD
      name: "D&D Character Generator",
      image: "dnd",
      description: [
        "Personal Project",
        "This project comes from my love of the role-playing game Dungeons and Dragons. I wanted a quick way to generate some random character stats to get ideas flowing for players wanting to make a character. So I built this!",
        "It was built using React for the front-end and Node for the back-end. Node stores all the possible values for each stat, and with an Axios request from React, it sends them to it. React then randomly chooses one from each list, and displays it.",
        "It has a bare-bones single-page design. I mimicked the look of a Dungeon and Dragons character sheet. Since it was my first full project, I learned a lot about CSS and flexboxes.",
      ],
      links: [
        {
          text: "Github Page",
          url: "https://github.com/Deraj21/dnd-character-generator"
        }
      ]
    }
  ],
  skills: [
    "React.js",
    "AngularJS",
    "ES6",
    "HTML",
    "CSS",
    "Node.js",
    "SQL",
    "Git",
    "Github",
    "Linux",
    "C++"
  ],

};

export default data;