type Database = {
  login: (username: string) => void;
  logout: () => void;
  getUsername: () => string | null;
};

// The DB in this app is... LocalStorage!
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
};
