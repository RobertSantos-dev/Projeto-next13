"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { listId } from "@/services/api";
import { useParams } from "next/navigation";

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

export default function DetailsTwo() {
  const [res, setRes] = useState<TRes>();
  const { id }: any = useParams();

  useEffect(() => { listId(setRes, id); }, []);

  return (
    <div>
      <div>
        <Image
          src={ res ? res.image : "" }
          height={ 200 }
          width={ 200 }
          alt={ res ? res.name : "" }
        />
        <h3>{ res?.name }</h3>
        <span>{ res?.species }</span>
      </div>
      <div>
        <p>
          Status<span>:</span>
          {' '}
          { res?.status }
        </p>
        <p>
          Origem <span>:</span>
          {' '}
          { res?.origin.name }
        </p>
        <p>
          Localização<span>:</span>
          {' '}
          { res?.location.name }
        </p>
        <p>
          Qtd Episodios<span>:</span>
          {' '}
          { res?.episode.length }
        </p>
      </div>
    </div>
  );
}