"use client";

import { useState, ComponentState } from "react";
import Link from "next/link";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import style from "../../styles/characterId/page.module.css";

type StatesParameters = {
  setFavorite: ComponentState,
  setLoading: ComponentState
};

const btnFavorite = ({ setFavorite, setLoading }: StatesParameters) => {
  setLoading(true);
  setFavorite((prevState: boolean) => !prevState);

  setTimeout(() => {
    setLoading(false);
  }, 1500);
}

export default function DetailsOne() {
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className={ style.div_icons }>
        <Link href="">
          <FaLocationArrow />
        </Link>
        { loading
          ? <span><AiOutlineLoading3Quarters /></span>
          : (
            <button onClick={ () => { btnFavorite({ setFavorite, setLoading }) } }>
              { !favorite ? <MdFavoriteBorder /> : <MdFavorite /> }
            </button>
          )
        }
      </div>
    </div>
  );
}