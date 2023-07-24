"use client";

import { useRouter } from 'next/navigation'

interface Props {
  icon: any,
  name: string,
  style: string,
  path: string,
}

export default function Menu({ icon, name, style, path }: Props) {
  const route = useRouter();

  return (
    <button type='button' className={ style } onClick={ () => route.push(path) } >
      <div>{ icon }</div>
      <p>{ name }</p>
    </button>
  );
}