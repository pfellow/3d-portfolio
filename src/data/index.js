import {
  react,
  api,
  db,
  aws,
  velvetech,
  avtomatika,
  delovye,
  whitireia,
  immersve,
  peter,
  economics,
  vstu,
  vagabond,
  game,
  ai,
  fintrack,
  vitalTrack,
} from '../assets';

const navLinks = [
  {
    id: 'intro',
    title: 'Intro',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'about',
    title: 'About Me',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const heroText = `I'm a Fullstack Software Engineer skilled in building robust and responsive web applications with cloud technologies (AWS), SQL/NoSQL databases, and AI.`;

const overview = `Programming is more than a skill – it's a hobby and a source of continuous self-development for me. I enjoy staying up to date with the latest advancements in web development and finding solutions to complex challenges.`;

const services = [
  {
    title: 'Web App Fullstack Developer',
    icon: react,
  },
  {
    title: 'API Developer (REST, GraphQL)',
    icon: api,
  },
  {
    title: 'Database Developer (SQL, NoSQL)',
    icon: db,
  },
  {
    title: 'AWS Cloud Developer',
    icon: aws,
  },
  {
    title: 'Development with AI',
    icon: ai,
  },
];
const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Immersve',
    icon: immersve,
    iconBg: '#383E56',
    date: 'Oct 2023 - Present',
    points: [
      'Designing, building, and maintaining web applications using JavaScript, TypeScript, and modern frontend frameworks.',
      'Creating  server-side components and APIs, and managing data storage.',
      'Integrating third-party APIs and deploying applications on cloud platforms using CI/CD pipelines.',
      'Writing unit, component and E2E tests for code quality assurance, debugging issues, and optimizing performance across the stack.',
    ],
  },
  {
    title: 'IT Project Manager',
    company_name: 'Velvetech',
    icon: velvetech,
    iconBg: '#E6DEDD',
    date: 'Jul 2021 - Feb 2023',
    points: [
      'Participation in various IT projects as a project coordinator, business analyst, and software tester (the role depends on the project) at all stages of the project life cycle.',
      'Development of a website (using Wix.com) for a legal company.',
      'Coordination and organizing of three teams of developers.',
      'Interaction and meetings with clients and product owners, organizing effective communication between team members.',
      'Definition of the scope of projects and assessment of their costs.',
      'Controlling changes, risks, and open issues in projects.',
      'Preparation of regular project reports.',
    ],
  },
  {
    title: 'Technical Project Manager',
    company_name: 'Avtomatika-Servis',
    icon: avtomatika,
    iconBg: '#E6DEDD',
    date: 'Dec 2020 - Jul 2021',
    points: [
      'Technical project coordination of two complex software development projects (with a development team of more than 30 people).',
      'Formalization of business processes and functional requirements, including the evaluation of their costs.',
      'Preparation and updating of project documentation.',
      'Organization of effective communications between stakeholders, analysts, developers, and other departments.',
    ],
  },
  {
    title: 'Logistics Manager / Logistics Specialist',
    company_name: 'Delovye Linii',
    icon: delovye,
    iconBg: '#383E56',
    date: 'Apr 2016 - Dec 2020',
    points: [
      'Business analysis for developing corporate information systems for operational, financial, and managerial accounting of transport and logistics companies (100 or more users) with integration with other information systems.',
      'Engineering and reengineering transport and logistics business processes.',
      'Organization of business support (documentary and contractual support, reporting, interaction with suppliers, and IT companies).',
      'Implementation of electronic document management.',
      'Participation in IT projects (both Waterfall and Agile) as a business analyst, project coordinator, and product owner.',
      'Participation in the development and testing processes of new and existing solutions.',
    ],
  },
];
const education = [
  {
    title: 'Master of IT',
    company_name: 'Whitireia New Zealand (Te Pūkenga)',
    icon: whitireia,
    iconBg: '#FFF',
    date: 'Feb 2023 - Nov 2023',
  },
  {
    title: 'Intelligent Systems (Machine Learning)  - Postgraduate Course',
    company_name: 'Peter the Great St. Petersburg Polytechnic University',
    icon: peter,
    iconBg: '#383E56',
    date: 'Mar 2023 - Jul 2023',
  },
  {
    title:
      'Project management and enterprise business processes - Advanced Training',
    company_name: 'St. Petersburg State University of Economics',
    icon: economics,
    iconBg: '#E6DEDD',
    date: '2016',
  },
  {
    title: 'Economics and Construction Company Management - Economic Manager',
    company_name: 'Vologda State Technical University',
    icon: vstu,
    iconBg: '#383E56',
    date: '2008',
  },
];
const portfolioIntro = `This section provides insights into some of my web projects. Each project’s card contains links to code repositories and live demos.`;

const projects = [
  {
    name: 'Fintrack | Your Personal Finance Hub',
    description:
      'A web service for personal finance management. The app aggregates bank accounts, investment portfolios, and monthly spending metrics into a single view. The platform enables users to monitor real-time balances, track specific investment funds, and manage financial planning through an organized, high-level interface. ',
    tags: [
      {
        name: 'Vue',
        color: 'blue-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'pink-text-gradient',
      },
      {
        name: 'Google AI Studio',
        color: 'green-text-gradient',
      },
    ],
    image: fintrack,
    source_code_link: '#',
    link: 'https://fin.beeon.top',
  },
  {
    name: 'Vagabond | Trip planner',
    description:
      'Streamlined travel management dashboard designed to centralize complex itineraries, including multi-leg flights, accommodations, and ground transportation. It features a prominent "Auto-plan with AI" tool that allows users to automatically generate or organize travel steps within their schedule.',
    tags: [
      {
        name: 'Vue',
        color: 'blue-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'pink-text-gradient',
      },
      {
        name: 'Google AI Studio',
        color: 'green-text-gradient',
      },
    ],
    image: vagabond,
    source_code_link: '#',
    link: 'https://trip.beeon.top',
  },
  {
    name: 'VitalTrack | Personal health manager',
    description:
      'Comprehensive health management application that allows users to track medications, medical records, and upcoming appointments through a responsive, emerald-themed interface. The platform leverages integrated AI features to assist adding medical records from files.',
    tags: [
      {
        name: 'Vue',
        color: 'blue-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'pink-text-gradient',
      },
      {
        name: 'Google AI Studio',
        color: 'green-text-gradient',
      },
    ],
    image: vitalTrack,
    source_code_link: '#',
    link: 'https://health.beeon.top',
  },
  {
    name: '2D Game: Planet 10',
    description:
      '2D Game: Planet 10 is a 2D Unity based game (1 level) created with C# scripts and deployed to AWS S3 and CloudFront for public access',
    tags: [
      {
        name: 'Unity',
        color: 'blue-text-gradient',
      },
      {
        name: 'C#',
        color: 'green-text-gradient',
      },
      {
        name: 'AWS S3',
        color: 'pink-text-gradient',
      },
      {
        name: 'AWS CloudFront',
        color: 'blue-text-gradient',
      },
    ],
    image: game,
    source_code_link: 'https://github.com/pfellow/2DGamePlanet10',
    link: 'https://planet10.pfellow.me/',
  },
];

export {
  heroText,
  overview,
  navLinks,
  services,
  experiences,
  education,
  projects,
  portfolioIntro,
};
