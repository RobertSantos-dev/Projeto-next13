import { Nunito, DM_Sans, Roboto } from "next/font/google";

import HeaderGlobal from "@/components/global/Header";
import Item from "@/components/locations/Item";
import { listAllLocations } from "@/services/api";
import style from "../../styles/locations/page.module.css";

const nunito = Nunito({ subsets: ['latin'], weight: ['800'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['500'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['500'] });

export default async function Locations() {
  const list = await listAllLocations();

  return (
    <>
      <HeaderGlobal title="Localizações" navigate="/" />
      <main className={ style.main_locations }>
        <ul>
          { list.map((e: any) => (
            <Item
              fontOne={ nunito }
              fontTwo={ dmSans }
              fontTree={ roboto }
              name= { e.name }
              type={ e.type }
              dimension={ e.dimension }
              residents={ e.residents }
            />
          )) }
        </ul>
      </main>
    </>
  );
}
