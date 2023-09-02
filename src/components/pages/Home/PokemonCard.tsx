import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Pokemon } from "@/models/Pokemon";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PokemonCard({pokemon}: any) {
    const poke:Pokemon = pokemon as Pokemon;
  return (
  <Card>
    <CardHeader className="grid justify-items-center">
        <CardTitle>{poke.name}</CardTitle>
        <CardDescription>ID: {poke.id}</CardDescription>
        <img  className="w-20 h-20 bg-" src={poke.sprites.other.dream_world.front_default} alt="" />

    </CardHeader>
    <CardContent>
        <div>
        {poke.types.map((type, index) =>{
            return <Badge className="mr-2" key={index+poke.name} >{type.type.name}</Badge>
        })}
        </div>
    
        <div className = "grid grid-cols-3 mt-3">
            <div><strong>{poke.base_experience}</strong> XP</div>
            <div className="text-center"><strong>{poke.height * 10}</strong> CM</div>
            <div className="text-end"><strong>{poke.weight / 10}</strong> KG</div>
        </div>
        
    </CardContent>
    </Card>
  )
}
