export type TRes = {
  id: number,
  name: string,
  status: string,
  species: string,
  origin: { name: string },
  location: { name: string },
  episode: string[],
  image: string
}


export type TFavorite = {
  id: number,
  name: string,
  image: string
};


export const setStorage = (key: string, value: TFavorite | TFavorite[]) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const getStorage = (key: string) => localStorage.getItem(key);


// Adicionar/remover valor nos favoritos
export const addStorage = (key: string, value: TFavorite) => {
  const getValue = getStorage(key);

  if (getValue) {
    const setNewValue = [...JSON.parse(getValue), value];
    setStorage(key, setNewValue);
  } else {
    setStorage(key, [value]);
  }
}

export const removeStorage = (key: string, value: number) => {
    const getValue = getStorage(key);

    if (getValue) {
      const setValue = JSON.parse(getValue).filter((e: TFavorite) => e.id !== value);
      setStorage(key, setValue);
    }
  }


// Renderizar valor se caso for favorito
export const getFavoritesId = (key: string, id: number) => {
  const list = getStorage(key);
  if (list) {
    const value = JSON.parse(list).find((e: TFavorite) => e.id === id);
    return value;
  }

  return false;
}
