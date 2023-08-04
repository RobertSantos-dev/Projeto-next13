import { Nunito } from "next/font/google";

import DetailsOne from "./DetailsOne";
import DetailsTwo from "./DetailsTwo";
import style from "../../styles/characterId/page.module.css";

const nunito = Nunito({ subsets: ['latin'] });

export default function Card() {
  return (
    <main className={ style.main_card }>
      <header className={ style.header_card }>
        <h1 className={ nunito.className }>Detalhes</h1>
      </header>
      <section className={ style.section_card }>
        <DetailsOne />
        <DetailsTwo />
      </section>
    </main>
  )
}