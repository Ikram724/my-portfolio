import styles from './Projects.module.css';
import Image from 'next/image';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A high-performance online store built with Next.js and Stripe integration.",
    image: "/project2.png",
    tags: ["Next.js", "React", "Stripe", "TailwindCSS","MongoDB"],
    link: "#"
  },
  {
    title: "Real-Estate Listings",
    description: "A real-estate listings platform built with React.js and TailwindCSS integration.",
    image: "/project3.png",
    tags: ["React", "TailwindCSS", "Firebase", "ExpressJS", "MongoDB"],
    link: "https://react-real-estate-ca9a9.web.app/"
  },
  {
    title: "AI Study Companion",
    description: "An AI-powered assistant for helping students with their studies.",
    image: "/project1.png",
    tags: ["ReactJS", "ExpressJS", "HTML","MongoDB", "Ollama", "TailwindCSS"],
    link: "https://ai-study-companion-tq0z.onrender.com/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.header}>
        <h2 className={styles.title}>Selected Projects</h2>
        <p className={styles.subtitle}>A collection of my recent work and personal projects.</p>
      </div>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.tags}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <a href={project.link} className={styles.link}>
                View Project 
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
