import React, { ReactNode, Suspense } from "react";
import { DashboardLogout } from "./dashboard-logout";
import ListAll from "./pokemon-list/pokemon-list";
import { Search } from "../components/search";
import PokemonListSkeleton from "./pokemon-list/skeleton";

export type PageProps = {
  searchParams?: Promise<{
    query?: string;
    type?: string;
    page?: string;
  }>;
  children?: ReactNode;
};

const Dashboard = async (props: PageProps) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="text-4xl font-black">Select your fighter!</h2>
      <div className="max-w-sm w-full">
        <Search />
      </div>
      <Suspense
        key={query + currentPage + "list"}
        fallback={<PokemonListSkeleton />}
      >
        <ListAll query={query} currentPage={currentPage} />
      </Suspense>
      <DashboardLogout />
    </div>
  );
};

export default Dashboard;
