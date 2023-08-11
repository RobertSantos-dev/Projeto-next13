import { Nunito, Roboto } from "next/font/google";
import Link from "next/link";

import { LuCalendarCheck2 } from "react-icons/lu";
import { BiSolidUserPin } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import style from "../../styles/info/page.module.css";


const nunito = Nunito({ subsets: ['latin-ext'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export default function Informations() {
  return (
    <main className={ style.main_info }>
      <div className={ style.div_img_autor }></div>
      <div className={ style.div_info_autor }>
        <div className={ style.div_name_autor }>
          <h3 className={ nunito.className }>Robert Santos</h3>
        </div>
        <div className={ style.div_details_autor }>
          <p>
            <span className={ style.span_icons }><LuCalendarCheck2 /></span>
            {' '}
            <span className={ `${roboto.className} ${style.span_info}` }>
              23 anos
            </span>
          </p>
          <p>
            <span className={ style.span_icons }><BiSolidUserPin /></span>
            {' '}
            <span className={ `${roboto.className} ${style.span_info}` }>
              Desenvolvedor Web FullStack
            </span>
          </p>
          <p>
            <span className={ style.span_icons }><BsGithub /></span>
            {' '}
            <Link
              href="https://github.com/RobertSantos-dev"
              target="_blank"
              className={ `${roboto.className} ${style.link_info}` }
            >
              github.com/RobertSantos-dev
            </Link>
          </p>
          <p>
            <span className={ style.span_icons }><BsLinkedin /></span>
            {' '}
            <Link
              href="https://www.linkedin.com/in/robert-santos-dev/"
              target="_blank"
              className={ `${roboto.className} ${style.link_info}` }
            >
              linkedin.com/in/robert-santos-dev/
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}