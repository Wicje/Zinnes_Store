
import styles from "./NewDrops.module.css";

interface Props {
  title: string;
  price: string;
  image: string;
}

export default function ProductCard({ title, price, image }: Props) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}
