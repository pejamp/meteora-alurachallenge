
import { Header } from 'src/components/Header';
import styles from './Home.module.scss';
import { Banner } from 'src/components/Banner';

export function Home() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
      </main>
      <footer></footer>
    </div>
  )
}
