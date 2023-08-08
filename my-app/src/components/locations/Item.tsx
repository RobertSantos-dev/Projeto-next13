"use client";

import { IoCopy } from "react-icons/io5";
import copy from "copy-to-clipboard";

import style from "../../styles/locations/page.module.css";

interface IParams {
  name: string,
  type: string,
  dimension: string,
  residents: string[],
}

interface IProps extends IParams {
  fontOne: { className: string },
  fontTwo: { className: string },
  fontTree: { className: string },
}

const copyClick = ({ name, type, dimension, residents }: IParams) => {
  copy(JSON.stringify({
      name,
      type,
      dimension,
      residents: residents.length
    }));
};

export default function Item(props: IProps) {
  const { name, type, dimension, residents } = props;

  return (
    <li className={ style.li_item }>
      <div className={ style.div_info_location }>
        <div className={ style.div_info_name }>
          <h3 className={ props.fontOne.className }>{ name }</h3>
        </div>
        <div className={ style.div_info_details }>
          <p>
            <span className={ `${style.span_keys} ${props.fontTree.className}` }>
              Tipo:
            </span>
            {' '}
            <span className={ `${style.span_values} ${props.fontTwo.className}` }>
              { type }
            </span>
          </p>
          <p>
            <span className={ `${style.span_keys} ${props.fontTree.className}` }>
              Dimenção:
            </span>
            {' '}
            <span className={ `${style.span_values} ${props.fontTwo.className}` }>
              { dimension === 'unknown' ? 'Desconhecido(a)' : dimension }
            </span>
          </p>
          <p>
            <span className={ `${style.span_keys} ${props.fontTree.className}` }>
              Residentes:
            </span>
            {' '}
            <span className={ `${style.span_values} ${props.fontTwo.className}` }>
              { residents.length }
            </span>
          </p>
        </div>
      </div>
      <div className={ style.div_button_copy }>
        <button onClick={ () => {
          copyClick({ name, type, dimension, residents })
        } }>
          <IoCopy />
        </button>
      </div>
    </li>
  );
}