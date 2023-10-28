"use client";

import React, { useState } from "react";
import DataTable from "@/components/table/DataTable";
import { vendorColumns } from "./columns";
import { vendors } from "@/data/vendors";
import PageHeader from "@/components/PageHeader";

const Vendors = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <>
      <PageHeader
        title={"Vendors"}
        searchInputPlaceholder={"Search by vendor name"}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        buttonTitle={"Add New Vendor"}
        buttonLink={"/vendors/create"}
      />
      <div className="h-[50rem] rounded-xl bg-white p-2 shadow-md dark:bg-zinc-800">
        <DataTable
          columns={vendorColumns}
          rows={vendors}
          searchKeyword={searchKeyword}
          defaultSearchColumnField={"name"}
          defaultSortedColumn="dateJoined"
        />
      </div>
    </>
  );
};

export default Vendors;
