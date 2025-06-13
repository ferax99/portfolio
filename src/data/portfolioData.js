// Datos para la sección de Proyectos
export const projects = [
  {
    id: 1,
    title: 'Altamar',
    description: 'A web application for selling and buying seafood for locals in puntarenas, optimizing customer experience and internal administration.',
    role: 'Full Stack Developer: Designed and developed the user interface, implemented business logic, and configured the database.',
    technologies: ['React Native', 'Node.js', 'Express', 'MongoDB'],
    challenges: 'Integrating and optimizing performance for high user concurrency.',
    learnings: 'Improved my skills in developing RESTful APIs and managing NoSQL databases, as well as implementing JWT authentication.',
    demoLink: 'https://youtu.be/ExN-AacWR_o', // Placeholder link
    image: 'https://media.istockphoto.com/id/1206507650/es/foto/atrapar-al-m%C3%A1s-grande-del-mar.jpg?s=612x612&w=0&k=20&c=wAUXFCv8ATbxwpmY6BeM9Fb28M9iV-stPBlRNblYFSs=', // Placeholder image for dark mode
    altText: 'Screenshot of the Altamar application'
  },
  {
    id: 2,
    title: 'Connect 4',
    description: 'Implementation of the classic "Connect 4" game with an interactive web interface, allowing users to play against AI or each other.',
    role: 'Frontend Developer: Created game logic, designed the user interface, and handled browser interactivity.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    challenges: 'Developing an efficient AI algorithm for the opponent and ensuring a fluid and visually appealing user experience.',
    learnings: 'Deepened my understanding of search algorithms (Minimax) and DOM manipulation for creating animations and visual effects.',
    demoLink: 'https://youtu.be/z818CzajA64', // Placeholder link
    repoLink: 'https://github.com/ferax99/Connect4', // Placeholder link
    image: 'https://www.figma.com/community/snapshot?resource_id=1030568602955576031&resource_type=widget', // Placeholder image for dark mode
    altText: 'Screenshot of the Connect 4 game'
  }
];

// Datos para la sección de Proyectos Freelance
export const freelanceProjects = [
  {
    id: 1,
    title: 'Custom Python Automation',
    description: 'Developed bespoke Python scripts for data processing, web scraping, and task automation, significantly improving client efficiency.',
    technologies: ['Python',  'Selenium', 'Pandas'],
    rating: 5,
    testimonial: '"Fernando delivered exactly what I needed, quickly and professionally. Highly recommended!"',
    image: 'https://placehold.co/400x250/2E7D32/ffffff?text=Python+Automation',
    altText: 'Screenshot of Python code automation'
  },
  {
    id: 2,
    title: 'Responsive Web Design',
    description: 'Created modern, responsive websites for small businesses, ensuring optimal viewing and user experience across all devices.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    rating: 5,
    testimonial: '"Our new website looks fantastic and works perfectly on mobile. Fernando is a true professional."',
    image: 'https://placehold.co/400x250/1976D2/ffffff?text=Web+Design',
    altText: 'Screenshot of a responsive web design'
  },
  {
    id: 3,
    title: 'QA & Game Testing',
    description: 'Provided thorough quality assurance and testing services for web applications and indie video games, identifying critical bugs and improving overall stability.',
    technologies: [ 'Selenium', 'Manual Testing', 'Automated Testing'],
    rating: 4,
    testimonial: '"Fernando\'s attention to detail in testing was invaluable. He found issues we missed."',
    image: 'https://placehold.co/400x250/D32F2F/ffffff?text=QA+Testing',
    altText: 'Screenshot of QA testing interface'
  },
];

// Datos para la sección de Experiencia (Profesional, Educación, Certificaciones, Logros)
export const experiences = {
  professional: [
    {
      id: 1,
      role: 'Automation Test Engineer II',
      company: 'Accela',
      location: 'Remote',
      years: '2024 – Present',
      bullets: [
        { icon: 'Code', text: 'Developed and maintained automated testing frameworks with Python and Robot Framework.' },
        { icon: 'Database', text: 'Validated APIs and data using SQL in microservices architectures.' },
        { icon: 'GitFork', text: 'Optimized CI/CD pipelines and monitored performance in cloud environments.' },
      ]
    },
    {
      id: 2,
      role: 'Automation & Solutions Engineer',
      company: 'VMware',
      location: 'Costa Rica',
      years: '2023',
      bullets: [
        { icon: 'Code', text: 'Created backend services with Python (Flask) for internal data flows.' },
        { icon: 'Database', text: 'Modeled and analyzed data in MongoDB.' },
        { icon: 'Wrench', text: 'Automated data validation and reporting.' },
        { icon: 'Cloud', text: 'Managed infrastructure in AWS.' },
      ]
    },
    {
      id: 3,
      role: 'Full Stack Developer Intern',
      company: 'Konrad Group',
      location: 'Costa Rica',
      years: '2022',
      bullets: [
        { icon: 'Code', text: 'Full stack application development (React + Spring Boot).' },
        { icon: 'Bot', text: 'Participated in agile teams and cloud deployment (AWS/GCP).' },
      ]
    },
    {
      id: 4,
      role: 'Freelance Developer & Consultant',
      company: 'Fiverr',
      location: 'Remote',
      years: '2020 – 2023',
      bullets: [
        { icon: 'Code', text: 'Developed Python scripts and custom web applications.' },
        { icon: 'Wrench', text: 'Tested and quality assured web applications and video games.' },
      ]
    }
  ],
  education: [
    {
      id: 1,
      title: 'Bachelor\'s Degree in Computer Engineering',
      institution: 'TEC',
      location: 'Costa Rica',
      years: '2022',
    }
  ],
  certifications: [
    {
      id: 1,
      title: 'Agile: Scrum',
      issuer: 'FreeCodeCamp',
      years: '2022',
    }
  ],
  achievements: [
    {
      id: 1,
      text: 'Winner of the "Best Project" award at the 2021 university carreer project',
    }
  ]
};
