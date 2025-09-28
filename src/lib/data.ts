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
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with a custom CMS, payment gateway integration, and responsive design.',
    image: 'ecom-platform',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    caseStudy: true,
  },
  {
    id: 2,
    title: 'React Native Social App',
    description: 'A cross-platform mobile app for social networking, featuring real-time chat and push notifications.',
    image: 'social-app',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    caseStudy: false,
  },
  {
    id: 3,
    title: 'AI-Powered Analytics Dashboard',
    description: 'A web application that visualizes complex data and uses AI to provide actionable insights.',
    image: 'analytics-dashboard',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    caseStudy: true,
  },
  {
    id: 4,
    title: 'Decentralized Voting dApp',
    description: 'A secure and transparent voting application built on the Ethereum blockchain using Solidity smart contracts.',
    image: 'voting-dapp',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    caseStudy: false,
  },
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
