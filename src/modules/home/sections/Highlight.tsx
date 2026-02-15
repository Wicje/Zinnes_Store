
import styles from "./Highlight.module.css";
import Container from "@/shared/components/Container";

export default function Highlight() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.inner} fade-in`}>
          <h2>Built for the Long Run</h2>
          <p>Production systems demand discipline.</p>
        </div>
      </Container>
    </section>
  );
}
