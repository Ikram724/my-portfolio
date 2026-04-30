import styles from './Skills.module.css';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Vanilla CSS", "TailwindCSS", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "REST APIs"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "Vercel", "Jest", "CI/CD"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.header}>
        <h2 className={styles.title}>Technical Skills</h2>
        <p className={styles.subtitle}>My specialized toolkit for bringing ideas to life.</p>
      </div>
      <div className={styles.grid}>
        {skillCategories.map((category, index) => (
          <div key={index} className={`${styles.categoryCard} glass`}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skillList}>
              {category.skills.map((skill, i) => (
                <div key={i} className={styles.skillTag}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
