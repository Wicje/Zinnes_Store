import styles from "./NewDrops.module.css";
import Container from "@/modules/shared/Container";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Shadow Drip", price: 89, oldPrice: 120, image: "/p1.jpg" },
  { id: 2, name: "Urban Phantom", price: 89, oldPrice: 120, image: "/p2.jpg" },
  { id: 3, name: "Neon Rebellion", price: 89, oldPrice: 120, image: "/p3.jpg" }
];

export default function NewDrops() {
  return (
    <section className={styles.section}>
      <Container>
        <h2>NEW DROPS</h2>

        <div className={styles.grid}>
          {products.map(product => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <span className={styles.badge}>NEW</span>
                <img src={product.image} alt={product.name} />
              </div>

              <h3>{product.name}</h3>
              <div className={styles.price}>
                <span>${product.price}</span>
                {product.oldPrice && (
                  <span className={styles.old}>${product.oldPrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
