import { Pokemon } from "@/models/Pokemon";
import { PokemonBaseInfo, SearchResult } from "@/models/PokemonSearch";

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

const fetchAllPokemons = async () => {
    try {
        const response = await fetch(`${BASE_URL}`);
        const jsonResponse: SearchResult = await response.json();
        return jsonResponse;
    } catch (error) {
        throw new Error('Fetching pokemons error');
    }
}

async function fetchPokemon(pokemonBaseInfo: PokemonBaseInfo ): Promise<Pokemon> {
    try {
        const response = await fetch(pokemonBaseInfo.url);
        const pokemonFullInfo: Pokemon = await response.json();
        return pokemonFullInfo;
    } catch (error) {
        throw new Error('Fetching pokemons error');
    }
}

export async function getAllPokemons(): Promise<Pokemon[]> {
    const allPokemonsData: Pokemon[] = [];
    try {
        const searchAllPokemonsResult = await fetchAllPokemons();
        searchAllPokemonsResult.results.forEach(async pokemon => {
            const pokemonFullInfo = await fetchPokemon(pokemon);
            allPokemonsData.push(pokemonFullInfo);
        });
        return allPokemonsData;
    } catch (error) {
        throw new Error('Fetching pokemons error');
    }
}