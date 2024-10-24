import React from "react";
import { PokemonCardSkeleton } from "./pokemon-card/skeleton";

export const PokemonListSkeleton = async () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {Array.from(Array(12)).map((_, index) => (
        <PokemonCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default PokemonListSkeleton;
