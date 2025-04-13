export interface Experience {
  company: string;
  title: string;
  period: string;
  location: string;
  techStack: string[];
  responsibilities: string[];
}

export const experiences = {
    technical: [
      {
        company: "Mobility Intelligence",
        title: "FullStack Development Intern",
        period: "June 2024 – December 2024",
        location: "New York City, USA", 
        techStack: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "Apache Airflow", "Prometheus", "Grafana", "AWS", "Kubernetes"],
        responsibilities: [
          "Built a real-time price prediction system using regression and Kalman filtering, achieving less than 5% error on 90-day forecasts.",
          "Designed a FastAPI backend with Celery and Redis, handling 150k requests daily with 99.9% uptime and sub-500ms P95 latency.",
          "Scheduled Airflow DAGs managing ETL pipelines processing 15M+ daily records from PostgreSQL into analytics-ready stores.",
          "Configured Prometheus + Grafana with SLIs and alerting rules, reduced MTTD by 60% and improved response workflows.",
          "Deployed microservices in AWS using Kubernetes with Helm charts, rolling updates, and horizontal pod autoscaling, reducing downtime during deployments by 80% and enabling seamless CI/CD."
        ]
      },
      {
        company: "Defence Research & Development Organisation",
        title: "Software Engineering Intern (R&D)",
        period: "January 2023 – June 2023",
        location: "India", 
        techStack: ["Python", "Redis", "PostgreSQL", "PostGIS", "LiDAR", "ETL"],
        responsibilities: [
          "Engineered multithreaded architecture for real-time LiDAR processing, handling 50K data points/sec (97% accuracy).",
          "Implemented Redis-based geospatial caching over PostgreSQL/PostGIS, reducing GPS query latency from 1000ms to 150ms.",
          "Developed ETL pipeline using memory-efficient streaming, processing 12GB/min while reducing memory usage by 60%."
        ]
      },
      {
        company: "Solar Industries India Ltd",
        title: "Software Engineering Intern",
        period: "April 2022 – December 2022",
        location: "India", 
        techStack: ["Django", "Kafka", "Redis", "Cassandra", "Jaeger"],
        responsibilities: [
          "Led a team of 5 to automate workflows, delivering 5 Django microservices that standardized 80% of manual processes.",
          "Reduced API latency by 25% and integrated distributed tracing with Jaeger, enabling real-time debugging.",
          "Designed a partitioned Kafka pipeline with scalable consumer groups, processing 2.5M+ rows/sec using Redis caching and Cassandra-backed storage."
        ]
      },
      {
        company: "Full Stack / AI Developer",
        title: "Freelancer / Contract Jobs",
        period: "January 2022 - June 2022",
        location: "Remote",
        techStack: ["Python", "Django", "ReactJS", "PostgreSQL", "DigitalOcean", "VPS"],
        responsibilities: [
          "Developed full-stack applications for 3 US clients, including a web scraping toolkit, CRM dashboard, sentiment analysis on consumer data, e-commerce platform, and a chat-based ticketing system with an automated refund approval microservice integrated with a payment gateway.",
          "Deployed all projects on DigitalOcean Droplets (VPS), consistently completing them 1 week ahead of deadlines and achieving 100% client satisfaction."
        ]
        },
      {
        company: "Technical Intern (Data)",
        title: "Universidad De Ibague",
        period: "July 2020 - October 2020",
        location: "Ibague, Colombia", 
        techStack: ["Python", "ArcGIS", "Pandas", "NumPy"],
        responsibilities: [
          "Optimized Python algorithms, reducing processing time for 100K entries from 19 seconds to 6 seconds through algorithmic optimization and complexity analysis.",
          "Improved drought index accuracy by 10% and and streamlined geospatial data workflows using ArcGIS for analysis."
        ]
      },
      {
        company: "Software Engineering Intern",
        title: "Shiva Systems and Technologies Pvt Ltd",
        period: "May 2020 - June 2020",
        location: "Mumbai, India", 
        techStack: ["Python", "BeautifulSoup", "Pandas", "NumPy"],
        responsibilities: [
          "Developed Python scripts to scrape and generate 10 years of historical data (200K entries across 8 fields), automating a previously manual process.",
          "Streamlined data processing workflows, reducing overall processing time by 60%, enabling faster analytics and decision-making."
        ],
      }
    ]
  }