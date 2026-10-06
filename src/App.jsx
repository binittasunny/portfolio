import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Binitta<span>.</span></div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="hello">HELLO, I'M</p>

          <h1>Binitta Sunny</h1>

          <h2>Software Engineer <span>|</span> Web & Mobile Developer</h2>

          <p className="hero-description">
            I build responsive web and mobile applications with modern
            technologies and enjoy creating simple solutions to real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-label">ABOUT ME</p>
        <h2 className="section-title">Who Am I</h2>

        <div className="about-content">
          <div>
            <p>
              I am a software engineer with experience in software development,
              web development and mobile application development.
            </p>

            <p>
              I enjoy building user-friendly applications, working with APIs,
              creating responsive interfaces and learning new technologies.
            </p>

            <p>
              I am currently looking for opportunities where I can contribute
              my technical skills and continue growing as a software developer.
            </p>
          </div>

          <div className="about-card">
            <h3>Education</h3>
            <p><strong>Master of Computer Applications (MCA)</strong></p>
            <p>Computer Applications</p>

            <br />

            <p><strong>Bachelor of Computer Applications (BCA)</strong></p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <p className="section-label">MY SKILLS</p>
        <h2 className="section-title">Technologies I Work With</h2>

        <div className="skills-grid">
          <div className="skill">React</div>
          <div className="skill">React Native</div>
          <div className="skill">JavaScript</div>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">Firebase</div>
          <div className="skill">REST APIs</div>
          <div className="skill">Python</div>
          <div className="skill">Git & GitHub</div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <p className="section-label">EXPERIENCE</p>
        <h2 className="section-title">My Experience</h2>

        <div className="experience-list">

          <div className="experience-card">
            <div className="experience-year">Software Engineering</div>
            <h3>Software / Embedded Engineer</h3>
            <p>
              Experience working in software and embedded development,
              contributing to application functionality and technical solutions.
            </p>
          </div>

          <div className="experience-card">
            <div className="experience-year">Web Development</div>
            <h3>Web Developer</h3>
            <p>
              Worked on web applications and websites, including UI development,
              maintenance and application functionality.
            </p>
          </div>

          <div className="experience-card">
            <div className="experience-year">Internship</div>
            <h3>React Native Developer Intern</h3>
            <p>
              Developed mobile application interfaces and worked with APIs,
              Firebase and React Native components.
            </p>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects-section">
        <p className="section-label">MY WORK</p>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-number">01</div>

            <h3>InKart</h3>

            <p>
              A React Native e-commerce mobile application with user
              authentication, product categories, wishlist functionality
              and Firebase integration.
            </p>

            <div className="project-tech">
              <span>React Native</span>
              <span>Firebase</span>
              <span>JavaScript</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>

            <h3>RuggedBoard UART Communication Interface

</h3>

            <p>
              
              Developed a Linux-based bidirectional UART communication system for 
              the ASD2X RuggedBoard using C.
</p>

            <div className="project-tech">
              <span>c</span>
              <span>Linux</span>
              <span>UART</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>

            <h3>ficcado clothing</h3>

            <p>
             Developed responsive product and checkout interfaces for a 
             clothing e-commerce platform. Implemented an admin-side
              Add Product feature and product management functionality
               while ensuring responsive layouts. 
              
            </p>

            <div className="project-tech">
              <span>spotfy</span>
              <span>JavaScript</span>
              <span>css</span>
        
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <p className="section-label">GET IN TOUCH</p>

        <h2 className="section-title">Let's Work Together</h2>

        <p className="contact-text">
          I'm open to software engineering, web development and mobile
          development opportunities.
        </p>

        <div className="contact-buttons">
          <a href="mailto:your-email@example.com" className="btn primary">
            Email Me
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Binitta Sunny. All Rights Reserved.</p>
      </footer>

    </div>
  )
}

export default App

