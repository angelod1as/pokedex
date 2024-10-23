import { db } from "@/app/lib/db";
import React from "react";

type PokemonListProps = {
  query?: string;
  type?: string;
};

export const PokemonList = async ({ query, type }: PokemonListProps) => {
  const pokemons = await db.getAllPokemons();
  console.log(pokemons);

  const filteredPokemons = query
    ? pokemons.filter((item) => item.name.includes(query))
    : // .filter((item) => item.type.includes(type))
      pokemons;

  return (
    <div>
      {filteredPokemons.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  );
};

export default PokemonList;
