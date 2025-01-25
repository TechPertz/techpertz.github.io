export interface Project {
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
    code: "GrantGenie",
    title: "GrantGenie: AI Platform for Web3 Global Fund Matching",
    description: [
      "Developed a Python backend using FastAPI, PostgreSQL, and Redis, enabling efficient API-driven grant discovery and data retrieval pipelines.",
      "Built AI-driven grant matching with LangChain, OpenAI APIs, and Pinecone, leveraging LLMs and vector search for multilingual NLP, RAG-based personalized recommendations, and automated grant application drafting.",
      "Integrated Web3 features with web3.py, Ethereum testnets, and IPFS, enabling wallet authentication, smart contract-based grant tracking, and decentralized metadata storage."
    ],
    tags: ["React", "TypeScript", "REST API"],
    domain: "Frontend",
    link: "",
    isLinkClickable: false,
    linkText: "AI2Web3 Bootcamp Top Project",
  },
  {
    code: "mAIgic",
    title: "AI Agent that reads all your emails and updates your calendar",
    description: [
      "Automated task management by integrating OpenAI APIs with Gmail to extract tasks from emails and sync them to Trello, reducing task disorganization and latency.",
      "Streamlined multi-channel communication by integrating Slack, enabling task updates and user commands through real-time Slack interactions, improving workflow efficiency.",
      "Ensured system reliability with modular API integration and secure OAuth authentication for Gmail and Trello, addressing privacy concerns and enhancing maintainability."
    ],
    tags: ["Python", "Flask", "Postgres", "ReactJs"],
    domain: "AI",
    link: "https://github.com/yourusername/LLM-application",
    isLinkClickable: false,
    linkText: "View on GitHub",
  },
  {
    code: "IO",
    title:
      "Performance Optimization and Analysis of Disk I/O in a Real Linux Environment",
    description: [
      "Developed a C++ program for optimizing disk I/O, leveraging multi-threading, block size tuning (up to 65536 bytes), and efficient system call modifications (read and lseek) to enhance performance for diverse file sizes.",
      "Achieved 15,003 MiB/s for cached reads on smaller files and 2,566 MiB/s on larger files, with consistent performance of ~2,390 MiB/s under cache-cleared conditions, improving throughput by over 5x for multi-threaded execution.",
    ],
    tags: ["C++", "Linux", "Shell", "Git"],
    domain: "Backend",
    link: "https://github.com/yourusername/Disk-IO-Optimization",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "FAD",
    title: "AI-Fitness Analytics Dashboard",
    description: [
      "Architected AWS services to host a Flask application on EC2 providing seamless integration with Google Fit metrics.",
    ],
    tags: [
      "Python",
      "Django",
      "Postgres",
      "DynamoDB",
      "EC2",
      "Sagemaker",
      "SNS",
      "SQS",
      "ReactJs",
    ],
    domain: "Full Stack",
    link: "https://github.com/yourusername/Fitness-Analytics-Dashboard",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  // Dummy projects
  {
    code: "DP1",
    title: "Flowcontrol",
    description: ["This is a dummy project for testing purposes."],
    tags: ["HTML", "CSS", "JavaScript"],
    domain: "Frontend",
    link: "https://github.com/yourusername/dummy-project-1",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "DP2",
    title: "KubeControl",
    description: ["This is another dummy project for testing purposes."],
    tags: ["Python", "Django"],
    domain: "Backend",
    link: "https://github.com/yourusername/dummy-project-2",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "DP3",
    title: "White board",
    description: ["This is yet another dummy project for testing purposes."],
    tags: ["React", "Node.js"],
    domain: "Full Stack",
    link: "https://github.com/yourusername/dummy-project-3",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "DP4",
    title: "Amazon Review",
    description: ["This is a dummy project for testing purposes."],
    tags: ["AWS", "Docker"],
    domain: "Cloud",
    link: "https://github.com/yourusername/dummy-project-4",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "DP5",
    title: "Telegram Checkout",
    description: ["This is another dummy project for testing purposes."],
    tags: ["Kubernetes", "CI/CD"],
    domain: "DevOps",
    link: "https://github.com/yourusername/dummy-project-5",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "DP6",
    title: "Dummy Project 6",
    description: ["This is yet another dummy project for testing purposes."],
    tags: ["Machine Learning", "Python"],
    domain: "AI",
    link: "https://github.com/yourusername/dummy-project-6",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "DP7",
    title: "Dummy Project 7",
    description: ["This is a dummy project for testing purposes."],
    tags: ["HTML", "CSS", "JavaScript"],
    domain: "Frontend",
    link: "https://github.com/yourusername/dummy-project-7",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "DP8",
    title: "Dummy Project 8",
    description: ["This is another dummy project for testing purposes."],
    tags: ["Python", "Django"],
    domain: "Backend",
    link: "https://github.com/yourusername/dummy-project-8",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "DP9",
    title: "Dummy Project 9",
    description: ["This is yet another dummy project for testing purposes."],
    tags: ["React", "Node.js"],
    domain: "Full Stack",
    link: "https://github.com/yourusername/dummy-project-9",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "DP10",
    title: "Dummy Project 10",
    description: ["This is a dummy project for testing purposes."],
    tags: ["AWS", "Docker"],
    domain: "Cloud",
    link: "https://github.com/yourusername/dummy-project-10",
    isLinkClickable: false,
    linkText: "Not Available",
  },
];

export const domains = [
  "Frontend",
  "Backend",
  "AI",
  "Core/Infra",
  "Cloud/DevOps",
];

export const domainHierarchy: { [key: string]: string[] } = {
  Frontend: ["Frontend", "Full Stack"],
  Backend: ["Backend", "Full Stack"],
  AI: ["AI"],
  "Cloud/DevOps": ["Cloud/DevOps"],
  "Core/Infra": ["Core/Infra"],
};
