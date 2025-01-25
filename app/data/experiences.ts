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
        company: "Stealth AI Startup",
        title: "Backend Developer Intern (AI)",
        period: "June 2024 - December 2024",
        location: "New York City, USA", 
        techStack: ["Python", "SQL", "Apache Airflow", "Flask"],
        responsibilities: [
          "Developed a Django-ReactJS platform integrating ML models, delivering real-time predictions with sub-1 second latency through optimized APIs.",
          "Engineered ETL pipelines with Apache Airflow, processing 15M+ records daily and automating transformations, saving 3 man hours per dataset.",
          "Built regression models for price prediction, using TimeSeriesSplit and advanced tuning to reduce errors within ±5% over a 90-day horizon.",
          "Optimized PostgreSQL queries to support frequent API calls and large-scale workflows, improving data retrieval efficiency."
        ]
      },
      {
        company: "Defence Research & Development Organisation (Govt. of India)",
        title: "Software Engineering Intern (R&D)",
        period: "January 2023 - June 2023",
        location: "Chandigarh, India", 
        techStack: ["Python", "Shell", "PyQT", "MatPlotLib", "SerialPy", "SQL", "Docker"],
        responsibilities: [
          "Advised the Assistant Director on a project to estimate heavy vehicle integrity using LiDAR and GPS sensors, selected as the sole contributor out of 20+ interns.",
          "Designed and developed a Python desktop application to reverse-engineer RS232 serial ports, decoding 1.5M+ bytes/sec from LiDAR sensors and applying 25+ custom algorithms for rut measurement analysis and visualization.",
          "Published a Windows desktop application with 20K+ lines of code optimized to remain under 30MB, ensuring portability and performance in resource-constrained environments."
        ]
      },
      {
        company: "Solar Industries India Ltd",
        title: "Software Engineering Intern (Backend)",
        period: "April 2022 - December 2022",
        location: "Mumbai, India", 
        techStack: ["Django", "FastAPI", "AWS", "Docker", "Jenkins", "Kafka", "Redis", "Elasticsearch"],
        responsibilities: [
          "Led a team of 5 interns to automate workflows across 25+ industrial plants, delivering 5 Python-based projects with 75K+ lines of code, deployed using Docker and orchestrated with Kubernetes.",
          "Engineered scalable backend systems processing 100K+ API requests/day and 2.5M+ rows/sec, ensuring fault-tolerance with Cassandra replication, Kafka partitioning, and caching with Redis.",
          "Optimized infrastructure by implementing Kubernetes orchestration, distributed CRON jobs, and caching layers, reducing API response times by 25% and monitored system health with Prometheus."
        ]
      }, 
      {
        company: "Freelancer / Contract Jobs",
        title: "Full Stack / AI Developer",
        period: "January 2022 - June 2022",
        location: "Chennai, India",
        techStack: ["Linux", "C", "C++", "Python"],
        responsibilities: [
          "Developed full-stack applications for 3 US clients, including a web scraping toolkit, CRM dashboard, sentiment analysis on consumer data, e-commerce platform, and a chat-based ticketing system with an automated refund approval microservice integrated with a payment gateway.",
          "Deployed all projects on DigitalOcean Droplets (VPS), consistently completing them 1 week ahead of deadlines and achieving 100% client satisfaction."
        ]
        },
      {
        company: "Universidad De Ibague",
        title: "Technical Intern (Data Science)",
        period: "July 2020 - October 2020",
        location: "Ibague, Colombia", 
        techStack: ["Java", "C++", "Python"],
        responsibilities: [
          "Assisted 100+ students in understanding complex data structures and algorithms, leading weekly lab sessions and grading assignments and exams",
          "Conducted 1-on-1 tutoring sessions for students struggling with concepts, resulting in a 20% increase in average quiz scores"
        ]
      },
      {
        company: "Shiva Systems and Technologies Pvt Ltd",
        title: "Software Engineering Intern",
        period: "May 2020 - June 2020",
        location: "Mumbai, India", 
        techStack: ["Linux", "C", "C++", "Python"],
        responsibilities: [
          "Guided 50+ students in understanding the core concepts of operating systems, conducting weekly lab sessions and grading assignments and exams",
          "Hosted 1-on-1 tutoring sessions for students facing difficulties in understanding system calls and process management, resulting in a 15% increase in average quiz scores"
        ],
      }
    ]
  }