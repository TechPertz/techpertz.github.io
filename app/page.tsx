'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from './components/Header'
import NewsScroll from './components/NewsScroll'
import Skills from './components/Skills'
import PopUp from './components/PopUp'
import Footer from './components/Footer'

const projects = [
  { 
    id: 'LLM',
    code: 'LLM',
    title: 'AI Agent that reads all your emails and updates your calendar',
    description: 'Developed an open-source app that reads communication from gmail, slack, trello and automatically updates your calendar.',
    tags: ['Python', 'Flask', 'Postgres', 'ReactJs'],
    link: 'https://github.com/yourusername/LLM-application'
  },
  {
    id: 'IO',
    code: 'IO',
    title: 'Performance Optimization and Analysis of Disk I/O in a Real Linux Environment',
    description: 'Achieved a 500% enhancement in cached reads and a 150% boost in non-cached reads, elevating read speeds from the local setup of 2500 MiB/s to 15000 MiB/s on a block size of 65536 bytes.',
    tags: ['C++', 'Linux', 'Shell', 'Git'],
    link: 'https://github.com/yourusername/Disk-IO-Optimization'
  },
  {
    id: 'FAD',
    code: 'FAD',
    title: 'Fitness Analytics Dashboard',
    description: 'Architected AWS services to host a Flask application on EC2 providing seamless integration with Google Fit metrics.',
    tags: ['Python', 'Django', 'Postgres', 'DynamoDB', 'EC2', 'Sagemaker', 'SNS', 'SQS', 'ReactJs'],
    link: 'https://github.com/yourusername/Fitness-Analytics-Dashboard'
  }
]

const experiences = {
  technical: [
    {
      company: "Mobility Intelligence",
      title: "Backend Developer Intern (AI)",
      period: "June 2024 - Present",
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
      techStack: ["Django", "FastAPI", "AWS", "Docker", "Jenkins", "Kafka", "Redis", "Elasticsearch"],
      responsibilities: [
        "Led a team of 5 interns to automate manual tasks across 25+ industrial plants, introducing 5 Python-based projects and deploying 75,000+ lines of production code",
        "Optimized systems with 5 cross-functional teams to handle 100,000+ API requests across 20 endpoints, executing CRON operations on 2.5M rows/day within 1 sec using Cassandra, Kafka, and Postgres"
      ]
    }
  ]
}

const updates = [
  { id: 1, date: '2023-07-15', title: 'Started learning Rust', content: 'Began exploring Rust programming language to expand my systems programming skills.' },
  { id: 2, date: '2023-07-10', title: 'Completed advanced React course', content: 'Finished an advanced React course on Frontend Masters, covering topics like performance optimization and advanced hooks.' },
  { id: 3, date: '2023-07-05', title: 'Published blog on React Performance', content: 'Wrote and published a comprehensive blog post on "Optimizing React Performance" on my personal blog.' },
  { id: 4, date: '2023-07-01', title: 'Contributed to open-source project', content: 'Made my first significant contribution to a popular open-source React library, implementing a new feature.' },
  { id: 5, date: '2023-06-28', title: 'Attended tech conference', content: 'Participated in a major tech conference, attending workshops on emerging technologies and networking with industry professionals.' },
]

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('')
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const resumeRef = useRef(null)
  const skillsRef = useRef(null)

  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)))

  const filteredProjects = selectedTags.length > 0
    ? projects.filter(project => selectedTags.some(tag => project.tags.includes(tag)))
    : projects

  const showPopUp = true //  pop-up

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    const refs = [homeRef, aboutRef, skillsRef, experienceRef, projectsRef, resumeRef]
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header activeSection={activeSection} />
      <PopUp showPopUp={showPopUp} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <section id="home" ref={homeRef} className="min-h-screen flex flex-col justify-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold dark:text-white">Reet Nandy</h1>
            <h2 className="text-2xl md:text-3xl font-semibold dark:text-gray-300">SDE + AI</h2>
            <p className="text-md text-gray-500 dark:text-gray-400">
              <Link href="/secret-page" className="hover:underline">
                Interested to see how I look? Click here :)
              </Link>
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
              I see a problem. I code to solve it. <br /> FullStack? Core/Infra? AI? <br /> I'm in! I Learn. I Implement.<br />
              <Link href="#skills" className="text-blue-500 hover:underline">
                All my Technical Skills: Here.
              </Link><br /><br />
              <b>Currently</b>, looking for <u>SDE/AI</u> Spring '25 internship and May'25 full-time opportunities. <br />
              <b>Prev</b>, building Pricing Engine @ Mobility Intelligence, NYC. <br /><br />
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
                Hi, I'm Reet Nandy, a Software Engineer with 2+ years of internship experience in cloud-native development, DevOps, and AI/ML. Skilled in building scalable backend infrastructure and high-performance systems, and developing and deploying machine learning models. Focused on leveraging distributed systems to enhance scalability and efficiency, while staying updated with emerging trends in AI and automation.
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
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold dark:text-white">{exp.company}</h3><br />
                    <p className="text-lg text-gray-600 dark:text-white">{exp.title}</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
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
          <div className="flex flex-wrap gap-2 mb-8">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTags(prev => 
                  prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
                )}
                className={`px-4 py-2 rounded-lg text-sm ${
                  selectedTags.includes(tag) 
                    ? 'neu-button shadow-inner dark:bg-gray-600' 
                    : 'neu-button dark:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="space-y-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.code} 
                className={`neu-card p-6 rounded-corners dark:bg-gray-700 dark:text-white ${index === 0 ? 'border-2 border-blue-500 dark:border-blue-400' : ''}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium mb-1">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    className="px-3 py-1 rounded-corners neu-button text-sm dark:bg-gray-600"
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

