import { Card } from "@/app/components/card";
import { Tag } from "@/app/components/tag";
import { db, ListedPokemon } from "@/app/lib/db";
import Image from "next/image";
import React from "react";
import { Favourite } from "./favourite/favourite";

type PokemonCardProps = {
  pokemon: ListedPokemon;
};

export const PokemonCard = async ({
  pokemon: listedPokemon,
}: PokemonCardProps) => {
  const pokemon = await db.getSinglePokemonByUrl(listedPokemon.url);
  if (!pokemon) return null;

  const image =
    pokemon.sprites.official || pokemon.sprites.front_default || null;

  return (
    <Card>
      <div className="absolute top-2 right-3">
        <Favourite id={pokemon.id} />
      </div>
      {image && (
        <Image src={image} alt={pokemon.name} width={200} height={200} />
      )}
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{pokemon.name}</h3>
      </div>
      <div>
        {pokemon.types.map(({ type: { name } }) => (
          <Tag key={name} label={name} />
        ))}
      </div>
    </Card>
  );
};
