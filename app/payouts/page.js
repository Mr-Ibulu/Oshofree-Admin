"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/table/DataTable";
import { payoutColumns } from "./columns";
import { payouts } from "@/data/payouts";

const Payouts = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <>
      <PageHeader
        title={"Payouts"}
        searchInputPlaceholder={"Search by Reference ID"}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        buttonLink={"/payouts/create"}
        buttonTitle={"Add New Beneficiary"}
      />
      <DataTable columns={payoutColumns} rows={payouts} searchKeyword={searchKeyword} defaultSearchColumnField={"name"} defaultSort="name" />
    </>
  );
};

export default Payouts;
