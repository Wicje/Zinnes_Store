
import styles from "./Showcase.module.css";
import Container from "@/shared/components/Container";

export default function Showcase() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.layout} fade-in`}>
          <div className={styles.text}>
            <h2>Engineered Layout</h2>
            <p>Responsive. Deterministic. Maintainable.</p>
          </div>
          <div className={styles.media}></div>
        </div>
      </Container>
    </section>
  );
}
