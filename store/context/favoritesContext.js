import { useState } from "react";

const { createContext } = require("react");

export const FavoritesContext = createContext({
  ids: [],
  addToFavorite: (id) => {},
  removeFromFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const addToFavorite = (id) => setFavorites((prevState) => [...prevState, id]);
  const removeFromFavorite = (id) =>
    setFavorites((prevState) => prevState.filter((item) => item !== id));
  return (
    <FavoritesContext.Provider
      value={{
        ids: favorites,
        addToFavorite,
        removeFromFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;