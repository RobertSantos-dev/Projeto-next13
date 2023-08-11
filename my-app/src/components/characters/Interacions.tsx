"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DM_Sans, Roboto } from "next/font/google";
import Image from "next/image";

import style from "../../styles/characters/page.module.css";

const dmSantsOne = DM_Sans({ subsets: ["latin"], weight: "500" });
const dmSantsTwo = DM_Sans({ subsets: ["latin"], weight: "700" });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });


export default function Interactions({ list }: { list: Array<object> }) {
  const [search, setSearch] = useState('');

  const { push } = useRouter();

  const filterList = list.filter((e: any) => (
    e.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className={ style.section_interactions }>
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
                width={ 90 }
                height={ 90 }
              />
              <div className={ `${style.div_info} ${dmSantsOne.className}` }>
                <p className={ `${style.name} ${dmSantsTwo.className}` }>{ e.name }</p>
                <p>
                  <span className={`${style.s1} ${roboto.className}`}>Status</span>
                  <span className={`${style.s2} ${roboto.className}`}>:</span>
                  {' '}
                  { e.status == 'unknown' ? 'Desconhecido' : e.status }
                </p>
                <p>
                  <span className={ `${style.s1} ${roboto.className}` }>Tipo</span>
                  <span className={ `${style.s2} ${roboto.className}` }>:</span>
                  {' '}
                  { e.type || '?' }
                </p>
                <p>
                  <span className={`${style.s1} ${roboto.className}`}>Espécie</span>
                  <span className={`${style.s2} ${roboto.className}`}>:</span>
                  {' '}
                  { e.species }
                </p>
              </div>
              <div className={ style.div_button }>
                <button
                  type="button"
                  className={ dmSantsTwo.className }
                  onClick={ () => { push(`/characters/${e.id}`) } }
                >
                  Mais detalhes
                </button>
              </div>
            </li>
          )) }
        </ul>
      </div>
    </section>
  );
}