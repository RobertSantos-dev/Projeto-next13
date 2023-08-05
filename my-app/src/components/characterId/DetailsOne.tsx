"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import style from "../../styles/characterId/page.module.css";
import { getFavoritesId } from "@/services/storage";
import { favoriteTrue, favoriteFalse } from "@/services/favorites";

export default function DetailsOne() {
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  const { id }: any = useParams();

  useEffect(() => {
    if (getFavoritesId('favorites', Number(id))) {
      setFavorite(true)
    }
  }, []);

  return (
    <div>
      <div className={ style.div_icons }>
        <Link href="">
          <FaLocationArrow />
        </Link>
        { loading
          ? <span><AiOutlineLoading3Quarters /></span>
          : (
            <button
              onClick={
                favorite
                  ? () => favoriteFalse({ setLoading, setFavorite, id })
                  : () => favoriteTrue({ setLoading, setFavorite, id })
              }
            >
              { !favorite ? <MdFavoriteBorder /> : <MdFavorite /> }
            </button>
          )
        }
      </div>
    </div>
  );
}