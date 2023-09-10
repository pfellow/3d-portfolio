import {
  react,
  node,
  api,
  db,
  aws,
  velvetech,
  avtomatika,
  delovye,
  whitireia,
  peter,
  economics,
  vstu,
  comingsoon,
  portfolio,
  game,
  ogogl
} from '../assets';

const navLinks = [
  {
    id: 'intro',
    title: 'Intro'
  },
  {
    id: 'work',
    title: 'Experience'
  },
  {
    id: 'portfolio',
    title: 'Portfolio'
  },
  {
    id: 'education',
    title: 'Education'
  },
  {
    id: 'about',
    title: 'About Me'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

const heroText = `I'm a Software Engineer skilled in JavaScript (React.js, Node.js, Next.js), cloud technologies (AWS), and SQL/NoSQL databases with hands-on experience in creating dynamic and responsive web applications.`;

const overview = `Programming is more than a skill – it's a hobby and a source of continuous self-development for me. I enjoy staying up to date with the latest advancements in web development and finding solutions to complex challenges. Thanks to my IT and business background, I can bridge the gap between technical expertise and business needs.`;

const services = [
  {
    title: 'Frontend Developer (React.js)',
    icon: react
  },
  {
    title: 'Backend Developer (Node.js)',
    icon: node
  },
  {
    title: 'API Developer (REST, GraphQL)',
    icon: api
  },
  {
    title: 'Database Developer (SQL, NoSQL)',
    icon: db
  },
  {
    title: 'AWS Cloud Developer',
    icon: aws
  }
];
const experiences = [
  {
    title: 'Project Coordinator',
    company_name: 'Velvetech',
    icon: velvetech,
    iconBg: '#E6DEDD',
    date: 'Jul 2021 - Present',
    points: [
      'Participation in various IT projects as a project coordinator, business analyst, and software tester (the role depends on the project) at all stages of the project life cycle.',
      'Development of a website (using Wix.com) for a legal company.',
      'Coordination and organizing of three teams of developers.',
      'Interaction and meetings with clients and product owners, organizing effective communication between team members.',
      'Definition of the scope of projects and assessment of their costs.',
      'Controlling changes, risks, and open issues in projects.',
      'Preparation of regular project reports.'
    ]
  },
  {
    title: 'Technical Project Coordinator',
    company_name: 'Avtomatika-Servis',
    icon: avtomatika,
    iconBg: '#E6DEDD',
    date: 'Dec 2020 - Jul 2021',
    points: [
      'Technical project coordination of two complex software development projects (with a development team of more than 30 people).',
      'Formalization of business processes and functional requirements, including the evaluation of their costs.',
      'Preparation and updating of project documentation.',
      'Organization of effective communications between stakeholders, analysts, developers, and other departments.'
    ]
  },
  {
    title: 'Business Analyst',
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
      'Participation in the development and testing processes of new and existing solutions.'
    ]
  }
];
const education = [
  {
    title: 'Master of IT',
    company_name: 'Whitireia New Zealand (Te Pūkenga)',
    icon: whitireia,
    iconBg: '#FFF',
    date: 'Feb 2023 - Nov 2023'
  },
  {
    title: 'Intelligent Systems (Machine Learning)  - Postgraduate Course',
    company_name: 'Peter the Great St. Petersburg Polytechnic University',
    icon: peter,
    iconBg: '#383E56',
    date: 'Mar 2023 - Jul 2023'
  },
  {
    title:
      'Project management and enterprise business processes - Advanced Training',
    company_name: 'St. Petersburg State University of Economics',
    icon: economics,
    iconBg: '#E6DEDD',
    date: '2016'
  },
  {
    title: 'Economics and Construction Company Management - Economic Manager',
    company_name: 'Vologda State Technical University',
    icon: vstu,
    iconBg: '#383E56',
    date: '2008'
  }
];
const portfolioIntro = `This section provides insights into some of my web projects. Each project’s card contains links to code repositories and live demos.`;

const projects = [
  {
    name: 'Portfolio website',
    description:
      'React.js - based one-page responsive portfolio website, containing two 3D models, smooth animations, and modern elements. GitHub Actions workflow is used for automatic deployment to production',
    tags: [
      {
        name: 'React.js',
        color: 'blue-text-gradient'
      },
      {
        name: 'TailwindCSS',
        color: 'green-text-gradient'
      },
      {
        name: 'Three.js',
        color: 'pink-text-gradient'
      },
      {
        name: 'Github Actions',
        color: 'blue-text-gradient'
      }
    ],
    image: portfolio,
    source_code_link: 'https://github.com/pfellow/3d-portfolio',
    link: 'https://pfellow.me'
  },
  {
    name: '2D Game: Planet 10',
    description:
      '2D Game: Planet 10 is a 2D Unity based game (1 level) created with C# scripts and deployed to AWS S3 and CloudFront for public access',
    tags: [
      {
        name: 'Unity',
        color: 'blue-text-gradient'
      },
      {
        name: 'C#',
        color: 'green-text-gradient'
      },
      {
        name: 'AWS S3',
        color: 'pink-text-gradient'
      },
      {
        name: 'AWS CloudFront',
        color: 'blue-text-gradient'
      }
    ],
    image: game,
    source_code_link: 'https://github.com/pfellow/2DGamePlanet10',
    link: 'https://planet10.pfellow.me/'
  },
  {
    name: 'oGo.gl URL Shortener',
    description:
      'Originally developed and launched in 2018 using jQuery, PHP and MySQL, ogo.gl web service for shortening URLs is currently under re-development by changing the development framework to Next.js and the database to MongoDB.',
    tags: [
      {
        name: 'React.js',
        color: 'blue-text-gradient'
      },
      {
        name: 'Next.js',
        color: 'green-text-gradient'
      },
      {
        name: 'MongoDB',
        color: 'pink-text-gradient'
      },
      {
        name: 'TailwindCSS',
        color: 'blue-text-gradient'
      },
      {
        name: 'Radix UI',
        color: 'green-text-gradient'
      },
      {
        name: 'AWS EC2',
        color: 'pink-text-gradient'
      }
    ],
    image: ogogl,
    source_code_link: 'https://github.com/pfellow/url-shortener',
    link: 'https://s.pfellow.me'
  }
];

const photos = [
  {
    name: 'Photo 1',
    image: comingsoon
  },
  {
    name: 'Photo 1',
    image: comingsoon
  }
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
  photos
};
