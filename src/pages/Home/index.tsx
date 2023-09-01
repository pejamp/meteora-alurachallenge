import { Header } from "src/components/Header";
import { Banner } from "src/components/Banner";
import { Section } from "src/components/Section";
import styles from "./Home.module.scss";
import { CategoryCard } from "src/components/CategoryCard";
import { Facilities } from "src/components/Facilities";
import { ProductCard } from "src/components/ProductCard";
import { Newsletter } from "src/components/Newsletter";
import { Footer } from "src/components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { ICategory } from "src/shared/interfaces/ICategory";
import { useProductContext } from "src/common/contexts/ProductContext";

export function Home() {
  const { products } = useProductContext();
  const [categories, setCategories] = useState<ICategory[]>([]);

  async function getCategories() {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/pejamp/meteora-mock/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Banner />
        <div className={styles.sections}>
          <Section title="Busque por categoria:">
            <div className={styles.category__cards}>
              {categories.map((category) => (
                <CategoryCard
                  id={category.id}
                  name={category.name}
                  image={category.image}
                  key={category.id}
                />
              ))}
            </div>
          </Section>
          <Section title="Produtos que estão bombando!">
            <div className={styles.products__cards}>
              {products.map((product) => (
                <ProductCard {...product} key={product.id} />
              ))}
            </div>
          </Section>
        </div>
        <Facilities />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
