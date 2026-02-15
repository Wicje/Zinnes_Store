
import styles from "./Hero.module.css";
import Container from "@/shared/components/Container";
import Button from "@/shared/components/Button";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}></div>
      <Container>
        <div className={`${styles.content} fade-in`}>
          <h1>Precision in Simplicity</h1>
          <p>Black and white. Structured. Production ready.</p>
          <Button>Get Started</Button>
        </div>
      </Container>
    </section>
  );
}
