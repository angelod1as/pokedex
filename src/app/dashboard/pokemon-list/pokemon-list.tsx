import { db } from "@/app/lib/db";
import React, { FC, Suspense } from "react";
import { PokemonCard } from "./pokemon-card/pokemon-card";
import { POKEMONS_PER_PAGE } from "@/app/lib/constants";
import { PokemonCardSkeleton } from "./pokemon-card/skeleton";

type PokemonListProps = {
  query?: string;
  currentPage?: number;
};

export const PokemonList: FC<PokemonListProps> = async ({
  query,
  currentPage,
}) => {
  const { pokemons } = await db.getAllPokemons();

  const filteredPokemons = query
    ? pokemons.filter((item) => item.name.includes(query))
    : pokemons;

  const firstPokemonIndex = currentPage
    ? (currentPage - 1) * POKEMONS_PER_PAGE
    : 0;

  const limitedPokemons = filteredPokemons.splice(
    firstPokemonIndex,
    POKEMONS_PER_PAGE
  );

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {limitedPokemons.length === 0 && <p>No pokemons found</p>}
      {limitedPokemons.map((item) => (
        <Suspense key={item.name} fallback={<PokemonCardSkeleton />}>
          <PokemonCard pokemon={item} />
        </Suspense>
      ))}
    </div>
  );
};

export default PokemonList;
