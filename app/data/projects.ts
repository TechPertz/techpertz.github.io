export interface Project {
  code: string;
  title: string;
  description: string[];
  tags: string[];
  domain: string[]; // Changed from string to string[]
  link: string;
  isLinkClickable: boolean;
  linkText: string;
}

export const projects: Project[] = [
  {
    code: "GrantGenie",
    title: "GrantGenie: AI Agent for Web3 Global Fund Matching",
    description: [
      "Developed a Python backend using FastAPI, PostgreSQL, and Redis, enabling efficient API-driven grant discovery and data retrieval pipelines.",
      "Built AI-driven grant matching with LangChain, OpenAI APIs, and Pinecone, leveraging LLMs and vector search for multilingual NLP, RAG-based personalized recommendations, and automated grant application drafting.",
      "Integrated Web3 features with web3.py, Ethereum testnets, and IPFS, enabling wallet authentication, smart contract-based grant tracking, and decentralized metadata storage."
    ],
    tags: ["React", "TypeScript", "REST API"],
    domain: ["AI", "Frontend", "Backend", "Web3"], // Changed to array
    link: "",
    isLinkClickable: false,
    linkText: "AI2Web3 Bootcamp Top Project",
  },
  {
    code: "IO",
    title:
      "Performance Optimization and Analysis of Disk I/O",
    description: [
      "Developed a C++ program for optimizing disk I/O, leveraging multi-threading, block size tuning (up to 65536 bytes), and efficient system call modifications (read and lseek) to enhance performance for diverse file sizes.",
      "Achieved 15,003 MiB/s for cached reads on smaller files and ~3000 MiB/s on larger files, with consistent performance of ~2,500 MiB/s under cache-cleared conditions, improving throughput by over 5x for multi-threaded execution.",
    ],
    tags: ["C++", "Linux", "Shell", "Git"],
    domain: ["Core"], // Changed to array
    link: "https://github.com/yourusername/Disk-IO-Optimization",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "FAD",
    title: "AI-Fitness Analytics Dashboard (AWS)",
    description: [
      "Architected a scalable health tracking platform leveraging AWS services including SageMaker (KNN model), Lambda, SQS, SNS, RDS, DynamoDB, and S3, enabling real-time insights and personalized exercise recommendations.",
      "Developed an ETL pipeline to synchronize health metrics from Google Fit API into DynamoDB and RDS, integrating microservices for data processing, storage, and ML-driven predictions.",
      "Ensured secure and reliable operations with AWS Cognito for authentication, CloudWatch for monitoring, and IAM for access control, alongside encrypted data at rest and in transit."
    ],
    tags: [
      "Django",
      "ReactJs",
      "Lambda",
      "DynamoDB",
      "Beanstalk",
      "Sagemaker",
      "SNS",
      "SQS",
    ],
    domain: ["Cloud", "DevOps/Infra"], // Changed to array
    link: "https://github.com/yourusername/Fitness-Analytics-Dashboard",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "mAIgic",
    title: "LLM-Powered Smart Task Manager",
    description: [
      "Automated task management by integrating OpenAI APIs with Gmail to extract tasks from emails and sync them to Trello, reducing task disorganization and latency.",
      "Streamlined multi-channel communication by integrating Slack, enabling task updates and user commands through real-time Slack interactions, improving workflow efficiency.",
      "Ensured system reliability with modular API integration and secure OAuth authentication for Gmail and Trello, addressing privacy concerns and enhancing maintainability."
    ],
    tags: ["Python", "Flask", "Postgres", "ReactJs"],
    domain: ["AI"],
    link: "https://github.com/yourusername/LLM-application",
    isLinkClickable: false,
    linkText: "View on GitHub",
  },
  // Dummy projects
  {
    code: "DP1",
    title: "Flowcontrol: Simplifying Complex Shell Workflows",
    description: ["Developed a C++ framework to streamline command-line workflows, enabling developers to easily automate tasks like piping (|), redirections (>), and multi-command execution (;) with robust error handling (2>&1).",
      "Implemented a .flow file parser to simplify the creation and execution of complex command sequences, reducing manual effort and providing an intuitive way to manage shell operations efficiently."
    ],
    tags: ["C++", "Unix Systems Programming", "Shell"],
    domain: ["Core"],
    link: "https://github.com/yourusername/dummy-project-1",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "DP2",
    title: "KubeControl: Cloud-Native Monitoring and Alerting Solution",
    description: ["Designed and deployed a scalable Flask-MongoDB application using Docker and Kubernetes, with advanced features like rolling updates, replication, and health probes for robust orchestration.",
      "Implemented real-time monitoring and alerting by integrating Prometheus and Slack, enabling proactive issue resolution in both local (Minikube) and cloud (AWS EKS) environments.",
      "Leveraged AWS services, including EKS for orchestration and S3 for storage, ensuring production-grade deployments with seamless scalability and high availability."
    ],
    tags: ["Flask", "MongoDB", "Docker", "Kubernetes (Minikube, AWS EKS)", "Prometheus", "Slack API", "AWS (EKS, S3, CloudWatch)"],
    domain: ["Backend"],
    link: "https://github.com/yourusername/dummy-project-2",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "DP3",
    title: "White board: Real-Time Collaborative Whiteboard",
    description: ["Designed and implemented a real-time collaborative whiteboard application, leveraging WebSockets for seamless, multi-user drawing updates and Java Swing for an intuitive GUI.",
      "Optimized performance with batch processing, asynchronous communication, and thread-safe concurrency controls, ensuring low-latency updates and efficient handling of large-scale data.",
    ],
    tags: ["React", "Node.js"],
    domain: ["Frontend", "Backend", "Core"],
    link: "https://github.com/yourusername/dummy-project-3",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "DP4",
    title: "Amazon Review",
    description: ["This is a dummy project for testing purposes."],
    tags: ["AWS", "Docker"],
    domain: ["Cloud"],
    link: "https://github.com/yourusername/dummy-project-4",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "DP5",
    title: "Telegram Checkout",
    description: ["This is another dummy project for testing purposes."],
    tags: ["Kubernetes", "CI/CD"],
    domain: ["DevOps"],
    link: "https://github.com/yourusername/dummy-project-5",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "DP6",
    title: "reetnandy.com: My Portfolio Website",
    description: ["This is a dummy project for testing purposes."],
    tags: ["Python", "NLP"],
    domain: ["AI"],
    link: "",
    isLinkClickable: false,
    linkText: "AI2Web3 Bootcamp Top Project",
  },
];

export const domains = [
  "Frontend",
  "Backend",
  "AI",
  "Core",
  "Cloud",
  "DevOps/Infra",
  "Web3"
];

export const domainHierarchy: { [key: string]: string[] } = {
  Frontend: ["Frontend"],
  Backend: ["Backend"],
  AI: ["AI"],
  Cloud: ["Cloud"],
  "DevOps/Infra": ["DevOps/Infra"],
  Core: ["Core"],
  "Full Stack": ["Frontend", "Backend"],
  Web3: ["Web3"]
};

