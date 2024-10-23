import React, { Suspense } from "react";
import { DashboardLogout } from "./dashboard-logout";
import ListAll from "./pokemon-list/pokemon-list";
import { Search } from "../components/search";
import { AbilitiesFilter } from "../components/abilities-filter";

type PageProps = {
  searchParams?: Promise<{
    query?: string;
    type?: string;
    page?: string;
  }>;
};

const Dashboard = async (props: PageProps) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const type = searchParams?.type || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div>
      <DashboardLogout />
      <Search />
      <Suspense
        key={type + currentPage + "abilities"}
        fallback={<div>Loading...</div>}
      >
        <AbilitiesFilter type={type} />
      </Suspense>
      <Suspense
        key={query + currentPage + "list"}
        fallback={<div>Loading...</div>}
      >
        <ListAll query={query} type={type} />
      </Suspense>
    </div>
  );
};

export default Dashboard;
