import { db } from "./db";

// This method leads to a "flash"
// If this was a proper database, we would do this server-side -- no flash!
export const isLoggedIn = () => {
  const username = db.getUsername();
  if (!username) return false;
  return true;
};
