import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development ",
    icon: web,
  },
  // {
  //   title: "3D Modelling and Animation",
  //   icon: mobile,
  // },
  {
    title: "Augmented Realty",
    icon: backend,
  },
  {
    title: "Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
  
];

const experiences = [
  {
    title: "Augmented Reality and Snapchat Opinion Leader",
    company_name: "Under 25, Snapchat",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Created augmented reality filters and effects for use on Snapchat.",
      "A significant engagement, generating over 38 million views/impressions on Snapchat within a span of 9 months.",
      "Responsible for building and nurturing Augmented Reality content and experiences, as a part of the efforts of Snapchat India and Under 25, to support the AR ecosystem on campuses.",
    ],
  },
  {
    title: "Junior Designer",
    company_name: "Hindustan Aeronautics Limited",
    icon: tesla,
    iconBg: "#000000",
    date: " Oct 2023- Nov 2023",
    points: [
      "Contributed to the design and implementation of real-time aircraft navigation parameter display using C++, OpenGL, and OpenCV.",
      "Collaborated with the development team to create interactive visualizations of flight data for enhanced user understanding.",
      "Played a key role in refining aircraft safety and navigation systems through innovative design approaches.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "GenYAnalytical Solutions Private Limited and Vercons Technology Pvt Ltd ",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: " May 2023- Jun 2023,Oct 2022- Nov 2022",
    points: [
      "Designed and developed a responsive portfolio website showcasing skills.",
      "Implemented front-end and Utilized back-end technologies including html, css, js, reactjs, php",
      "Collaborated with cross-functional teams to ensure seamless deployment and maintenance of the website.",
      
    ],
  },
  // {
  //   title: "Leadership Experience",
  //   company_name: "Student Leader and Build Leader | Under 25 Summit",
  //   icon: meta,
  //   iconBg: "#000000",
  //   date: "Dec 2022 - March 2023",
  //   points: [
  //     "As a Student Leader, I was responsible for leading a team of hustlers and managing various aspects of the festival. The festival had over 35k+ students attending and featured 7 stages with more than 500+ thought leaders that included CEOs, Influencers, change makers, celebrities, and Student talent across the globe.",
  //     "Throughout the internship, I expressed my ability to effectively coordinate and manage a team. I was trained in various skills such as storytelling, festival management, and leadership.",
  //     "As a Build Leader, my responsibilities included designing, estimating, and coordinating the build of an art installation that was displayed at the festival.",
  //   ],
  //   link: "https://docs.google.com/document/d/1N7kQVzkMqRNvYhY9tnZqIVmIFVD61qjUQ4lOoV12noQ/edit",
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Programming Projects ",
    description:
      "As a programmer, I'm proud to say that my collection of programming projects demonstrates my versatility and proficiency in multiple programming languages and technologies. With my skills in Python, HTML, CSS, JavaScript, React JS, Three Js, C++, and MySQL, I've been able to create a variety of innovative and exciting projects.",
    tags: [
      {
        name: "coding",
        color: "blue-text-gradient",
      },
      {
        name: "web-development",
        color: "green-text-gradient",
      },
      // {
      //   name: "androiddevelopment",
      //   color: "pink-text-gradient",
      // },
    ],
    image: carrent,
    source_code_link: "https://github.com/Keerthana-r-venugopal",
  },
  {
    name: "Augmented Reality ",
    description:
      "I have had the privilege of developing over 120 Augmented Reality effects for prominent social media platforms. These have resulted in a significant engagement, generating over 38 million impressions/views on Snapchat within 9 months.",
    tags: [
      {
        name: "AR",
        color: "blue-text-gradient",
      },
      {
        name: "lensstudio",
        color: "pink-text-gradient",
      },
      {
        name: "blender",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.snapchat.com/add/under25kerv?share_id=-Ca9ziDM210&locale=en-GB",
  },
  // {
  //   name: "3D Modelling and Design",
  //   description:
  //     "As a multimedia artist, I have a diverse skill set that includes 3D art, graphic design, and video editing. With my expertise in these fields, I have been able to create engaging and dynamic visual content that captivates audiences and communicates messages effectively. My skill set as an artist allows me to creating compelling visual content that meets the client's needs and exceeds their expectations.",
  //   tags: [
  //     {
  //       name: "blender",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "photoshop",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "premiere-pro",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://caroldsillva.wixsite.com/sections/3d",
  // },
];

export { services, technologies, experiences, testimonials, projects };