import { db } from "@/app/lib/db";
import React from "react";

export const ListAll = async () => {
  const pokemons = await db.getAllPokemons();

  return (
    <div>
      {pokemons.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  );
};

export default ListAll;
