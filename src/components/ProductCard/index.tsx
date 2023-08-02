import { useState } from "react";
import styles from "./ProductCard.module.scss";
import shirtImage from "src/assets/Desktop/Imagens Cards/Camiseta.png";
import { Button } from "../Button";
import { ProductModal } from "../ProductModal";

export function ProductCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.card}>
        <img className={styles.card__image} src={shirtImage} alt="" />
        <div className={styles.card__content}>
          <h4 className={styles.title}>Camiseta Conforto</h4>
          <p className={styles.decription}>
            Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o
            verão. Modelagem unissex.
          </p>
          <span className={styles.price}>R$ 70,00</span>
          <Button onClick={handleOpenModal}>Ver mais</Button>
        </div>
      </div>
      <ProductModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
