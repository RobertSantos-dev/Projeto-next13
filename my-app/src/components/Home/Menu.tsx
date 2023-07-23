"use client";

interface Props {
  icon: any,
  name: string,
  style: string,
}

export default function Menu({ icon, name, style }: Props) {
  return (
    <button type='button' className={ style }>
      <div>{ icon }</div>
      <p>{ name }</p>
    </button>
  );
}