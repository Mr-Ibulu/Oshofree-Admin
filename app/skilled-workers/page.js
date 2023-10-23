"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/table/DataTable";
import { skilledWorkerColumns } from "./columns";
import { skilledWorkers } from "@/data/skilledWorkers";

const SkilledWorkers = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <>
      <PageHeader
        title={"Skilled Workers"}
        searchInputPlaceholder={"Search by name"}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        buttonTitle={"Add New Skilled Worker"}
        buttonLink={"/skilled-workers/create"}
      />
      <DataTable columns={skilledWorkerColumns} rows={skilledWorkers} searchKeyword={searchKeyword} defaultSearchColumnField={"name"} />
    </>
  );
};

export default SkilledWorkers;
