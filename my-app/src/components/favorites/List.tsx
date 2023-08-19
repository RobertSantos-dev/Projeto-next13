"use client";

import { ComponentState, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

import { MdFavorite } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";

import { getStorage, TFavorite, removeStorage } from "@/services/storage";
import styles from "../../styles/favorites/page.module.css";


const dmSans = DM_Sans({ subsets: ['latin'], weight: ['700'] });

const btnUpdate = (e: TFavorite, setList: ComponentState) => {
  removeStorage('favorites', e.id);
  setList((prevState: TFavorite[]) => prevState.filter((e2) => e2.id !== e.id));
}

export default function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const listStorage = getStorage('favorites');

    if (listStorage) setList(JSON.parse(listStorage));
  }, []);

  return (
    <main className={ styles.main_favorites }>
      <ul>
        { list.map((e: TFavorite) => (
          <li key={ e.id }>
            <div className={ styles.li_div_character }>
              <Image
                src={ e.image }
                alt={ e.name }
                height={ 100 }
                width={ 100 }
              />
              <p className={ dmSans.className }>{ e.name }</p>
            </div>
            <div className={ styles.li_div_interaction }>
              <button onClick={ () => btnUpdate(e, setList) }>
                <MdFavorite />
              </button>
              <Link href={`/characters/${e.id}`}><AiFillInfoCircle /></Link>
            </div>
          </li>
        )) }
      </ul>
    </main>
  )
}