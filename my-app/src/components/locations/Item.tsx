import { IoCopy } from "react-icons/io5";

import style from "../../styles/locations/page.module.css";

type Props = {
  name: string, type: string, dimension: string, residents: string[]
}

export default function Item(props: Props) {
  return (
    <li className={ style.li_item }>
      <div className={ style.div_info_location }>
        <div><h3>{ props.name }</h3></div>
        <div>
          <p>
            <span>Tipo:</span>
            {' '}
            <span>{ props.type }</span>
          </p>
          <p>
            <span>Dimenção:</span>
            {' '}
            <span>{ props.dimension }</span>
          </p>
          <p>
            <span>Residentes:</span>
            {' '}
            <span>{ props.residents.length }</span>
          </p>
        </div>
      </div>
      <div className={ style.div_button_copy }>
        <button>
          <IoCopy />
        </button>
      </div>
    </li>
  );
}