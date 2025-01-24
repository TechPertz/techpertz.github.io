'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from './components/Header'
import NewsScroll from './components/NewsScroll'
import Skills from './components/Skills'
import PopUp from './components/PopUp'
import Footer from './components/Footer'

// Define project and experience types
interface Project {
  id: string;
  code: string;
  title: string;
  description: string;
  tags: string[];
  domain: string;
  link: string;
}

interface Experience {
  company: string;
  title: string;
  period: string;
  location: string; // Add location field
  techStack: string[];
  responsibilities: string[];
}

const projects: Project[] = [
  { 
    id: 'LLM',
    code: 'LLM',
    title: 'AI Agent that reads all your emails and updates your calendar',
    description: 'Developed an open-source app that reads communication from gmail, slack, trello and automatically updates your calendar.',
    tags: ['Python', 'Flask', 'Postgres', 'ReactJs'],
    domain: 'AI',
    link: 'https://github.com/yourusername/LLM-application'
  },
  {
    id: 'IO',
    code: 'IO',
    title: 'Performance Optimization and Analysis of Disk I/O in a Real Linux Environment',
    description: 'Achieved a 500% enhancement in cached reads and a 150% boost in non-cached reads, elevating read speeds from the local setup of 2500 MiB/s to 15000 MiB/s on a block size of 65536 bytes.',
    tags: ['C++', 'Linux', 'Shell', 'Git'],
    domain: 'Backend',
    link: 'https://github.com/yourusername/Disk-IO-Optimization'
  },
  {
    id: 'FAD',
    code: 'FAD',
    title: 'Fitness Analytics Dashboard',
    description: 'Architected AWS services to host a Flask application on EC2 providing seamless integration with Google Fit metrics.',
    tags: ['Python', 'Django', 'Postgres', 'DynamoDB', 'EC2', 'Sagemaker', 'SNS', 'SQS', 'ReactJs'],
    domain: 'Full Stack',
    link: 'https://github.com/yourusername/Fitness-Analytics-Dashboard'
  },
  // Dummy projects
  {
    id: 'DP1',
    code: 'DP1',
    title: 'Dummy Project 1',
    description: 'This is a dummy project for testing purposes.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    domain: 'Frontend',
    link: 'https://github.com/yourusername/dummy-project-1'
  },
  {
    id: 'DP2',
    code: 'DP2',
    title: 'Dummy Project 2',
    description: 'This is another dummy project for testing purposes.',
    tags: ['Python', 'Django'],
    domain: 'Backend',
    link: 'https://github.com/yourusername/dummy-project-2'
  },
  {
    id: 'DP3',
    code: 'DP3',
    title: 'Dummy Project 3',
    description: 'This is yet another dummy project for testing purposes.',
    tags: ['React', 'Node.js'],
    domain: 'Full Stack',
    link: 'https://github.com/yourusername/dummy-project-3'
  },
  {
    id: 'DP4',
    code: 'DP4',
    title: 'Dummy Project 4',
    description: 'This is a dummy project for testing purposes.',
    tags: ['AWS', 'Docker'],
    domain: 'Cloud',
    link: 'https://github.com/yourusername/dummy-project-4'
  },
  {
    id: 'DP5',
    code: 'DP5',
    title: 'Dummy Project 5',
    description: 'This is another dummy project for testing purposes.',
    tags: ['Kubernetes', 'CI/CD'],
    domain: 'DevOps',
    link: 'https://github.com/yourusername/dummy-project-5'
  },
  {
    id: 'DP6',
    code: 'DP6',
    title: 'Dummy Project 6',
    description: 'This is yet another dummy project for testing purposes.',
    tags: ['Machine Learning', 'Python'],
    domain: 'AI',
    link: 'https://github.com/yourusername/dummy-project-6'
  },
  {
    id: 'DP7',
    code: 'DP7',
    title: 'Dummy Project 7',
    description: 'This is a dummy project for testing purposes.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    domain: 'Frontend',
    link: 'https://github.com/yourusername/dummy-project-7'
  },
  {
    id: 'DP8',
    code: 'DP8',
    title: 'Dummy Project 8',
    description: 'This is another dummy project for testing purposes.',
    tags: ['Python', 'Django'],
    domain: 'Backend',
    link: 'https://github.com/yourusername/dummy-project-8'
  },
  {
    id: 'DP9',
    code: 'DP9',
    title: 'Dummy Project 9',
    description: 'This is yet another dummy project for testing purposes.',
    tags: ['React', 'Node.js'],
    domain: 'Full Stack',
    link: 'https://github.com/yourusername/dummy-project-9'
  },
  {
    id: 'DP10',
    code: 'DP10',
    title: 'Dummy Project 10',
    description: 'This is a dummy project for testing purposes.',
    tags: ['AWS', 'Docker'],
    domain: 'Cloud',
    link: 'https://github.com/yourusername/dummy-project-10'
  }
]

