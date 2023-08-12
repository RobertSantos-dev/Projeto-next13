"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import style from "../../styles/characterId/page.module.css";
import { getFavoritesId, TFavorite } from "@/services/storage";
import { favoriteTrue, favoriteFalse } from "@/services/favorites";

export default function DetailsOne({ res }: { res: TFavorite }) {
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (getFavoritesId('favorites', Number(res.id))) {
      setFavorite(true)
    }
  }, [res]);

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
                  ? () => favoriteFalse({ setLoading, setFavorite, res })
                  : () => favoriteTrue({ setLoading, setFavorite, res })
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