"use client";

import { listId } from "@/services/api";
import { TRes } from "@/services/storage";

import DetailsOne from "./DetailsOne";
import DetailsTwo from "./DetailsTwo";

import style from "../../styles/characterId/page.module.css";
import { useEffect, useState } from "react";

export default function Card({ id }: { id: string }) {
  const [res, setRes] = useState<TRes>();

  useEffect(() => { listId(setRes, id); }, []);

  return (
    <main className={ style.main_card }>
      <section className={ style.section_card }>
        <DetailsOne
          res={
            res
            ? { id: res.id, name: res.name, image: res.image }
            : { id: 0, name: '', image: '' }
          }
        />
        <DetailsTwo res={ res! } />
      </section>
    </main>
  )
}