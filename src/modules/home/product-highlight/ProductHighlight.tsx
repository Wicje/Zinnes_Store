
"use client";

import { useState } from "react";
import styles from "./ProductHighlight.module.css";

const images = [
  "/images/hoodie-main.jpg",
  "/images/hoodie-2.jpg",
  "/images/hoodie-3.jpg",
  "/images/hoodie-4.jpg",
];

export default function ProductHighlight() {
  const [active, setActive] = useState(images[0]);

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h2>
          NIGHTFALL <br />
          OVERSIZED <br />
          HOODIE
        </h2>

        <p>
          A heavyweight, ultra-soft hoodie designed for comfort and style.
          Featuring a relaxed fit, subtle embroidered detailing, and a faded
          wash for that perfect worn-in look. Street-ready and built to stand out.
        </p>

        <div className={styles.priceRow}>
          <span className={styles.price}>$89</span>
          <span className={styles.oldPrice}>$120</span>
        </div>

        <button className={styles.button}>
          Shop now
          <span>→</span>
        </button>
      </div>

      <div className={styles.right}>
        <div className={styles.mainImage}>
          <img src={active} alt="Product" />
        </div>

        <div className={styles.thumbs}>
          {images.map((img) => (
            <div
              key={img}
              className={`${styles.thumb} ${
                active === img ? styles.active : ""
              }`}
              onClick={() => setActive(img)}
            >
              <img src={img} alt="Thumbnail" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
