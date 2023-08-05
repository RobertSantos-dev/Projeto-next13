import Menu from "@/components/home/Menu";
import Logo from "@/components/global/Logo";

import { MdGroups } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { AiFillInfoCircle, AiFillStar } from "react-icons/ai";

import styles from '../styles/page.module.css';

export default async function Home() {

  return (
    <main className={ styles.main }>
      <Logo style={ styles.logo } />
      <section className={ styles.grid }>
        <Menu
          icon={ <MdGroups /> }
          name='Personagens'
          style={ styles.m1 }
          path='/characters'
        />
        <Menu
          icon={ <FaMapMarkedAlt/> }
          name='Localizações'
          style={ styles.m2 }
          path='/locations'
        />
        <Menu
          icon={ <AiFillInfoCircle /> }
          name='Informações'
          style={ styles.m3 }
          path='/info'
        />
        <Menu
          icon={ <AiFillStar /> }
          name='Favoritos'
          style={ styles.m4 }
          path='/favorites'
        />
      </section>
    </main>
  )
}

