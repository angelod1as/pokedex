import React from "react";
import { db } from "../lib/db";
import { Select } from "./Select";

export const AbilitiesFilter = async () => {
  const types = await db.getTypes();

  return (
    <div>
      <Select options={types} label="Type" queryLabel="type" />
    </div>
  );
};
