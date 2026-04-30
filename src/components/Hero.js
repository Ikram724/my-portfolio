import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className="animate-fade">
          Building the next generation of <span className="text-accent">digital experiences.</span>
        </h1>
        <p className="animate-fade" style={{ animationDelay: '0.2s' }}>
          I am a passionate developer specializing in high-performance web applications and exceptional user interfaces.
        </p>
        <div className={`${styles.actions} animate-fade`} style={{ animationDelay: '0.4s' }}>
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#about" className="btn btn-outline">About Me</a>
        </div>
      </div>
      <div className={styles.visual}>
        {/* Abstract visual element or image */}
        <div className={styles.gradientSphere}></div>
      </div>
    </section>
  );
}
