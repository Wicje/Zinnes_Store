
import styles from "./Navbar.module.css";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.logo}>BRAND</div>
          <nav className={styles.nav}>
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
