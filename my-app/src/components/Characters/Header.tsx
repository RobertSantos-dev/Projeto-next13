import { Fredoka } from "next/font/google";
import style from "../../styles/characters/page.module.css";
import { AiFillInfoCircle } from "react-icons/ai";

const fredoka = Fredoka({ subsets: ['hebrew'] });

export default function Header() {
  return (
    <header className={ style.header_characters }>
      <div className={ style.logo_characters }>
        <h1>LOGO</h1>
      </div>
      <div className={ style.poster_characters }>
        <p className={ fredoka.className }>The Rick and Morty</p>
      </div>
      <div>
        <AiFillInfoCircle />
        <span>Personagens</span>
      </div>
    </header>
  );
}