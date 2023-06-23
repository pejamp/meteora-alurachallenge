import { useState } from "react";
import { ReactComponent as MenuIcon } from "src/assets/Desktop/icones/menu.svg";
import { ReactComponent as CloseIcon } from "src/assets/Desktop/icones/fechar.svg";
import styles from "./HamburgerMenu.module.scss";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`${styles.menuBtn} ${!isOpen ? styles.menuBtn__open : ""}`}
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </button>
      <nav
        className={`${styles.dropdown} ${isOpen ? styles.dropdown__open : ""}`}
      >
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </button>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="">Home</a>
          </li>
          <li className={styles.item}>
            <a href="">Nossas lojas</a>
          </li>
          <li className={styles.item}>
            <a href="">Novidades</a>
          </li>
          <li className={styles.item}>
            <a href="">Promoções</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
