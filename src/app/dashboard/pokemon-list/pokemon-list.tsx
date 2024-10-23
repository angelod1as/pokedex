import { db, PageProps } from "@/app/lib/db";
import React from "react";

type PokemonListProps = PageProps;

export const PokemonList = async ({ query, currentPage }: PokemonListProps) => {
  const pokemons = await db.getAllPokemons();

  const filteredPokemons = query
    ? pokemons.filter((item) => item.name.includes(query))
    : pokemons;

  return (
    <div>
      {filteredPokemons.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  );
};

export default PokemonList;
