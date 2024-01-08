import { PokemonsResponse, SimplePokemon, PokemonGrid } from "@/pokemons";


export const metadata = {
    title: 'Favoritos',
    description: 'Pokémons favoritos del usuario',
};


export default async function FavoritesPage() {

    return (
        <div className="flex flex-col p-4">
            <span className="text-5xl my-2">Listado de Favoritos <small className="text-blue-500">Global State</small></span>
        </div>
    );
}