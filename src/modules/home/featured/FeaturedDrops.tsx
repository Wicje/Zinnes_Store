
import styles from "./FeaturedDrops.module.css";
import Container from "@/modules/shared/Container";

export default function FeaturedDrops() {
  return (
    <section className={styles.section}>
      <Container>
        <h2>FEATURED DROPS: STAND OUT, STAY AHEAD</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span>Sleek Phone Case</span>
          </div>
          <div className={styles.card}>
            <span>Spring Jacket</span>
          </div>
          <div className={styles.card}>
            <span>Summer Cap</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
