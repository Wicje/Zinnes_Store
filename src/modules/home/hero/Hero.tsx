import styles from "./Hero.module.css";
import Container from "@/modules/shared/Container";

export default function Hero() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heroBox}>
          <div className={styles.overlayContent}>
            <h1>COMMUNITY-DRIVEN CULTURE</h1>
            <p>
              More than just a brand, we're a movement—connecting creatives,
              skaters, and trendsetters who define the streets.
            </p>
            <button>Shop now →</button>
          </div>

          <div className={styles.slider}>
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span className={styles.active}>05</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
