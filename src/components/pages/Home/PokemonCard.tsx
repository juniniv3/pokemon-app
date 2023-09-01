import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

  import './Homes.scss';
import { Pokemon } from "@/models/Pokemon";

export default function PokemonCard({pokemon}:any) {
    const poke:Pokemon = pokemon as Pokemon;
  return (
  <Card>
    <CardHeader>
        <CardTitle>{poke.name}</CardTitle>
        <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
        <p>Card Content</p>
    </CardContent>
    <CardFooter>
        <p>Card Footer</p>
    </CardFooter>
    </Card>
  )
}
