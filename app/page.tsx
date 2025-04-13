'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from './components/Header'
import NewsScroll from './components/NewsScroll'
import Skills from './components/Skills'
import PopUp from './components/PopUp'
import Footer from './components/Footer'
import { Project, projects, domains, domainHierarchy } from './data/projects'
import { Experience, experiences } from './data/experiences'
import FormattedText from './components/FormattedText'

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
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [visibleExperiencesCount, setVisibleExperiencesCount] = useState(3)
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)

  const filteredProjects = selectedDomains.length > 0
    ? projects.filter(project => 
        project.domain.some(projectDomain => 
          selectedDomains.includes(projectDomain)
        )
      )
    : projects

  const showPopUp = false

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { 
        rootMargin: '-80px 0px -20% 0px',
        threshold: 0.2
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

  const handleShowMoreExperiences = () => {
    setVisibleExperiencesCount(experiences.technical.length)
  }

  const handleShowLessExperiences = () => {
    setVisibleExperiencesCount(3)
  }

  const toggleExperience = (index: number) => {
    setExpandedExperience(prev => prev === index ? null : index)
  }

  const toggleProject = (index: number) => {
    setExpandedProject(prev => prev === index ? null : index)
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    const elementId = path.replace('/#', '')
    const element = document.getElementById(elementId)

    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      window.history.pushState(null, '', path)
    }
  }

  const visibleProjects = filteredProjects.slice(0, visibleProjectsCount)
  const visibleExperiences = experiences.technical.slice(0, visibleExperiencesCount)

  return (
    <>
      <Header activeSection={activeSection} />
      <PopUp showPopUp={showPopUp} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <section id="home" ref={homeRef} className="min-h-screen flex flex-col justify-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold dark:text-white">Reet Nandy, M.S.</h1>
            <h2 className="text-2xl md:text-3xl font-semibold dark:text-gray-300">Software + AI Engineer</h2>
            <p className="text-md text-gray-500 dark:text-gray-400">
              <Link href="/secret-page" className="text-blue-500 hover:underline">
                Interested to see how I look? Click here :)
              </Link>
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
              I believe in solving problems <span className="highlight">at scale</span>. <br /> 
              FullStack? AI? Core/Infra?<br /> I'm in! I Learn. I Implement.<br />
              <Link href="#about" className="text-blue-500 hover:underline">
                Know more About Me and My Skills.
              </Link><br /><br />
              <b>Currently</b>, looking for SWE/AI May'25 full-time opportunities. <br />
              <br /><b>Prev</b>, building Pricing Engine @ Mobility Intel, NYC. <br /><br />
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
                { href: "/#resume", label: "Resume", isInternal: true }
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-6 py-3 rounded-corners neu-button text-sm dark:bg-gray-700 dark:text-white"
                  onClick={link.isInternal ? (e) => handleSmoothScroll(e, link.href) : undefined}
                  target={!link.isInternal ? "_blank" : undefined}
                  rel={!link.isInternal ? "noopener noreferrer" : undefined}
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
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="neu-card p-4 rounded-corners w-fit h-fit mx-auto">
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
              Hi, I'm Reet Nandy, a Software + AI Engineer with <strong>3 years</strong> of experience across 6 internships specializing in <span className="highlight">Full Stack Development</span>, <span className="highlight">Cloud/DevOps infrastructure</span>, and <span className="highlight">AI/ML solutions</span>. My expertise revolves around building scalable, cloud-native applications within distributed systems, optimizing performance, and developing and deploying AI models.
              <br /><br />
              <strong>In the realm of AI</strong>, I specialize in working with traditional machine learning techniques to <span className="highlight">Large Language Models (LLMs)</span>, with a focus on building intelligent systems and optimizing end-to-end workflows.
              </p>
              <ul className="list-disc custom-list space-y-2 mb-4">
                <li>Currently working on LLMs and RAG, focusing on multi-agent orchestration and advanced model pipelines.</li>
                <li>Expertise in systems programming with C++, and backend development using Python (Django, Flask, FastAPI), Java (Spring Boot), and Node.js.</li>
                <li>Strong front-end skills with Next.js, React.js, and Tailwind CSS.</li>
                <li>Skilled in Relational, NoSQL, and caching technologies, along with vector databases.</li>
                <li>Proficient in AWS with experience in containerization, orchestration, CI/CD pipelines, and implementing robust monitoring and alerting systems.</li>
              </ul>
              <div className="mt-6">
                <h3 className="text-xl mb-2 font-bold underline">Education</h3>
                <ul className="list-disc custom-list space-y-2">
                  <li>M.S. in Computer Science, <strong>New York University</strong> (Expected May 2025)</li>
                  <li>B.Tech in Computer Science and Engineering, Manipal University Jaipur</li>
                </ul>
                <p className="mt-2 "><strong className='underline'>Key Courses:</strong> Analysis of Algorithms, Operating Systems, Machine Learning, Cloud Computing, Big Data</p>
                <p className="mt-2"><strong className='underline'>Teaching Assistant:</strong> Algorithms (Fall 2024, Spring 2025), Operating Systems (Fall 2024)</p>
              </div>
              <br />
              <p>
                If not a Coder, I would probably be a <span className="highlight">CHEF</span>. I love cooking and I am great at it :)
              </p>
              <p className="mt-4">
                <Link href="/ReetNandy_Resume.pdf" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
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
            {visibleExperiences.map((exp, index) => (
              <div 
                key={index} 
                onClick={() => toggleExperience(index)}
                className="neu-card p-6 dark:bg-gray-800 cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02]"
              >
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-semibold dark:text-white">{exp.company}</h3><br />
                  <p className="text-lg text-gray-600 dark:text-white">{exp.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
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
                <div className="text-blue-500 hover:underline dark:text-blue-400 mt-2">
                  {expandedExperience === index ? "Click to show less" : "Click to expand and know more"}
                </div>
                <div 
                  className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedExperience === index 
                      ? 'max-h-[1000px] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <h4 className="text-sm font-semibold mb-2 dark:text-white">Key Responsibilities:</h4>
                  <ul className="list-disc custom-list space-y-2 dark:text-gray-100">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-base">
                        <FormattedText text={resp} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="mb-4 dark:text-gray-300">
              Showing {visibleExperiences.length} of {experiences.technical.length} internships
            </p>
            {visibleExperiencesCount < experiences.technical.length && (
              <button
                onClick={handleShowMoreExperiences}
                className="px-6 py-3 rounded-corners neu-button text-sm dark:bg-gray-700 dark:text-white"
              >
                Show More
              </button>
            )}
            {visibleExperiencesCount > 4 && (
              <button
                onClick={handleShowLessExperiences}
                className="px-6 py-3 rounded-corners neu-button text-sm dark:bg-gray-700 dark:text-white ml-4"
              >
                Show Less
              </button>
            )}
          </div>
        </section>

        <section id="projects" ref={projectsRef} className="py-12">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Projects</h2>
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
                key={index} 
                onClick={() => toggleProject(index)}
                className={`neu-card p-6 rounded-corners dark:bg-gray-800 dark:text-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] ${
                  index === 0 ? 'border-2 border-blue-500 dark:border-blue-400' : ''
                }`}
              >
                <div className="flex flex-col mb-4">
                  <h3 className="text-lg font-medium mb-3">
                    {project.title}
                  </h3>
                  <div>
                    {project.isLinkClickable ? (
                      <a
                        href={project.link}
                        className="inline-block px-3 py-1 rounded-corners neu-button text-sm dark:bg-gray-600"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} // Prevent card click when clicking link
                      >
                        {project.linkText}
                      </a>
                    ) : (
                      <button
                        className="inline-block px-3 py-1 rounded-corners neu-button text-sm dark:bg-gray-600"
                        disabled
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.linkText}
                      </button>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-blue-500 hover:underline dark:text-blue-400 mt-2">
                  {expandedProject === index ? "Click to show less" : "Click to expand and know more"}
                </div>
                <div 
                  className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedProject === index 
                      ? 'max-h-[1000px] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="list-disc custom-list mb-2">
                    {project.description.map((desc, i) => (
                      <li key={i}>
                        <FormattedText text={desc} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="mb-4 dark:text-gray-300">
              Showing {visibleProjects.length} of {filteredProjects.length} projects
            </p>
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
          <p className="mb-4 dark:text-gray-300">Download my Resume Here: <span className="highlight">Software + AI Engineer</span></p>
          <Link 
            href="/ReetNandy_Resume.pdf" 
            className="inline-block px-6 py-3 rounded-corners neu-button text-sm dark:bg-gray-700 dark:text-white mb-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            View PDF
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}

