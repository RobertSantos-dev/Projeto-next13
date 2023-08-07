import HeaderGlobal from "@/components/global/Header";
import Card from "@/components/characterId/Card";

interface Props { params: { id: string } }

export default function Characters({ params }: Props) {
  return (
    <>
      <HeaderGlobal title="Detalhes" />
      <Card />
    </>
  );
}