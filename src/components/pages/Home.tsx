import { useEffect } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { getAllPokemons } from "@/services/pokemonService";
import { Pokemon } from "@/models/Pokemon";

export default function Home() {

  async function getPokemons() {
    const pokemonList: Pokemon[] = await getAllPokemons();
    console.log(pokemonList)
  }
  useEffect(() => {
    getPokemons();
  }, [])
  
  return (
    <>
      <Header></Header>
      <aside></aside>
      <main></main>
      <Footer></Footer>
    </>
  )
}
