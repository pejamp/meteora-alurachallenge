import React, { useState } from 'react'
import { Button } from '../Button'
import styles from './Newsletter.module.scss';
import { Modal } from '../Modal';

export function Newsletter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setIsModalOpen(true);
  };

  return (
    <section className={styles.container}>
      <p className={styles.text}>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="text" placeholder='Digite seu email' />
        <Button>Enviar</Button>
      </form>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>Em breve você receberá novidades exclusivas da Meteora.</p>
      </Modal>
    </section>
  )
}
