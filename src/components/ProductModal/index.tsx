import { Modal } from "../Modal";
import { Button } from "../Button";
import styles from "./ProductModal.module.scss";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  image: string;
  description: string;
  price: string;
}

export function ProductModal({
  isOpen,
  onClose,
  name,
  image,
  description,
  price,
}: ProductModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.card}>
        <div className={styles.card__image}>
          <img src={image} alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.description}>
            <h4 className={styles.description__title}>{name}</h4>
            <p className={styles.description__info}>
              {description}
            </p>
            <span className={styles.description__price}>R$ {price}</span>
            <p className={styles.description__by}>
              Vendido e entregue por Riachuelo
            </p>
          </div>
          <div className={styles.options}>
            <p className={styles.options__title}>Cores:</p>
            <div className={styles.options__list}>
              <label className={styles.options__item}>
                <input
                  type="radio"
                  name="color"
                  value="#75d7f0"
                  style={{ backgroundColor: "#75d7f0" }}
                />
                Azul claro
              </label>
              <label className={styles.options__item}>
                <input
                  type="radio"
                  name="color"
                  value="#f3f6f7"
                  style={{ backgroundColor: "#f3f6f7" }}
                />
                Offwhite
              </label>
              <label className={styles.options__item}>
                <input
                  type="radio"
                  name="color"
                  value="#000"
                  style={{ backgroundColor: "#000" }}
                />
                Preto
              </label>
            </div>
          </div>
          <div className={styles.options}>
            <p className={styles.options__title}>Tamanho:</p>
            <div className={styles.options__list}>
              <label className={styles.options__item}>
                <input type="radio" name="size" value="p" />P
              </label>
              <label className={styles.options__item}>
                <input type="radio" name="size" value="pp" />
                PP
              </label>
              <label className={styles.options__item}>
                <input type="radio" name="size" value="m" />M
              </label>
              <label className={styles.options__item}>
                <input type="radio" name="size" value="g" />G
              </label>
              <label className={styles.options__item}>
                <input type="radio" name="size" value="gg" />
                GG
              </label>
            </div>
          </div>
          <Button>Adicionar à sacola</Button>
        </div>
      </div>
    </Modal>
  );
}
