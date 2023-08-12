import { ComponentState } from "react";

import { addStorage, removeStorage, TFavorite } from "../services/storage";


type TParameters = {
  setFavorite: ComponentState,
  setLoading: ComponentState,
  res: TFavorite
};


export const favoriteTrue = (params: TParameters) => {
  const { setFavorite, setLoading, res } = params;

  setLoading(true);
  setFavorite(true);
  
  addStorage('favorites', res);

  setTimeout(() => {
    setLoading(false);
  }, 1500);
}

export const favoriteFalse = (params: TParameters) => {
  const { setFavorite, setLoading, res } = params;

  setLoading(true);
  setFavorite(false);

  removeStorage('favorites', res.id);

  setTimeout(() => {
    setLoading(false);
  }, 1500);
}
