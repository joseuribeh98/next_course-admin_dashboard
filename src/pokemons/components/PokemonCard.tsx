'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SimplePokemon } from '..'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggleFavorite } from '@/store/pokemon/pokemonSlice'

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
    const { id, name } = pokemon

    const isFavorite = useAppSelector(state => !!state.pokemon.favorites[id])
    const dispatch = useAppDispatch()

    const onToggle = () => {
        dispatch(toggleFavorite(pokemon))
    }

    return (
        <div className="mx-auto mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6 bg-gray-800 border-b">
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                        alt={name}
                        width={100}
                        height={100}
                        className="mx-auto"
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <div className="mt-5">
                        <Link href={`/dashboard/pokemons/${name}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">

                            Conoce más
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div onClick={onToggle} className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer" >

                        <div className="text-red-600">
                            {isFavorite ? <IoHeart size={26} /> : <IoHeartOutline size={26} />}
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                {isFavorite ? "Es favorito" : "Aún no es favorito"}
                            </p>
                            <p className="text-xs text-gray-500">View your campaigns</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
