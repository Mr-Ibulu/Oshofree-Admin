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
        searchInputPlaceholder={"Search vendor name"}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        buttonTitle={"Add New Vendor"}
        buttonLink={"/vendors/create"}
      />
      <DataTable columns={vendorColumns} rows={vendors} searchKeyword={searchKeyword} defaultSearchColumnField={"name"} />
    </>
  );
};

export default Vendors;
