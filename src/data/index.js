import {
  react,
  node,
  api,
  db,
  aws,
  velvetech,
  avtomatika,
  delovye,
  comingsoon
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
  },
  {
    id: 'cv',
    title: 'My CV'
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
const portfolioIntro = `This section provides insights into my expertise and passion for creating innovative and impactful web solutions. Each project’s card contains links to code repositories and live demos. These projects showcase my ability to solve complex problems, work with diverse technologies, and effectively manage projects.`;

const projects = [
  {
    name: 'Project 1',
    description:
      'Sed tristique libero sed nisl sagittis, vel cursus ex porta. Maecenas id nisi vel mauris suscipit tempus ac ut tortor. Quisque eleifend luctus urna, vitae.',
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
    image: comingsoon,
    source_code_link: 'https://github.com/pfellow',
    link: 'https://pfellow.me'
  },
  {
    name: 'Project 2',
    description:
      'Nunc quis ex venenatis, vestibulum dui vitae, placerat velit. Suspendisse ut congue tortor. Mauris sit amet augue fermentum, consectetur velit et, euismod odio.',
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
    image: comingsoon,
    source_code_link: 'https://github.com/pfellow',
    link: 'https://pfellow.me'
  },
  {
    name: 'Project 3',
    description:
      'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed varius lacus non ante luctus, sit amet posuere orci tristique sed.',
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
    image: comingsoon,
    source_code_link: 'https://github.com/pfellow',
    link: 'https://pfellow.me'
  }
];

export {
  heroText,
  overview,
  navLinks,
  services,
  experiences,
  projects,
  portfolioIntro
};
