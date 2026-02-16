
import styles from "./Elevate.module.css";
import Container from "@/modules/shared/Container";

export default function Elevate() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.textCard}>
            <h2>ELEVATE YOUR STREET GAME</h2>
            <p>
              From bold graphics to everyday essentials, explore our latest
              drops and signature pieces.
            </p>
            <button>Shop collections →</button>
          </div>

          <div className={styles.image}></div>
        </div>
      </Container>
    </section>
  );
}
