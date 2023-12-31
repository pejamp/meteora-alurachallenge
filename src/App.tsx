import { Home } from './pages/Home'
import './styles/reset.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProductProvider } from './common/contexts/ProductContext';

function App() {

  return (
    <ProductProvider>
      <Home />
    </ProductProvider>
  )
}

export default App
