export interface Project {
  id: string;
  code: string;
  title: string;
  description: string[];
  tags: string[];
  domain: string;
  link: string;
  isLinkClickable: boolean;
  linkText: string;
}

export const projects: Project[] = [
    { 
      id: '1',
      code: 'mAIgic',
      title: 'AI Agent that reads all your emails and updates your calendar',
      description: [
        'Developed an open-source app that reads communication from gmail, slack, trello and automatically updates your calendar.'
      ],
      tags: ['Python', 'Flask', 'Postgres', 'ReactJs'],
      domain: 'AI',
      link: 'https://github.com/yourusername/LLM-application',
      isLinkClickable: false, // New property
      linkText: 'View on GitHub' // New property
    },
    {
      id: '2',
      code: 'IO',
      title: 'Performance Optimization and Analysis of Disk I/O in a Real Linux Environment',
      description: [
        'Achieved a 500% enhancement in cached reads and a 150% boost in non-cached reads.',
        'Elevated read speeds from the local setup of 2500 MiB/s to 15000 MiB/s on a block size of 65536 bytes.'
      ],
      tags: ['C++', 'Linux', 'Shell', 'Git'],
      domain: 'Backend',
      link: 'https://github.com/yourusername/Disk-IO-Optimization',
      isLinkClickable: true, // New property
      linkText: 'View on GitHub' // New property
    },
    {
      id: '3',
      code: 'FAD',
      title: 'AI-Fitness Analytics Dashboard',
      description: [
        'Architected AWS services to host a Flask application on EC2 providing seamless integration with Google Fit metrics.'
      ],
      tags: ['Python', 'Django', 'Postgres', 'DynamoDB', 'EC2', 'Sagemaker', 'SNS', 'SQS', 'ReactJs'],
      domain: 'Full Stack',
      link: 'https://github.com/yourusername/Fitness-Analytics-Dashboard',
      isLinkClickable: true, // New property
      linkText: 'View on GitHub' // New property
    },
    // Dummy projects
    {
      id: '4',
      code: 'DP1',
      title: 'Flowcontrol',
      description: [
        'This is a dummy project for testing purposes.'
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
      domain: 'Frontend',
      link: 'https://github.com/yourusername/dummy-project-1',
      isLinkClickable: true, // New property
      linkText: 'View on GitHub' // New property
    },
    {
      id: '5',
      code: 'DP2',
      title: 'KubeControl',
      description: [
        'This is another dummy project for testing purposes.'
      ],
      tags: ['Python', 'Django'],
      domain: 'Backend',
      link: 'https://github.com/yourusername/dummy-project-2',
      isLinkClickable: true, // New property
      linkText: 'View on GitHub' // New property
    },
    {
      id: '6',
      code: 'DP3',
      title: 'White board',
      description: [
        'This is yet another dummy project for testing purposes.'
      ],
      tags: ['React', 'Node.js'],
      domain: 'Full Stack',
      link: 'https://github.com/yourusername/dummy-project-3',
      isLinkClickable: true, // New property
      linkText: 'View on GitHub' // New property
    },
    {
      id: '7',
      code: 'DP4',
      title: 'Amazon Review',
      description: [
        'This is a dummy project for testing purposes.'
      ],
      tags: ['AWS', 'Docker'],
      domain: 'Cloud',
      link: 'https://github.com/yourusername/dummy-project-4',
      isLinkClickable: true, // New property
      linkText: 'View on GitHub' // New property
    },
    {
      id: '8',
      code: 'DP5',
      title: 'Telegram Checkout',
      description: [
        'This is another dummy project for testing purposes.'
      ],
      tags: ['Kubernetes', 'CI/CD'],
      domain: 'DevOps',
      link: 'https://github.com/yourusername/dummy-project-5',
      isLinkClickable: true, // New property
      linkText: 'View on GitHub' // New property
    },
    {
      id: '9',
      code: 'DP6',
      title: 'Dummy Project 6',
      description: [
        'This is yet another dummy project for testing purposes.'
      ],
      tags: ['Machine Learning', 'Python'],
      domain: 'AI',
      link: 'https://github.com/yourusername/dummy-project-6',
      isLinkClickable: true, // New property
      linkText: 'View on GitHub' // New property
    },
    {
      id: '10',
      code: 'DP7',
      title: 'Dummy Project 7',
      description: [
        'This is a dummy project for testing purposes.'
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
      domain: 'Frontend',
      link: 'https://github.com/yourusername/dummy-project-7',
      isLinkClickable: true, // New property
      linkText: 'View on GitHub' // New property
    },
    {
      id: '11',
      code: 'DP8',
      title: 'Dummy Project 8',
      description: [
        'This is another dummy project for testing purposes.'
      ],
      tags: ['Python', 'Django'],
      domain: 'Backend',
      link: 'https://github.com/yourusername/dummy-project-8',
      isLinkClickable: true, // New property
      linkText: 'View on GitHub' // New property
    },
    {
      id: '12',
      code: 'DP9',
      title: 'Dummy Project 9',
      description: [
        'This is yet another dummy project for testing purposes.'
      ],
      tags: ['React', 'Node.js'],
      domain: 'Full Stack',
      link: 'https://github.com/yourusername/dummy-project-9',
      isLinkClickable: true, // New property
      linkText: 'View on GitHub' // New property
    },
    {
      id: '13',
      code: 'DP10',
      title: 'Dummy Project 10',
      description: [
        'This is a dummy project for testing purposes.'
      ],
      tags: ['AWS', 'Docker'],
      domain: 'Cloud',
      link: 'https://github.com/yourusername/dummy-project-10',
      isLinkClickable: false, // New property
      linkText: 'Not Available' // New property
    }
  ]

export const domains = ['Frontend', 'Backend', 'AI', 'Core/Infra', 'Cloud/DevOps']

export const domainHierarchy: { [key: string]: string[] } = {
  'Frontend': ['Frontend', 'Full Stack'],
  'Backend': ['Backend', 'Full Stack'],
  'AI': ['AI'],
  'Cloud/DevOps': ['Cloud/DevOps'],
  'Core/Infra': ['Core/Infra']
}
