// import { listAll } from '@/services/api';
// import Itens from '@/components/Home/Itens';
import Menu from "@/components/Home/Menu";
import Logo from "@/components/global/Logo";

import { MdGroups } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { AiFillInfoCircle, AiFillStar } from "react-icons/ai";

import styles from '../styles/page.module.css';

export default async function Home() {
  // const list = await listAll();

  return (
    <main className={ styles.main }>
      <Logo style={ styles.logo } />
      <section className={ styles.grid }>
        <Menu
          icon={ <MdGroups /> }
          name='Personagens'
          style={ styles.m1 }
        />
        <Menu
          icon={ <FaMapMarkedAlt/> }
          name='Localizações'
          style={ styles.m2 }
        />
        <Menu
          icon={ <AiFillInfoCircle /> }
          name='Informações'
          style={ styles.m3 }
        />
        <Menu
          icon={ <AiFillStar /> }
          name='Favoritos'
          style={ styles.m4 }
        />
      </section>
      {/* <Itens data={ list.results } /> */}
    </main>
  )
}

