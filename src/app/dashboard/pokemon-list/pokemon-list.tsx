import { db } from "@/app/lib/db";
import React, { Suspense } from "react";
import { PokemonCard } from "./pokemon-card";

type PokemonListProps = {
  query?: string;
};

export const PokemonList = async ({ query }: PokemonListProps) => {
  const { pokemons } = await db.getAllPokemons();
  // const pokemonData = await db.getSinglePokemon("bulbasaur");

  const filteredPokemons = query
    ? pokemons.filter((item) => item.name.includes(query))
    : pokemons;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {filteredPokemons.map((item) => (
        <Suspense key={item.name} fallback={<div>Loading...</div>}>
          <PokemonCard pokemon={item} />
        </Suspense>
      ))}
    </div>
  );
};

export default PokemonList;
