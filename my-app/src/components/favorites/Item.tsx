"use client";

import { TFavorite } from "@/services/storage";

export default function Item({ id, name, image }: TFavorite) {
  return (
    <li key={ id }>
      <p>{ name }</p>
      <p>{ image }</p>
    </li>
  );
}