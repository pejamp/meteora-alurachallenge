import { Header } from 'src/components/Header';
import { Banner } from 'src/components/Banner';
import { Section } from 'src/components/Section';
import styles from './Home.module.scss';
import { CategoryCard } from 'src/components/CategoryCard';
import { Facilities } from 'src/components/Facilities';
import { ProductCard } from 'src/components/ProductCard';
import { Newsletter } from 'src/components/Newsletter';
import { Footer } from 'src/components/Footer';

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
            <div className={styles.products__cards}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </Section>
        </div>
        <Facilities />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
