import Image from 'next/image';
import styles from '../../styles/page.module.css';

type Props = {
  data: Array<{ image: string, name: string }>
}

export default function Itens({ data }: Props) {
  return(
    <section className={ styles.itens }>
      { data.map((e: any) => (
          <figure className={ styles.item } key={ e.id }>
            <Image
              src={ e.image }
              alt={ e.name }
              width={ 125 }
              height={ 125 }
            />
            <figcaption>{ e.name }</figcaption>
          </figure>
        )) }
    </section>
  );
}