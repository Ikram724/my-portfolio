import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>Portfolio<span>.</span></div>
          <p>Building high-end digital experiences with precision and passion.</p>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {currentYear} All rights reserved.</p>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/ikrammir/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Ikram724/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://x.com/IkramMi33821388" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
