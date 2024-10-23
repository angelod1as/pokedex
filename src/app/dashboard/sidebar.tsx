import Link from "next/link";
import Navigation from "./navigation";
import { Logout } from "../components/Logout";

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link className="flex" href="/">
        Pokédex!
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <Navigation />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <form>
          <Logout />
        </form>
      </div>
    </div>
  );
}
