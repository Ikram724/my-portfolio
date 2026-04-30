import styles from './About.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/profile2.JPG" 
            alt="Profile" 
            width={400} 
            height={400} 
            className={styles.image}
          />
          <div className={styles.experience}>
            <h3>3+</h3>
            <p>Years of Experience</p>
          </div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.description}>
            I am a Software Engineer with a passion for creating elegant solutions to complex problems. 
            With a background in computer science and years of experience in full-stack development, 
            I specialize in building scalable web applications and intuitive user interfaces.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h4>10+</h4>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statItem}>
              <h4>10+</h4>
              <p>Happy Clients</p>
            </div>
            <div className={styles.statItem}>
              <h4>100%</h4>
              <p>Commitment</p>
            </div>
          </div>
          <a href="/Resume_IST.pdf" className="btn btn-outline">Download Resume</a>
        </div>
      </div>
    </section>
  );
}
