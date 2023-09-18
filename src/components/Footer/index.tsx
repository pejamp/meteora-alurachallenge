import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.container}>
      <p className={styles.copyright}>2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
    </footer>
  )
}
