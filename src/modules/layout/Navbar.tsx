
import styles from "./Navbar.module.css";
import Container from "@/modules/shared/Container";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.logo}>RAWBLOX</div>

          <nav className={styles.links}>
            <Link href="#">Shop</Link>
            <Link href="#">Collections</Link>
            <Link href="#">Men</Link>
            <Link href="#">Women</Link>
            <Link href="#">Our Story</Link>
          </nav>

          <div className={styles.cart}>🛒</div>
        </div>
      </Container>
    </header>
  );
}