const experiences = {
  technical: [
    {
      company: "Stealth AI Startup",
      title: "Backend Developer Intern (AI)",
      period: "June 2024 - Present",
      location: "New York, NY", 
      techStack: ["Python", "SQL", "Apache Airflow", "Flask"],
      responsibilities: [
        "Designed Python/SQL ETL pipelines with Apache Airflow, boosting data ingestion speed by 30% and ensuring reliability with automated validation",
        "Built RESTful APIs using Flask and joblib to deploy machine learning models, improving real-time phone price predictions and application responsiveness by 25%",
        "Deployed a Regression model, enhancing price prediction accuracy by 15% through advanced feature engineering and hyperparameter tuning"
      ]
    },
    {
      company: "Defence Research & Development Organisation (Govt. of India)",
      title: "Software Engineering Intern (R&D)",
      period: "January 2023 - June 2023",
      location: "Chandigarh, India", 
      techStack: ["Python", "Shell", "PyQT", "MatPlotLib", "SerialPy", "SQL", "Docker"],
      responsibilities: [
        "Advised the Assistant Director of the Lab as the sole selected intern from a team of 20+, leading a project on heavy vehicle integrity estimation using LIDAR and GPS sensors",
        "Architected and published a Python desktop application under 30MB to reverse engineer RS232 serial ports, decoding 1.5M+ bytes/second from LiDAR sensors and applying 25+ algorithms to analyze and visualize rut measurements"
      ]
    },
    {
      company: "Solar Industries India Ltd",
      title: "Software Engineering Intern (Backend)",
      period: "April 2022 - December 2022",
      location: "Mumbai, India", 
      techStack: ["Django", "FastAPI", "AWS", "Docker", "Jenkins", "Kafka", "Redis", "Elasticsearch"],
      responsibilities: [
        "Led a team of 5 interns to automate manual tasks across 25+ industrial plants, introducing 5 Python-based projects and deploying 75,000+ lines of production code",
        "Optimized systems with 5 cross-functional teams to handle 100,000+ API requests across 20 endpoints, executing CRON operations on 2.5M rows/day within 1 sec using Cassandra, Kafka, and Postgres"
      ]
    }, 
    {
      company: "Univesidad De Ibague",
      title: "Technical Intern (Data Science)",
      period: "July 2020 - October 2020",
      location: "Chennai, India", 
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
    },
      {
      company: "Freelancer / Contract Jobs",
      title: "Full Stack AI Developer",
      period: "January 2021 - June 2021",
      location: "Chennai, India",
      techStack: ["Linux", "C", "C++", "Python"],
      responsibilities: [
        "Guided 50+ students in understanding the core concepts of operating systems, conducting weekly lab sessions and grading assignments and exams",
        "Hosted 1-on-1 tutoring sessions for students facing difficulties in understanding system calls and process management, resulting in a 15% increase in average"
      ]
      }
  ]
}

const domains = ['Frontend', 'Backend', 'AI', 'Full Stack', 'Cloud/DevOps', 'Full Stack']

