import type { SelectClientSuccessStoryInput } from '@/ai/flows/client-success-story-selector';

export const services = [
  {
    title: 'Web Development',
    description: 'Building responsive, high-performance websites and web applications. From marketing sites to complex e-commerce platforms and content management systems.',
    timeline: '2-8 weeks',
    packages: ['Basic Website', 'E-commerce Store', 'Web App'],
  },
  {
    title: 'Mobile App Development',
    description: 'Crafting beautiful and functional mobile apps for iOS and Android using modern frameworks like React Native for cross-platform compatibility and native performance.',
    timeline: '4-12 weeks',
    packages: ['Cross-Platform App', 'Native iOS App', 'Native Android App'],
  },
  {
    title: 'Custom Software & APIs',
    description: 'Designing and developing bespoke software solutions and robust APIs tailored to your unique business needs, ensuring scalability and security.',
    timeline: 'Varies',
    packages: ['API Development', 'Business Automation', 'SaaS Product'],
  },
  {
    title: 'AI & Blockchain Solutions',
    description: 'Integrating cutting-edge AI/ML models for intelligent features and developing decentralized applications (dApps) on blockchain platforms like Ethereum.',
    timeline: 'Varies',
    packages: ['AI Model Integration', 'Smart Contract Dev', 'dApp Creation'],
  },
  {
    title: 'Maintenance & Support',
    description: 'Providing ongoing support, updates, and maintenance to ensure your digital products remain secure, up-to-date, and performant.',
    timeline: 'Ongoing',
    packages: ['Monthly Retainer', 'On-Demand Support', 'Performance Audits'],
  },
];

export const portfolioProjects = [
  {
    id: 1,
    title: 'E-commerce Overhaul',
    problem: 'Legacy system causing high cart abandonment and slow load times.',
    solution: 'Built a headless Next.js frontend with an optimized checkout flow.',
    impact: '40% increase in mobile conversion rates.',
    image: 'ecom-platform',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    caseStudy: true,
  },
  {
    id: 2,
    title: 'Social App Scaling',
    problem: 'The app crashed frequently under peak traffic of 10k users.',
    solution: 'Implemented real-time data sync and horizontal auto-scaling.',
    impact: '99.9% uptime achieved with 2x user growth.',
    image: 'social-app',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    caseStudy: false,
  },
  {
    id: 3,
    title: 'AI Analytics Engine',
    problem: 'Manual data entry was costing the client 40 hours per week.',
    solution: 'Developed an automated pipeline using Gemini for data extraction.',
    impact: 'Saved ₹4,00,000/month in operational overhead.',
    image: 'analytics-dashboard',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    caseStudy: true,
  },
  {
    id: 4,
    title: 'Secure Voting System',
    problem: 'Need for tamper-proof voting for a non-profit foundation.',
    solution: 'Deployed a private Ethereum-based ledger for voting records.',
    impact: '100% verifiable and immutable results for 50k members.',
    image: 'voting-dapp',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    caseStudy: false,
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: "We start by identifying your core business challenges and defining the MVP features that will drive the most immediate value."
  },
  {
    step: '02',
    title: 'Prototyping & Feedback',
    description: "I build rapid, interactive prototypes so you can experience the solution before full-scale development begins."
  },
  {
    step: '03',
    title: 'Agile Development',
    description: "Transparent coding with weekly updates and demo sessions to ensure the product aligns perfectly with your vision."
  },
  {
    step: '04',
    title: 'Launch & Growth',
    description: "Ongoing support and performance monitoring to ensure your product scales as your user base grows."
  }
];

export const clientStories: SelectClientSuccessStoryInput['clientStories'] = [
    {
      title: 'Fintech Startup Overhaul',
      story: 'We transformed a legacy fintech platform into a modern, scalable solution using Next.js and microservices, resulting in a 50% increase in performance and a 30% reduction in operational costs. The new API-first architecture allowed for seamless integration with third-party services.',
      industry: 'Fintech',
    },
    {
      title: 'Healthcare Patient Portal',
      story: 'Developed a HIPAA-compliant patient portal with React Native, enabling secure communication between patients and doctors. The app received a 4.8-star rating on app stores and improved patient engagement by 40%.',
      industry: 'Healthcare',
    },
    {
      title: 'E-commerce Fashion Retailer',
      story: 'Built a visually stunning e-commerce store for a fashion brand, focusing on a mobile-first user experience. The site saw a 60% increase in mobile conversions and was featured in several design galleries for its clean UI/UX.',
      industry: 'E-commerce',
    },
    {
        title: 'Real Estate Platform Modernization',
        story: 'Upgraded a major real estate listings platform with a new frontend built in Next.js and a backend powered by Node.js. Integrated with multiple MLS providers and improved search speed by 200%, leading to a significant boost in user retention.',
        industry: 'Real Estate',
    }
  ];

export const industries = [...new Set(clientStories.map(story => story.industry))];