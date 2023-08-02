import {
  mobile,
  backend,
  creator,
  web,
  react,
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
  node,
  api,
  db,
  aws,
  velvetech,
  avtomatika,
  delovye
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
    id: 'contact',
    title: 'Contact'
  }
];

const heroText = `I'm a Web Developer skilled in JavaScript, React.js, Node.js, and database and cloud (AWS) technologies, with hands-on experience in creating dynamic and responsive web applications.`;

const overview = `
      By combining my technical proficiency, passion for web development, diverse IT background, and versatile interests, I aim to make a positive impact by creating innovative and user-focused web solutions while continuously growing as a developer and contributing to the success of the organization I work at.
  `;

const services = [
  {
    title: 'Frontent Developer (React.js)',
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
    title: 'Database Developer (SQL, noSQL)',
    icon: db
  },
  {
    title: 'AWS Cloud Developer',
    icon: aws
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  },
  {
    name: 'docker',
    icon: docker
  }
];

const experiences = [
  {
    title: 'Business Analyst',
    company_name: 'Delovye Linii',
    icon: delovye,
    iconBg: '#383E56',
    date: 'Apr 2016 - Dec 2020',
    points: [
      'Organization of building "from scratch" information systems (1C platform) for operational, financial, and managerial accounting of transport and logistics companies (100+ users, 1bn+ turnover) with integration with other ISs.',
      'Further development of the ISs, determining the priorities and stages of product development.',
      'Construction, description, regulation, optimization, and implementation of business processes, reporting on the activities of transport and logistics companies.',
      'Organization of business support (documentary and contractual support, reporting, interaction with suppliers, IT companies).',
      'Implementation of electronic document management.',
      'Participation in IT projects (both Waterfall and Agile) as a customer/stakeholder, requirements provider, project coordinator, business analyst, and product owner.',
      'Participation in the development and testing processes of new and existing solutions.'
    ]
  },
  {
    title: 'Technical Project Coordinator',
    company_name: 'Avtomatika-Servis',
    icon: avtomatika,
    iconBg: '#E6DEDD',
    date: 'Dec 2020 - Jul 2021',
    points: [
      'Technical project coordination of two complex projects (development team - more than 30 people)',
      'Formalization of business processes and functional requirements.',
      'Definition of the scope of projects and assessment of their cost.',
      'Search and mobilization of resources for projects.',
      'Preparation of a work schedule, organization of work on a project by a team of internal and external performers, and the use of modern practices and project management tools.',
      'Organization of effective communications between stakeholders, analysts, and developers, related departments of the company.',
      'Preparation and update of project documentation.',
      'Preparation of reports and presentation materials.'
    ]
  },
  {
    title: 'IT project coordinator, Business Analyst, Software Tester',
    company_name: 'Velvetech',
    icon: velvetech,
    iconBg: '#E6DEDD',
    date: 'Jul 2021 - Present',
    points: [
      'Participation if various IT projects as Project Coordinator, Business Analyst, and Software Tester (the role depends on the project) at all stages of the project life cycle.',
      'Coordinating 3 teams of developers simultaneously.',
      'Interaction and meetings with American clients and product owners, organizing effective communication between team members.',
      'Definition of the scope of projects and assessment of their cost.',
      'Preparation of regular project reports.',
      'Controlling changes, risks, and open issues in projects.'
    ]
  }
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: carrent,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: jobit,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'supabase',
        color: 'green-text-gradient'
      },
      {
        name: 'css',
        color: 'pink-text-gradient'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/'
  }
];

export {
  heroText,
  overview,
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects
};
