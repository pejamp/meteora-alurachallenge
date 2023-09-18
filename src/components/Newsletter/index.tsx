import { useState } from "react";
import { Button } from "../Button";
import styles from "./Newsletter.module.scss";
import { Modal } from "../Modal";
import * as yup from 'yup';

export function Newsletter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const emailSchema = yup.string().email().required();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    emailSchema.isValid(email).then(valid => {
      if (valid) {
        setIsModalOpen(true); 
      }
      return;
    });
  };

  return (
    <section className={styles.container}>
      <p className={styles.text}>
        Quer receber nossas novidades, promoções exclusivas e 10% OFF na
        primeira compra? Cadastre-se!
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <Button>Enviar</Button>
      </form>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>Em breve você receberá novidades exclusivas da Meteora.</p>
      </Modal>
    </section>
  );
}
