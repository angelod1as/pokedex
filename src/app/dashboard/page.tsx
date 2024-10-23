import React, { Suspense } from "react";
import { DashboardLogout } from "./dashboard-logout";
import ListAll from "./pokemon-list/pokemon-list";
import { Search } from "../components/search";

type PageProps = {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
};

const Dashboard = async (props: PageProps) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div>
      <DashboardLogout />
      <Search />
      <Suspense key={query + currentPage} fallback={<div>Loading...</div>}>
        <ListAll query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
};

export default Dashboard;
