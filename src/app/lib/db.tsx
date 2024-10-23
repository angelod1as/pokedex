const API_URL = "https://pokeapi.co/api/v2";

// type LocalStorageData = {};

// The DB in this app is... LocalStorage!

type Database = {
  login: (username: string) => void;
  logout: () => void;
  getUsername: () => string | null;
  getPokemons: ({ query, currentPage }: PageProps) => Promise<Pokemon[]>;
  getAllPokemons: () => Promise<Pokemon[]>;
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
    if (!data.ok) {
      return [];
    }
    const pokemons: Pokemon[] = (await data.json()).results;
    return pokemons;
  },
  getPokemons: async ({ query, currentPage }) => {
    console.log(":DEV query: ", query);
    const url = `${API_URL}/pokemon/${query}`;
    console.log(":DEV url: ", url);
    if (!query) {
      return [];
    }

    const data = await fetch(url);

    if (!data.ok) {
      return [];
    }

    const pokemons: Pokemon[] = (await data.json()).results;
    return pokemons;
  },
};

export type Pokemon = {
  name: string;
};

export type PageProps = {
  query?: string;
  currentPage?: number;
};
