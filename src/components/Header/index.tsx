import styles from "./Header.module.scss";
import Logo from "../../assets/Desktop/logo-desktop.png";
import { HamburgerMenu } from "../HamburgerMenu";
import { useProductContext } from "src/common/contexts/ProductContext";

export function Header() {
  const { setFilterText, searchByText } = useProductContext();

  return (
    <header className={styles.container}>
      <div className={styles.navigation}>
        <img src={Logo} alt="Logo da Meteora" />
        <nav className={styles.navbar}>
          <ul className={styles.navbar__links}>
            <li className={styles.navbar__link}>
              <a href="">Home</a>
            </li>
            <li className={styles.navbar__link}>
              <a href="">Nossas lojas</a>
            </li>
            <li className={styles.navbar__link}>
              <a href="">Novidades</a>
            </li>
            <li className={styles.navbar__link}>
              <a href="">Promoções</a>
            </li>
          </ul>
        </nav>
        <div className={styles.hide__desktop}>
          <HamburgerMenu />
        </div>
      </div>
      <div className={styles.search}>
        <input
          className={styles.search__input}
          type="text"
          onChange={(event) => setFilterText(event.target.value)}
          placeholder="Digite o produto"
        />
        <button onClick={searchByText} className={styles.search__btn}>Buscar</button>
      </div>
    </header>
  );
}
