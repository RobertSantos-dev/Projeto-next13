import HeaderGlobal from "@/components/global/Header";
import Card from "@/components/characterId/Card";

export type Props = { params: { id: string } }

export default function Characters({ params }: Props) {
  return (
    <>
      <HeaderGlobal title="Detalhes" navigate="/characters" />
      <Card id={ params.id } />
    </>
  );
}