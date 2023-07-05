import React from 'react'
import { Button } from '../Button'
import styles from './Newsletter.module.scss';

export function Newsletter() {
  return (
    <section className={styles.container}>
      <p className={styles.text}>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</p>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder='Digite seu email' />
        <Button>Enviar</Button>
      </form>
    </section>
  )
}
