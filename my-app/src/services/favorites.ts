import { ComponentState } from "react";

import { addStorage, removeStorage } from "../services/storage";


type TParameters = {
  setFavorite: ComponentState,
  setLoading: ComponentState,
  id: string | number
};


export const favoriteTrue = (params: TParameters) => {
  const { setFavorite, setLoading, id } = params;

  setLoading(true);
  setFavorite(true);
  
  addStorage('favorites', Number(id));

  setTimeout(() => {
    setLoading(false);
  }, 1500);
}

export const favoriteFalse = (params: TParameters) => {
  const { setFavorite, setLoading, id } = params;

  setLoading(true);
  setFavorite(false);

  removeStorage('favorites', Number(id));

  setTimeout(() => {
    setLoading(false);
  }, 1500);
}
