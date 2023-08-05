type Props = {
  name: string, type: string, dimension: string, residents: string[]
}

export default function Item(props: Props) {
  return (
    <li>
      <div>
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
      <div>
        <button>COPIAR</button>
      </div>
    </li>
  );
}