import { useState } from "react";
import { createContext } from "react";

export const ContextFavourite = createContext();

export function FavouriteContext({ children }) {

    const [favourites, setFavourites] = useState([])

    const addFavourites = (product) => {
        setFavourites([...favourites, product])
    }

    const deleteFavourites = (id) => {
        const newFavourites = favourites.filter((item) => item.id !== id)
        setFavourites(newFavourites)
    }

    return <ContextFavourite.Provider value={{
        favourites,
        addFavourites,
        deleteFavourites,
    }}>{children}</ContextFavourite.Provider>
}