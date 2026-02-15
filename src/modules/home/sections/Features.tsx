
import styles from "./Features.module.css";
import Container from "@/shared/components/Container";
import FeatureCard from "../components/FeatureCard";

export default function Features() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.grid} fade-in`}>
          <FeatureCard title="Clean Code" description="Structured modular architecture." />
          <FeatureCard title="Scalable" description="Designed for growth and stability." />
          <FeatureCard title="Minimal" description="Black and white discipline." />
        </div>
      </Container>
    </section>
  );
}
