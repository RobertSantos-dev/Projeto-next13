import { Fredoka, Nunito } from "next/font/google";
import Link from "next/link";

import style from "../../styles/characters/page.module.css";

const fredoka = Fredoka({ subsets: ['hebrew'] });
const nunito = Nunito({ subsets: ["latin"], weight: "800" });

export default function Header() {
  return (
    <header className={ style.header_characters }>
      <div className={ style.div_characters }>
        <div className={ style.logo_characters }>
          <h1><Link href="/">LOGO</Link></h1>
        </div>
        <div className={ style.link_characters }>
          {/* <AiFillInfoCircle /> */}
          <span className={ nunito.className }>Personagens</span>
        </div>
      </div>
      <div className={ style.poster_characters }>
        <p className={ fredoka.className }>The Rick and Morty</p>
      </div>
    </header>
  );
}