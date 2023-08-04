"use client";

import { useEffect, useState } from "react";
import { DM_Sans, Roboto } from "next/font/google";
import { useParams } from "next/navigation";
import Image from "next/image";

import { listId } from "@/services/api";
import style from "../../styles/characterId/page.module.css";

type TRes = {
  id: number,
  name: string,
  status: string,
  species: string,
  origin: { name: string },
  location: { name: string },
  episode: string[],
  image: string
}

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['700'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['500'] });

export default function DetailsTwo() {
  const [res, setRes] = useState<TRes>();
  const { id }: any = useParams();

  useEffect(() => { listId(setRes, id); }, []);

  return (
    <div className={ style.div_info }>
      <div className={ style.div_info_one }>
        <Image
          src={ res ? res.image : "" }
          height={ 200 }
          width={ 200 }
          alt={ res ? res.name : "" }
        />
        <h3 className={ dmSans.className }>{ res?.name }</h3>
        <span className={ dmSans.className }>{ res?.species }</span>
      </div>
      <div className={ style.div_info_two }>
        <p>
          <span className={ roboto.className }>Status:</span>
          {' '}
          { res?.status === 'unknown' ? 'Desconhecido(a)' : res?.status }
        </p>
        <p>
          <span className={ roboto.className }>Origem:</span>
          {' '}
          { res?.origin.name === 'unknown' ? 'Desconhecido(a)' : res?.origin.name }
        </p>
        <p>
          <span className={ roboto.className }>Localização:</span>
          {' '}
          { res?.location.name }
        </p>
        <p>
          <span className={ roboto.className }>Qtd Episodios:</span>
          {' '}
          { res?.episode.length }
        </p>
      </div>
    </div>
  );
}