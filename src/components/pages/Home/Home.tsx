import { useEffect, useState } from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { getAllPokemons } from "@/services/pokemonService";
import { Pokemon } from "@/models/Pokemon";
import PokemonCard from "./PokemonCard";

export default function Home() {
  const offsetBase = 20;
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState<number>(offsetBase);

  async function getPokemons(searchOffset: number) {
    const pokemonList: Pokemon[] = await getAllPokemons(searchOffset);
    addPokemonsToList(pokemonList);
  }

  function addPokemonsToList(newPokemonsToAdd: Pokemon[]){
    if (!pokemons.length) {
      setPokemons(newPokemonsToAdd);
      return;
    }
    const mergePokemonList: Pokemon[] = [...pokemons , ...newPokemonsToAdd];    
    setPokemons(mergePokemonList);
    setOffset(offset + offsetBase);
  }
  useEffect(() => {
    if (offset === offsetBase) {
      getPokemons(offset);
    }
  }, [pokemons])
  
  return (
    <>
      <Header></Header>
      <aside></aside>
      <main className="p-10">
        <div className="grid grid-cols-5 gap-8">
        {
          pokemons.map( poke => {
            return <PokemonCard pokemon={poke} key={poke.id} ></PokemonCard>
          })
        }
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}
