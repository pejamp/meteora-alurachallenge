import { ICategory } from 'src/shared/interfaces/ICategory';
import styles from './CategoryCard.module.scss';
import { useProductContext } from 'src/common/contexts/ProductContext';

export function CategoryCard({ name, image }: ICategory) {
  const { filterByCategory } = useProductContext();

  return (
    <div className={styles.card} onClick={() => filterByCategory(name)}>
      <img className={styles.card__image} src={image} alt={name} />
      <p className={styles.card__text}>{name}</p>
    </div>
  )
}
