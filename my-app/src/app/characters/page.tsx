import Header from "@/components/characters/Header";
import Interactions from "@/components/characters/Interacions";

import { listAll } from "@/services/api";

export default async function Characters() {
  const listCharacters = await listAll();
  
  return (
    <>
      <Header />
      <Interactions list={ listCharacters } />
    </>
  );
}