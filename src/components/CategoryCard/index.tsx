import React from 'react'
import styles from './CategoryCard.module.scss';
import categoryImage from 'src/assets/Mobile/Categorias/Categoria calçados.png';

export function CategoryCard() {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={categoryImage} alt="" />
      <p className={styles.card__text}>Calçados</p>
    </div>
  )
}
