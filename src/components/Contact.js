import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={`${styles.card} glass`}>
        <h2 className={styles.title}>Let's build something <span className="text-accent">together.</span></h2>
        <p className={styles.description}>
          Whether you have a specific project in mind or just want to chat about tech, 
          feel free to reach out. I'm always open to new opportunities and collaborations.
        </p>
        <div className={styles.actions}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ikrammir714@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Send me an email</a>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/ikrammir/" className={styles.socialLink}>LinkedIn</a>
            <a href="https://github.com/Ikram724/" className={styles.socialLink}>GitHub</a>
            <a href="https://x.com/IkramMi33821388" className={styles.socialLink}>Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}
