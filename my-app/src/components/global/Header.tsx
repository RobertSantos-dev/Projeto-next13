import Link from "next/link";
import { Nunito } from "next/font/google";
import { AiOutlineArrowLeft } from "react-icons/ai";

import style from "../../styles/global/header.module.css";

const nunito = Nunito({ subsets: ['latin'] });

type Props = { title: string, navigate: string }

export default function HeaderGlobal({ title, navigate }: Props) {
  return (
    <header className={ style.header_global }>
      <div className={ `${style.div_route} ${nunito.className}` }>
        <Link href={ navigate }>
          <AiOutlineArrowLeft/>
        </Link>
      </div>
      <div className={ style.div_title }>
        <h1 className={ nunito.className }>{ title }</h1>
      </div>
      <div className={ style.div_logo }>
        <span>LOGO</span>
      </div>
    </header>
  );
}