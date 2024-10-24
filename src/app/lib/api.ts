const API_URL = "https://pokeapi.co/api/v2";

type Api = {
  getAllPokemons: () => Promise<{
    pokemons: ListedPokemon[];
    total: number;
    next: string;
    previous: string;
  }>;
  getSinglePokemonByUrl: (url: string) => Promise<Pokemon | null>;
};

export const api: Api = {
  getAllPokemons: async () => {
    const query = "?limit=100000&offset=0";
    const url = `${API_URL}/pokemon${query}`;
    const data = await fetch(url);

    if (!data.ok) return { pokemons: [], total: 0, next: "", previous: "" };

    const json = await data.json();

    return {
      pokemons: json.results,
      total: json.count,
      next: json.next,
      previous: json.previous,
    };
  },
  getSinglePokemonByUrl: async (url: string) => {
    const data = await fetch(url);
    if (!data.ok) return null;
    const pokemon: APIPokemon = await data.json();

    // sending less data to the client
    const filteredPokemon: Pokemon = {
      abilities: pokemon.abilities,
      base_experience: pokemon.base_experience,
      height: pokemon.height,
      id: pokemon.id,
      name: pokemon.name,
      stats: pokemon.stats,
      types: pokemon.types,
      weight: pokemon.weight,
      sprites: {
        front_default: pokemon.sprites.front_default,
        official: pokemon.sprites.other["official-artwork"].front_default,
      },
    };

    return filteredPokemon;
  },
};

type APIPokemon = Pokemon & {
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};

export type ListedPokemon = {
  name: string;
  url: string;
};

type namePair = {
  name: string;
  url: string;
};

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: Array<{
    is_hidden: true;
    slot: number;
    ability: namePair;
  }>;
  sprites: {
    front_default: string;
    official: string;
  };
  stats: Array<{
    stat: namePair;
    effort: number;
    base_stat: number;
  }>;
  types: Array<{
    slot: number;
    type: namePair;
  }>;
};
