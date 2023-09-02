import { Pokemon } from "@/models/Pokemon";
import { PokemonBaseInfo, SearchResult } from "@/models/PokemonSearch";

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const fetchAllPokemons = async (searchOffset?: number): Promise<SearchResult> => {
    try {
        const finalURL: string = `${BASE_URL}?offset=${searchOffset}&limit=20`
        const response = await fetch(finalURL);
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

export async function getAllPokemons(searchOffset?: number ): Promise<Pokemon[]> {
    const allPokemonsData: Pokemon[] = [];
    try {
        const searchAllPokemonsResult: SearchResult = await fetchAllPokemons(searchOffset);
        await Promise.all( searchAllPokemonsResult.results.map(async pokemon => {
            const pokemonFullInfo = await fetchPokemon(pokemon);
            allPokemonsData.push(pokemonFullInfo);
        }))
        return allPokemonsData;
    } catch (error) {
        throw new Error('Fetching pokemons error');
    }
}