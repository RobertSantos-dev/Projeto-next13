"use client";

import { useEffect, useState } from "react";
import { getStorage, TFavorite } from "@/services/storage";

export default function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const listStorage = getStorage('favorites');
    
    if (listStorage) {
      setList(JSON.parse(listStorage))
    }
    console.log('alo');
  }, [])

  return (
    <main className="">
      <ul>
        { list.map((e: TFavorite) => (
          <li key={ e.id }>
            <p>{ e.name }</p>
            <p>{ e.image }</p>
          </li>
        )) }
      </ul>
    </main>
  )
}