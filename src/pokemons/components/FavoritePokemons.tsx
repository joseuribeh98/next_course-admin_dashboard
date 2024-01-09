'use client'

import { useAppSelector } from '@/store'
import { PokemonGrid } from './PokemonGrid'
import { useEffect, useState } from 'react'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritePokemons = () => {
    const favorites = useAppSelector(state => state.pokemon.favorites);
    const favoritesArray = Object.values(favorites);
/*     const [pokemons, setPokemons] = useState(favoritesArray);

    useEffect(() => {
        setPokemons(favoritesArray)
    }, [favoritesArray]) */
    return (
        <>
            {favoritesArray.length > 0 ?
                <PokemonGrid pokemons={favoritesArray} />
                :
                <NoFavorites />
            }
        </>
    )
}

const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={60} className="text-red-400" />
            <span className="text-xl text-gray-400">No hay pokémons favoritos</span>
        </div>
    )
}