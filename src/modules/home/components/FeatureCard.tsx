
import styles from "./FeatureCard.module.css";

export default function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
