import HeaderGlobal from "@/components/global/Header";
import Informations from "@/components/info/Informations";

export default function Info() {
    return (
      <>
        <HeaderGlobal navigate="/" title="Informações" />
        <Informations />
      </>
    );
  }