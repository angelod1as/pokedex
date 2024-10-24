import { Login } from "./components/Login";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center flex-grow gap-6">
      <h1 className="text-3xl font-bold">
        Welcome to <span className="font-black">Pokédex!</span>
      </h1>

      <Login />
    </div>
  );
}
