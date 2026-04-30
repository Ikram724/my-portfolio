import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Portfolio<span>.</span>
        </Link>
        <div className={styles.links}>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#contact" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
