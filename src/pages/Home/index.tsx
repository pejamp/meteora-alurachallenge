import { Header } from 'src/components/Header';
import { Banner } from 'src/components/Banner';
import { Section } from 'src/components/Section';
import styles from './Home.module.scss';
import { CategoryCard } from 'src/components/CategoryCard';
import { Facilities } from 'src/components/Facilities';
import { ProductCard } from 'src/components/ProductCard';

export function Home() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <div className={styles.sections}>
          <Section title='Busque por categoria:'>
            <div className={styles.category__cards}>
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
            </div>
          </Section>
          <Section title='Produtos que estão bombando!'>
            <div className={styles.category__cards}>
              <ProductCard />
            </div>
          </Section>
        </div>
        <Facilities />
      </main>
      <footer></footer>
    </div>
  )
}
