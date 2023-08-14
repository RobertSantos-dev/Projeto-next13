"use client";

import { ComponentState, useEffect, useState } from "react";
import Image from "next/image";
import { MdFavorite } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";

import { getStorage, TFavorite, removeStorage } from "@/services/storage";


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
    <main className="">
      <ul>
        { list.map((e: TFavorite) => (
          <li key={ e.id }>
            <div>
              <Image
                src={ e.image }
                alt={ e.name }
                height={ 100 }
                width={ 100 }
              />
              <p>{ e.name }</p>
            </div>
            <div>
              <button onClick={ () => btnUpdate(e, setList) }>
                <MdFavorite />
              </button>
              <button>
                <AiFillInfoCircle />
              </button>
            </div>
          </li>
        )) }
      </ul>
    </main>
  )
}