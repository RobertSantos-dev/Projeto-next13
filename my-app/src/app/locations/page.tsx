import HeaderGlobal from "@/components/global/Header";
import Item from "@/components/locations/Item";
import { listAllLocations } from "@/services/api";


export default async function Locations() {
  const list = await listAllLocations();

  return (
    <>
      <HeaderGlobal title="Localizações" />
      <main>
        <ul>
          { list.map((e: any) => (
            <Item
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
