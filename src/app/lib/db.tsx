// type LocalStorageData = {};

// The DB in this app is... LocalStorage!
export const db = {
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
    const data = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    const pokemons: Pokemon[] = (await data.json()).results;
    return pokemons;
  },
};

export type Pokemon = {
  name: string;
};
