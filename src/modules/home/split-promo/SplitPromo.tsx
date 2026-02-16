
import styles from "./SplitPromo.module.css";
import Container from "@/modules/shared/Container";

export default function SplitPromo() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.leftImage}></div>

          <div className={styles.rightCard}>
            <h2>BUILT BY THE STREETS, MADE FOR YOU</h2>
            <p>
              From the streets to your style—our journey is all about
              self-expression and rebellion.
            </p>
            <button>Read our story →</button>
          </div>
        </div>
      </Container>
    </section>
  );
}
