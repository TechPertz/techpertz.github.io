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
        company: "Backend Developer Intern (AI/ML)",
title: "Mobility Intelligence Inc",
        period: "June 2024 - December 2024",
        location: "New York City, USA", 
        techStack: ["Python", "SQL", "Apache Airflow", "Flask"],
        responsibilities: [
          "Developed a <b>Django-ReactJS</b> platform integrating ML models, delivering real-time predictions with <b>sub-1 second latency</b> through optimized APIs.",
          "Implemented regression models for custom price prediction over a 90-day horizon, leveraging TimeSeriesSplit and hyperparameter optimization to reduce errors within +/- 5%.",
          "Engineered <b>ETL pipelines</b> with Apache Airflow, processing <b>15M+ records daily</b> and automating transformations, saving 3 man hours per dataset.",
          "Optimized PostgreSQL queries to support frequent API calls and large-scale workflows, improving data retrieval efficiency."
        ]
      },
      {
        company: "Software Engineering Intern (R&D)",
        title: "Defence Research & Development Organisation (Govt. of India)",
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
        company: "Software Engineering Intern (Backend)",
        title: "Solar Industries India Ltd",
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