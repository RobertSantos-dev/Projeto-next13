import { AiFillInfoCircle } from "react-icons/ai";

export default function Interactions() {
  return (
    <section>
      <div>
        <AiFillInfoCircle />
        <span>Personagens</span>
      </div>
      <div>
        <input type="text" maxLength={ 30 } placeholder="Pesquisar..." />
      </div>
    </section>
  );
}