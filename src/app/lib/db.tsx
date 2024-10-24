const API_URL = "https://pokeapi.co/api/v2";

// type LocalStorageData = {};

// The DB in this app is... LocalStorage!

type Database = {
  login: (username: string) => void;
  logout: () => void;
  getUsername: () => string | null;
  getAllPokemons: () => Promise<{
    pokemons: ListedPokemon[];
    total: number;
    next: string;
    previous: string;
  }>;
  getSinglePokemonByUrl: (url: string) => Promise<Pokemon | null>;
  // getSinglePokemon: (pokemonName: string) => Promise<Pokemon | null>;
};

export const db: Database = {
  login: (username: string) => {
    localStorage.setItem("username", username);
  },
  logout: () => {
    localStorage.setItem("username", "");
  },
  getUsername: () => {
    return localStorage.getItem("username");
  },
  getAllPokemons: async () => {
    const query = "?limit=100000&offset=0";
    const data = await fetch(`${API_URL}/pokemon${query}`);

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
  // getSinglePokemon: async (pokemonName) => {
  //   const data = await fetch(`${API_URL}/pokemon/${pokemonName}`);
  //   if (!data.ok) return null;
  //   const pokemon = await data.json();

  //   // sending less data to the client
  //   const filteredPokemon: Pokemon = {
  //     abilities: pokemon.abilities,
  //     base_experience: pokemon.base_experience,
  //     height: pokemon.height,
  //     id: pokemon.id,
  //     name: pokemon.name,
  //     stats: pokemon.stats,
  //     types: pokemon.types,
  //     weight: pokemon.weight,
  //     sprites: {
  //       front_default: pokemon.sprites.front_default,
  //     },
  //   };

  //   return filteredPokemon;
  // },
};

type namePair = {
  name: string;
  url: string;
};

export type ListedPokemon = {
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

type APIPokemon = Pokemon & {
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};
