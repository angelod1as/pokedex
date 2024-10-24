import React, { Suspense, FC } from "react";
import { DashboardLogout } from "./dashboard-logout";
import ListAll from "./pokemon-list/pokemon-list";
import { Search } from "../components/search";
import PokemonListSkeleton from "./pokemon-list/skeleton";

export type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
    query?: string;
    type?: string;
    page?: string;
  }>;
};

const Dashboard: FC<PageProps> = async (props) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="text-4xl font-black">Pokédex!</h2>
      <div className="max-w-sm w-full">
        <Suspense>
          <Search />
        </Suspense>
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
