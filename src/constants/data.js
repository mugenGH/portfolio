// Professional Data Constants
export const PERSONAL_INFO = {
  name: 'Shreeram R',
  title: 'AI Engineer & Full-Stack Developer',
  tagline: 'Building intelligent systems and exceptional digital experiences — from LLMs to production apps',
  email: 'rshreeramjp@gmail.com',
  location: 'Japan',
  languages: ['English', 'Japanese', 'Tamil'],
  resume: '/resume.pdf',
};

export const SOCIAL_LINKS = {
  github: {
    url: 'https://github.com/mugenGH/',
    label: 'GitHub Profile',
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/shreeram-r-58a302263/',
    label: 'LinkedIn Profile',
  },
};

export const SKILLS = {
  ai: [
    { name: 'LLM Engineering', category: 'AI' },
    { name: 'vLLM', category: 'Inference' },
    { name: 'Text-to-SQL', category: 'NLP' },
    { name: 'Browser Automation (AI)', category: 'Agents' },
    { name: 'OpenClaw', category: 'Automation' },
    { name: 'Prompt Engineering', category: 'AI' },
  ],
  frontend: [
    { name: 'React.js', category: 'Framework' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'JavaScript (ES6+)', category: 'Language' },
    { name: 'HTML5 & CSS3', category: 'Core' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Responsive Design', category: 'Design' },
  ],
  backend: [
    { name: 'Node.js', category: 'Runtime' },
    { name: 'Express.js', category: 'Framework' },
    { name: 'Spring Boot', category: 'Framework' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'RESTful APIs', category: 'Architecture' },
    { name: 'Authentication', category: 'Security' },
  ],
  tools: [
    { name: 'Git & GitHub', category: 'Version Control' },
    { name: 'Vite', category: 'Build Tool' },
    { name: 'npm/yarn', category: 'Package Manager' },
    { name: 'VS Code', category: 'IDE' },
    { name: 'Postman', category: 'API Testing' },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    name: 'Text-to-SQL Employee Search',
    tagline: 'Natural Language Over Enterprise Data',
    link: '',
    github: '',
    summary:
      'An in-house AI-powered search system that lets employees query internal HR databases using plain English. Fine-tuned a Text-to-SQL model on the internal schema, achieving ~89% query accuracy. Deployed with vLLM for sub-200ms inference, replacing a manual lookup process that previously took 5–10 minutes per query.',
    technologies: ['LLM', 'Text-to-SQL', 'vLLM', 'PostgreSQL', 'Python'],
    highlights: [
      'Achieved ~89% query accuracy after fine-tuning on internal database schema',
      'Sub-200ms average inference latency via vLLM on-premise deployment',
      'Reduced average employee data lookup time from ~8 minutes to under 30 seconds',
      'Serving 100+ daily queries across internal HR and directory systems',
    ],
    metrics: [
      { label: 'Query Accuracy', value: '~89%' },
      { label: 'Avg Latency', value: '<200ms' },
      { label: 'Time Saved', value: '~94%' },
      { label: 'Daily Queries', value: '100+' },
    ],
    status: 'Live',
    featured: true,
  },
  {
    id: 2,
    name: 'Browser Automation AI Agent',
    tagline: 'Intelligent Web Automation with LLMs',
    link: '',
    github: '',
    summary:
      'An AI-driven browser automation agent built using OpenClaw and vLLM. The agent interprets high-level natural language instructions, navigates web interfaces autonomously, and completes multi-step workflows — cutting hours of manual browser work down to minutes for enterprise teams.',
    technologies: ['OpenClaw', 'vLLM', 'Python', 'LLM', 'Browser Automation'],
    highlights: [
      'Automates multi-step browser workflows with ~85% task completion rate',
      'Reduced repetitive manual browser tasks by ~70% for target teams',
      'On-premise vLLM inference keeps all data internal — zero external API calls',
      'Handles 10+ distinct workflow types across internal enterprise tools',
    ],
    metrics: [
      { label: 'Task Completion', value: '~85%' },
      { label: 'Time Reduction', value: '~70%' },
      { label: 'Workflow Types', value: '10+' },
      { label: 'Data Privacy', value: '100% On-Prem' },
    ],
    status: 'Live',
    featured: true,
  },
  {
    id: 3,
    name: 'Inventory Management System',
    tagline: 'Full-Stack Stock & Operations Platform',
    link: '',
    github: '',
    summary:
      'A robust full-stack inventory management system built with Spring Boot and React. Tracks real-time stock levels across multiple warehouses, with role-based dashboards for staff and admins. Replaced a spreadsheet-based workflow, improving stock visibility and reducing inventory errors.',
    technologies: ['Spring Boot', 'Java', 'PostgreSQL', 'REST API', 'React'],
    highlights: [
      'Manages 500+ SKUs across multiple inventory locations in real time',
      'Reduced inventory discrepancy errors by ~60% vs previous spreadsheet workflow',
      'Built 10+ RESTful API endpoints with Spring Boot for full CRUD operations',
      'Role-based access control for admin, manager, and staff permission levels',
    ],
    metrics: [
      { label: 'SKUs Managed', value: '500+' },
      { label: 'Error Reduction', value: '~60%' },
      { label: 'API Endpoints', value: '10+' },
      { label: 'User Roles', value: '3 Levels' },
    ],
    status: 'Live',
    featured: true,
  },
  {
    id: 4,
    name: 'BookLore',
    tagline: 'Discover Your Next Great Read',
    link: 'https://book-lore.vercel.app/',
    github: 'https://github.com/mugenGH/book-lore',
    summary:
      'A sophisticated web application that allows users to search for books, view detailed information, and discover new titles using the Google Books API. Features include advanced search filters, reading list management, and personalized recommendations.',
    technologies: ['EJS', 'Node.js', 'Express.js', 'Google Books API', 'PostgreSQL'],
    highlights: [
      'Integrated Google Books API for comprehensive book data',
      'Implemented server-side rendering with EJS templates',
      'Built RESTful API endpoints for book management',
      'Optimized database queries for improved performance',
    ],
    status: 'Live',
    featured: false,
  },
  {
    id: 5,
    name: 'React Todo List',
    tagline: 'Full-Stack Task Management',
    link: 'https://github.com/mugenGH/React-fullstack-todolist-',
    github: 'https://github.com/mugenGH/React-fullstack-todolist-',
    summary:
      'A comprehensive full-stack task management application with CRUD operations, user authentication, and real-time updates.',
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
    highlights: [
      'Implemented JWT-based authentication system',
      'Built RESTful API with Express.js',
      'Designed responsive UI with React hooks',
      'Integrated PostgreSQL with optimized queries',
    ],
    status: 'Live',
    featured: false,
  },
  {
    id: 6,
    name: 'VoiceShield',
    tagline: "Women's Safety Application",
    link: '',
    github: '',
    summary:
      'A women safety mobile application featuring voice-activated emergency alerts, real-time location sharing, and trusted contacts management.',
    technologies: ['React Native', 'Geolocation API', 'Push Notifications', 'Voice Recognition'],
    highlights: [
      'Implemented voice command recognition',
      'Integrated real-time location tracking',
      'Built emergency contact alert system',
      'Designed for quick emergency response',
    ],
    status: 'Prototype',
    featured: false,
  },
];

export const ABOUT_TEXT = `I'm Shreeram R, an AI Engineer based in Japan, building intelligent systems that bridge language models and real-world applications. I specialize in LLM-powered solutions, browser automation, and full-stack development — with a focus on shipping production-grade AI tools that actually work.

Currently, I work on applied AI engineering — from fine-tuning text-to-SQL models powering in-house enterprise search systems, to building browser automation agents using OpenClaw and vLLM. My work sits at the intersection of AI research and practical engineering.

My development background spans the full stack: React, Node.js, PostgreSQL, React Native, and Spring Boot. I believe the best AI products are built by engineers who understand both the model layer and the product layer equally well.

Fluent in Japanese (JLPT N3), I thrive in Japan's fast-moving tech landscape and love collaborating across cultures and disciplines. I'm always chasing the next hard problem — whether that's scaling an inference pipeline or designing a seamless user experience.`;

export const EXPERIENCE = [
  {
    id: 1,
    role: 'AI Engineer',
    organization: 'Tech Company, Japan',
    period: '2025 - Present',
    description: 'Building production AI systems including LLM-powered search and intelligent browser automation agents.',
    achievements: [
      'Developed a Text-to-SQL model for an in-house employee search system, enabling natural language queries over internal databases',
      'Built a browser automation AI agent using OpenClaw and vLLM for enterprise workflow automation',
      'Deployed and optimized LLM inference pipelines using vLLM for low-latency production use',
    ],
  },
  {
    id: 2,
    role: 'Full-Stack Developer (Previous)',
    organization: 'Project / Internship',
    period: '2024 - 2025',
    description: 'Developed an inventory management system with a robust Java backend and modern frontend.',
    achievements: [
      'Built a full-stack inventory management system using Spring Boot and REST APIs',
      'Designed database schema and backend services for real-time stock tracking',
      'Integrated frontend dashboards for inventory reporting and analytics',
    ],
  },
  {
    id: 3,
    role: 'CSE Student & Self-Taught Developer',
    organization: 'RMK Engineering College',
    period: '2021 - 2025',
    description: 'Focused on full-stack development, data structures, algorithms, and modern web technologies.',
    achievements: [
      'Developed multiple full-stack projects using MERN stack',
      'Achieved Japanese language proficiency (JLPT N3)',
      'Participated in hackathons and coding competitions',
    ],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: 'Bachelor of Engineering in Computer Science Engineering',
    institution: 'RMK Engineering College',
    period: '2021 - 2025',
    gpa: 'X.XX',
    achievements: [
      'Specialized in Web Development and Database Management',
      'Completed advanced courses in Data Structures and Algorithms',
    ],
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    name: 'NAT q3 - Japanese Language Proficiency',
    issuer: 'Japan Foundation',
    year: '2024',
  },
  // Add more certifications as needed
];
