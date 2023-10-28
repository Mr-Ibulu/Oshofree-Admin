"use client";

import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/table/DataTable";
import React, { useState } from "react";
import { customerColumns } from "./columns";
import { customers } from "@/data/customers";

const Customers = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <>
      <PageHeader
        title={"Customers"}
        searchInputPlaceholder={"Search by customer name"}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <div className="h-[50rem] rounded-xl bg-white p-2 shadow-md dark:bg-zinc-800">
        <DataTable
          columns={customerColumns}
          rows={customers}
          searchKeyword={searchKeyword}
          defaultSearchColumnField={"name"}
          defaultSortedColumn="dateJoined"
        />
      </div>
    </>
  );
};

export default Customers;