const domainHierarchy: { [key: string]: string[] } = {
  'Frontend': ['Frontend', 'Full Stack'],
  'Backend': ['Backend', 'Full Stack'],
  'AI': ['AI'],
  'Cloud/DevOps': ['Cloud/DevOps'],
  'Full Stack': ['Full Stack'],
}

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('')
  const homeRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const resumeRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)

  const [selectedDomains, setSelectedDomains] = useState<string[]>([])
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(5)

  const filteredProjects = selectedDomains.length > 0
    ? projects.filter(project => selectedDomains.some(domain => domainHierarchy[domain].includes(project.domain)))
    : projects

  const showPopUp = false //  pop-up

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Extract the section name without the '#' and set it as active
            setActiveSection(entry.target.id)
          }
        })
      },
      { 
        rootMargin: '-80px 0px -20% 0px', // Adjust rootMargin to account for header
        threshold: 0.2 // Lower threshold for better detection
      }
    )

    const refs = [homeRef, aboutRef, skillsRef, experienceRef, projectsRef, resumeRef]
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const path = window.location.pathname.replace('/', '')
    if (path) {
      const element = document.getElementById(path)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })

        // Update URL with hash
        window.history.pushState(null, '', `/#${path}`)
      }
    }
  }, [])

  const handleShowMore = () => {
    setVisibleProjectsCount(prevCount => prevCount + 5)
  }

  const handleShowLess = () => {
    setVisibleProjectsCount(5)
  }

  const handleClearFilter = () => {
    setSelectedDomains([])
    setVisibleProjectsCount(5)
  }

  const visibleProjects = filteredProjects.slice(0, visibleProjectsCount)

  return (
    <>
      <Header activeSection={activeSection} />
      <PopUp showPopUp={showPopUp} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <section id="home" ref={homeRef} className="min-h-screen flex flex-col justify-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold dark:text-white">Reet Nandy, MS</h1>
            <h2 className="text-2xl md:text-3xl font-semibold dark:text-gray-300">Software + AI</h2>
            <p className="text-md text-gray-500 dark:text-gray-400">
              <Link href="/secret-page" className="text-blue-500 hover:underline">
                Interested to see how I look? Click here :)
              </Link>
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
              I love to solve problems. <br /> 
              FullStack? AI? Core/Infra?<br /> I'm in! I Learn. I Implement.<br />
              <Link href="#skills" className="text-blue-500 hover:underline">
                All my Technical Skills: Here.
              </Link><br /><br />
              <b>Currently</b>, looking for <u>SDE/AI</u> Spring '25 internship and May'25 full-time opportunities. <br />
              <br /><b>Prev</b>, building AI Pricing Engine @ Mobility Intelligence, NYC. <br /><br />
              <a href="mailto:reet.nandy@nyu.edu" className="text-blue-500 hover:underline">
                reet.nandy@nyu.edu
              </a>
              {' | '}
              <a href="tel:+15189306116" className="text-blue-500 hover:underline">
                +1 518-930-6116
              </a>
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { href: "https://github.com/techpertz", label: "GitHub" },
                { href: "https://linkedin.com/in/reetnandy", label: "LinkedIn" },
                { href: "https://x.com/reetnandy", label: "X/Twitter" },
                { href: "/ReetNandy_SWE_Resume.pdf", label: "Resume" } // Added Resume button
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-6 py-3 rounded-corners neu-button text-sm dark:bg-gray-700 dark:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <NewsScroll />
          </div>
        </section>

        <section id="about" ref={aboutRef} className="py-12">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="neu-card p-4 rounded-corners">
                <Image
                  src="/Reet.png?height=300&width=300"
                  alt="Reet Nandy"
                  width={300}
                  height={300}
                  className="rounded-corners"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="mb-4">
                Hi, I'm Reet Nandy, a Software Engineer with 2+ years of internship experience in <span className="highlight">cloud-native development</span>, <span className="highlight">DevOps</span>, and <span className="highlight">AI/ML</span>. Skilled in building scalable backend infrastructure and high-performance systems, and developing and deploying machine learning models. Focused on leveraging distributed systems to enhance scalability and efficiency, while staying updated with emerging trends in AI and automation.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Expertise in back-end development with Python and Node.js</li>
                <li>Strong front-end skills with React and Next.js</li>
                <li>Experience with database technologies like PostgreSQL and MongoDB</li>
                <li>Proficient in cloud platforms such as AWS and Google Cloud</li>
                <li>Advocate for clean code and best practices in software development</li>
              </ul>
              <div className="mt-6">
                <h3 className="text-xl mb-2 font-bold underline">Education</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>M.S. in Computer Science, New York University (Expected 2025)</li>
                  <li>B.Tech in Computer Science and Engineering, SRM Institute of Science and Technology (2023)</li>
                </ul>
                <p className="mt-2 "><strong className='underline'>Key Courses:</strong> Advanced Algorithms, Machine Learning, Distributed Systems, Big Data</p>
                <p className="mt-2"><strong className='underline'>Teaching Assistant:</strong> Data Structures (Fall 2024), Operating Systems (Spring 2024)</p>
              </div>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book.
              </p>
              <p className="mt-4">
                <Link href="/ReetNandy_SWE_Resume.pdf" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  View My Resume (PDF)
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section id="skills" ref={skillsRef} className="py-12">
          <Skills />
        </section>

        <section id="experience" ref={experienceRef} className="py-12">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Experience</h2>
          <div className="space-y-8">
            {experiences.technical.map((exp, index) => (
              <div key={index} className="neu-card p-6 dark:bg-gray-800">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-semibold dark:text-white">{exp.company}</h3><br />
                  <p className="text-lg text-gray-600 dark:text-white">{exp.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p> {/* Display location */}
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 dark:text-white">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-corners neu-button dark:bg-gray-700 dark:text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2 dark:text-white">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 dark:text-gray-300">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" ref={projectsRef} className="py-12">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Projects</h2>
          <p className="mb-4 dark:text-gray-300">
            Showing {visibleProjects.length} of {filteredProjects.length} projects
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {domains.map(domain => (
              <button
                key={domain}
                onClick={() => setSelectedDomains(prev => 
                  prev.includes(domain) ? prev.filter(d => d !== domain) : [...prev, domain]
                )}
                className={`px-4 py-2 rounded-lg text-sm flex items-center gap-2 ${
                  selectedDomains.includes(domain) 
                    ? 'neu-button shadow-inner dark:bg-gray-600' 
                    : 'neu-button dark:bg-gray-700'
                }`}
              >
                {domain}
                {selectedDomains.includes(domain) && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            ))}
            {selectedDomains.length > 0 && (
              <button
                onClick={handleClearFilter}
                className="px-4 py-2 rounded-lg text-sm neu-button dark:bg-gray-700 ml-4"
              >
                Clear Filter
              </button>
            )}
          </div>
          <div className="space-y-8">
            {visibleProjects.map((project, index) => (
              <div 
                key={project.code} 
                className={`neu-card p-6 rounded-corners dark:bg-gray-700 dark:text-white ${index === 0 ? 'border-2 border-blue-500 dark:border-blue-400' : ''}`}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-lg font-medium mb-1">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    className="px-3 py-1 mt-2 md:mt-0 rounded-corners neu-button text-sm dark:bg-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </div>
                <p className="mb-2">{project.description}</p>
                <div className="mb-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            {visibleProjectsCount < filteredProjects.length && (
              <button
                onClick={handleShowMore}
                className="px-6 py-3 rounded-corners neu-button text-sm dark:bg-gray-700 dark:text-white"
              >
                Show More
              </button>
            )}
            {visibleProjectsCount > 5 && (
              <button
                onClick={handleShowLess}
                className="px-6 py-3 rounded-corners neu-button text-sm dark:bg-gray-700 dark:text-white ml-4"
              >
                Show Less
              </button>
            )}
          </div>
        </section>

        <section id="resume" ref={resumeRef} className="py-12">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Resume</h2>
          <p className="mb-4 dark:text-gray-300">Click the button below to view my full resume:</p>
          <Link 
            href="/ReetNandy_SWE_Resume.pdf" 
            className="inline-block px-6 py-3 rounded-corners neu-button text-sm dark:bg-gray-700 dark:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume (PDF)
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}

