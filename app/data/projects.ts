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
      "Integrated Web3 features with web3.py, Ethereum testnets, and IPFS, enabling wallet authentication, smart contract-based grant tracking, and decentralized metadata storage.",
    ],
    tags: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "LangChain",
      "OpenAI API",
      "Pinecone",
      "web3.py",
      "IPFS",
    ],
    domain: ["AI", "Frontend", "Backend", "Web3"],
    link: "",
    isLinkClickable: false,
    linkText: "AI2Web3 Bootcamp Top Project",
  },
  {
    code: "FAD",
    title: "AI-Fitness Analytics Dashboard (AWS)",
    description: [
      "Architected a scalable health tracking platform leveraging AWS services including SageMaker (KNN model), Lambda, SQS, SNS, RDS, DynamoDB, and S3, enabling real-time insights and personalized exercise recommendations.",
      "Developed an ETL pipeline to synchronize health metrics from Google Fit API into DynamoDB and RDS, integrating microservices for data processing, storage, and ML-driven predictions.",
      "Ensured secure and reliable operations with AWS Cognito for authentication, CloudWatch for monitoring, and IAM for access control, alongside encrypted data at rest and in transit.",
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
    domain: ["AI", "Frontend", "Backend", "Cloud", "DevOps/Infra"],
    link: "https://github.com/yourusername/Fitness-Analytics-Dashboard",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "Flowcontrol",
    title: "Flowcontrol: Simplifying Complex Shell Workflows",
    description: [
      "Developed a C++ framework to streamline command-line workflows, enabling developers to easily automate tasks like piping (|), redirections (>), and multi-command execution (;) with robust error handling (2>&1).",
      "Implemented a .flow file parser to simplify the creation and execution of complex command sequences, reducing manual effort and providing an intuitive way to manage shell operations efficiently.",
    ],
    tags: ["C++", "Unix Systems Programming", "Shell"],
    domain: ["Core"],
    link: "https://github.com/TechPertz/FlowControl/tree/test",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "KubeControl",
    title: "KubeControl: Cloud-Native Monitoring and Alerting Solution",
    description: [
      "Designed and deployed a scalable Flask-MongoDB application using Docker and Kubernetes, with advanced features like rolling updates, replication, and health probes for robust orchestration.",
      "Implemented real-time monitoring and alerting by integrating Prometheus and Slack, enabling proactive issue resolution in both local (Minikube) and cloud (AWS EKS) environments.",
      "Leveraged AWS services, including EKS for orchestration and S3 for storage, ensuring production-grade deployments with seamless scalability and high availability.",
    ],
    tags: [
      "Flask",
      "MongoDB",
      "Docker",
      "Kubernetes (Minikube, AWS EKS)",
      "Prometheus",
      "Slack API",
      "AWS (EKS, S3, CloudWatch)",
    ],
    domain: ["AI", "Frontend", "Backend", "Cloud", "DevOps/Infra"],
    link: "https://github.com/TechPertz/KubeMonitorApp",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "Whiteboard",
    title: "White board: Real-Time Collaborative Java Application",
    description: [
      "Designed and implemented a real-time collaborative whiteboard application, leveraging WebSockets for seamless, multi-user drawing updates and Java Swing for an intuitive GUI.",
      "Optimized performance with batch processing, asynchronous communication, and thread-safe concurrency controls, ensuring low-latency updates and efficient handling of large-scale data.",
    ],
    tags: ["Java", "Java Swing", "Spring Boot", "WebSockets", "Batch Processing"],
    domain: ["Frontend", "Backend", "Core"],
    link: "https://github.com/TechPertz/WhiteBoard",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "IO",
    title: "Performance Optimization and Analysis of Disk I/O",
    description: [
      "Developed a C++ program for optimizing disk I/O, leveraging multi-threading, block size tuning (up to 65536 bytes), and efficient system call modifications (read and lseek) to enhance performance for diverse file sizes.",
      "Achieved 15,003 MiB/s for cached reads on smaller files and ~3000 MiB/s on larger files, with consistent performance of ~2,500 MiB/s under cache-cleared conditions, improving throughput by over 5x for multi-threaded execution.",
    ],
    tags: ["C++", "Linux", "Shell", "Git"],
    domain: ["Core"],
    link: "https://github.com/yourusername/Disk-IO-Optimization",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "mAIgic",
    title: "LLM-Powered Smart Task Manager",
    description: [
      "Automated task management by integrating OpenAI APIs with Gmail to extract tasks from emails and sync them to Trello, reducing task disorganization and latency.",
      "Streamlined multi-channel communication by integrating Slack, enabling task updates and user commands through real-time Slack interactions, improving workflow efficiency.",
      "Ensured system reliability with modular API integration and secure OAuth authentication for Gmail and Trello, addressing privacy concerns and enhancing maintainability.",
    ],
    tags: ["Python", "Flask", "PostgreSQL", "OpenAI API", "Gmail API", "Trello API", "Slack Bolt Framework", "React"],
    domain: ["AI",  "Backend"],
    link: "https://github.com/TechPertz/mAIgic-nyu",
    isLinkClickable: false,
    linkText: "View on GitHub",
  },
  {
    code: "reetnandy.com",
    title: "reetnandy.com: My Portfolio Website",
    description: [
      "Architected and developed a modern, responsive portfolio website using Next.js 14 (React), TypeScript, and Tailwind CSS, implementing dynamic routing and server-side rendering for optimal performance and SEO.",
      "Engineered a custom project filtering system and implemented intersection observer-based smooth scrolling navigation, alongside dark mode theming and responsive design patterns for enhanced user experience.",
      "Automated deployment using GitHub Actions workflow for CI/CD, configured with custom domain integration and optimized build processes for GitHub Pages hosting.",
    ],
    tags: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "GitHub Actions",
      "CI/CD",
      "Responsive Design",
    ],
    domain: ["Frontend", "Cloud", "DevOps/Infra"],
    link: "https://github.com/TechPertz/techpertz.github.io",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "K2F2",
    title: "K2F2: Location-Based Django Application",
    description: [
      "Built a location-based web application using Django and React, implementing a REST API with authentication through Django Rest Framework (DRF).",
      "Developed 3 custom spatial database models with GeoDjango and PostGIS, enabling accurate location-based results (within 100 meters) and interactive map visualizations.",
    ],
    tags: [
      "React",
      "Django",
      "Django Rest Framework",
      "GeoDjango",
      "PostGIS",
      "Spatial Data Modeling",
      "REST API",
      "Authentication",
    ],
    domain: ["Frontend", "Backend", "Cloud"],
    link: "https://github.com/TechPertz/PseudoHacks_0.6Ravyn",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "ReviewAnalyzer",
    title: "ReviewAnalyzer: Sentiment and Keyword Extraction Tool",
    description: [
      "Developed a web application using Django and React to classify Amazon product reviews into positive, neutral, and negative sentiments while extracting key keywords.",
      "Utilized spaCy’s pre-built NLP capabilities to implement sentiment analysis and keyword extraction efficiently, simplifying insights for users.",
    ],
    tags: [
      "Python",
      "Django",
      "Django Rest Framework",
      "React",
      "MySQL",
      "spaCy (Pre-built-NLP)",
    ],
    domain: ["AI", "Frontend", "Backend", "Cloud"],
    link: "https://github.com/TechPertz/ReviewAnalyzer",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "TeleManage",
    title: "TeleManage: Automated Customer Transactions and Data Handling Bot",
    description: [
      "Developed a feature-rich Telegram Bot in Python with 7 automated functionalities, managing transactions for 500+ customers and efficiently querying MySQL across 5 relational tables.",
      "Designed and implemented a secure REST API with Django, integrating JWT authentication and role-based access control (3 roles) to ensure data integrity and privilege management",
    ],
    tags: [
      "Django",
      "React",
      "React",
      "Telegram Bot API",
      "REST API",
      "JWT Authentication",
      "Role-Based Access Control",
    ],
    domain: ["Frontend", "Backend", "Cloud"],
    link: "https://github.com/TechPertz/telegram_refund",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
  {
    code: "ravynchat",
    title: "RAVYN Chat: Group Chat Application",
    description: [
      "Developed a Flutter-based group chat application with Firebase, supporting real-time messaging, authentication, and group chat functionality.",
      "Implemented essential features, including image upload, cropping, and user authentication, using Firebase Storage and Cloud Firestore.",
    ],
    tags: ["Flutter", "Firebase", "FireAuth", "Cloud Firestore", "Dart"],
    domain: ["Frontend", "Backend", "Cloud", "DevOps/Infra"],
    link: "https://github.com/yourusername/reetnandy.com",
    isLinkClickable: true,
    linkText: "View on GitHub",
  },
];

export const domains = [
  "Frontend",
  "Backend",
  "AI",
  "Core",
  "Cloud",
  "DevOps/Infra",
  "Web3",
];

export const domainHierarchy: { [key: string]: string[] } = {
  Frontend: ["Frontend"],
  Backend: ["Backend"],
  AI: ["AI"],
  Cloud: ["Cloud"],
  "DevOps/Infra": ["DevOps/Infra"],
  Core: ["Core"],
  "Full Stack": ["Frontend", "Backend"],
  Web3: ["Web3"],
};
