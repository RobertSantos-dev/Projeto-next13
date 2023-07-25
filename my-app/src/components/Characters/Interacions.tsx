"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { listAll } from "@/services/api";
import style from "../../styles/characters/page.module.css";

export default function Interactions() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => { listAll(setList); }, []);

  const filterList = list.filter((e: any) => (
    e.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className="">
      <div className={ style.div_input }>
        <input
          type="text"
          maxLength={ 30 }
          placeholder="Pesquisar..."
          value={ search }
          onChange={ ({ target: { value } }) => { setSearch(value) } }
        />
      </div>
      <div className={ style.div_list }>
        <ul>
          { filterList.map((e: any) => (
            <li key={ e.id }>
              <Image
                src={ e.image }
                alt={ e.name }
                width={ 85 }
                height={ 85 }
              />
              <div className={ style.div_info }>
                <p className={ style.name }>{ e.name }</p>
                <p>
                  <span className={style.s1}>Status</span>
                  <span className={style.s2}>:</span>
                  {' '}
                  { e.status == 'unknown' ? 'Desconhecido' : e.status }
                </p>
                <p>
                  <span className={style.s1}>Tipo</span>
                  <span className={style.s2}>:</span>
                  {' '}
                  { e.type || '?' }
                </p>
                <p>
                  <span className={style.s1}>Espécie</span>
                  <span className={style.s2}>:</span>
                  {' '}
                  { e.species }
                </p>
              </div>
              <div className={ style.div_button }>
                <button type="button">Mais detalhes</button>
              </div>
            </li>
          )) }
        </ul>
      </div>
    </section>
  );
}