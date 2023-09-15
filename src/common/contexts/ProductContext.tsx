import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { IProduct } from "src/shared/interfaces/IProduct";
import axios from "axios";

interface ProductContextProps {
  products: IProduct[];
  filteredProducts: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  setFilteredProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export const ProductContext = createContext({} as ProductContextProps);
ProductContext.displayName = "Product";

export const ProductProvider = (props: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, filteredProducts, setFilteredProducts }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const [filterText, setFilterText] = useState('');
  const { products, setProducts, filteredProducts, setFilteredProducts } =
    useContext(ProductContext);

  function filterByCategory(category: string) {
    if (category === "todas") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  }

  function searchByText() {
    const filtered = products.filter((product) => product.name.toLowerCase().includes(filterText.toLowerCase()))
    setFilteredProducts(filtered);
  }

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/pejamp/meteora-mock/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();
  }, []);

  return {
    products: filteredProducts.length ? filteredProducts : products,
    setProducts,
    filterByCategory,
    setFilterText,
    searchByText
  };
};
