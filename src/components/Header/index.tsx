import styles from './Header.module.scss';
import Logo from '../../assets/Desktop/logo-desktop.png'
import { HamburgerMenu } from '../HamburgerMenu';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.main}>
        <img src={Logo} alt="Logo da Meteora" />
        <HamburgerMenu />
      </div>
      <div className={styles.search}>
        <input className={styles.search__input} type="text" placeholder='Digite o produto' />
        <button className={styles.search__btn}>Buscar</button>
      </div>
    </header>
  )
}
