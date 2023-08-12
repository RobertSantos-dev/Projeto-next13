import HeaderGlobal from "@/components/global/Header";
import List from "@/components/favorites/List";

export default function Favorites() {
    return (
      <>
        <HeaderGlobal title="Personagens Favoritos" navigate="/" />
        <List />
      </>
    );
  }