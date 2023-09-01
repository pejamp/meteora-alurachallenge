import { useState } from "react";
import styles from "./ProductCard.module.scss";
import { Button } from "../Button";
import { ProductModal } from "../ProductModal";
import { IProduct } from "src/shared/interfaces/IProduct";

export function ProductCard({ name, image, description, price }: IProduct) {
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
        <img className={styles.card__image} src={image} alt={name} />
        <div className={styles.card__content}>
          <h4 className={styles.title}>{name}</h4>
          <p className={styles.description}>
            {description}
          </p>
          <span className={styles.price}>{price}</span>
          <Button onClick={handleOpenModal}>Ver mais</Button>
        </div>
      </div>
      <ProductModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
