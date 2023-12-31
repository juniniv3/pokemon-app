import { useEffect, useState } from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { getAllPokemons } from "@/services/pokemonService";
import { Pokemon } from "@/models/Pokemon";
import PokemonCard from "./PokemonCard";
import { Input } from "@/components/ui/input"
import { useTheme } from "@/components/theme-provider";

export default function Home() {
  const { setTheme } = useTheme()
  setTheme('system');
  const offsetBase = 20;
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState<number>(offsetBase);

  async function getPokemons(searchOffset: number) {
    const pokemonList: Pokemon[] = await getAllPokemons(searchOffset);
      addPokemonsToList(pokemonList);
  }

  function addPokemonsToList(newPokemonsToAdd: Pokemon[]) {
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
  }, []);
  
  return (
    <>
      <Header></Header>
      <aside></aside>
      <main className="p-10">
      <Input type="text" placeholder="Search Pokemon" className="w-80 my-10 mt-14 dark:text-white" />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {
          pokemons.map( poke => {
            return <PokemonCard pokemon={poke} key={poke.id} ></PokemonCard>
          })
        }
        </div>
        <p className="flex justify-center pt-8 dark:text-white text-xl" onClick={()=> {getPokemons(offset)}}><strong>Load more pokemons 👌</strong></p>
      </main>
      <Footer></Footer>
    </>
  )
}
