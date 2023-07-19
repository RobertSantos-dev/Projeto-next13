import styles from '../../styles/page.module.css';

type Props = {
  data: Array<{ image: string, name: string }>
}

export default function Itens({ data }: Props) {
  return(
    <section className={ styles.itens }>
      { data.map((e: any, i: number) => (
          <figure className={ styles.item } key={ i }>
            <img src={ e.image } alt={ e.name } width={ 140 } />
            <figcaption>{ e.name }</figcaption>
          </figure>
        )) }
    </section>
  );
}