import Link from "next/link";
import { Nunito } from "next/font/google";

import { AiOutlineArrowLeft } from "react-icons/ai";

import style from "../../styles/global/header.module.css";

const nunito = Nunito({ subsets: ['latin'] });

export default function HeaderGlobal() {
  return (
    <header className={ style.header_global }>
      <div className={ `${style.div_route} ${nunito.className}` }>
        <Link href="/characters">
          <AiOutlineArrowLeft/>
        </Link>
      </div>
      <div className={ style.div_logo }>
        <span>
          LOGO
        </span>
      </div>
    </header>
  );
}