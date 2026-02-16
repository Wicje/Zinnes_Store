
import styles from "./Footer.module.css";
import Container from "@/modules/shared/Container";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div>© 2025 RAWBLOX</div>
          <div className={styles.links}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
