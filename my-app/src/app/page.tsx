import { listAll } from '@/services/api';
import Itens from '@/components/Home/Itens';
import styles from '../styles/page.module.css';

export default async function Home() {
  const list = await listAll();

  return (
    <main className={styles.main}>
      <Itens data={ list.results } />
    </main>
  )
}

