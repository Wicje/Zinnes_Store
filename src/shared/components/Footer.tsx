
import styles from "./Footer.module.css";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div>BRAND</div>
          <div className={styles.links}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
