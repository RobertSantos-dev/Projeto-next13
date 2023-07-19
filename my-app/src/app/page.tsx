"use client";

import { useState, useEffect } from 'react';
// import Image from 'next/image';

import { listAll } from '@/services/api';
import Itens from '@/components/Home/Itens';
import styles from '../styles/page.module.css';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    listAll(setData);
  }, []);

  return (
    <main className={styles.main}>
      <Itens data={ data } />
      {/* { data.map((e: any, i) => (
        <Image
          src={ e.image }
          alt={ e.name }
          width={ 40 }
          height={ 40 }
          key={ i }
        />
      )) } */}
    </main>
  )
}
