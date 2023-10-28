"use client";

import React, { useState } from "react";
import { serviceColumns } from "./columns";
import DataTable from "@/components/table/DataTable";
import { services } from "@/data/services";
import PageHeader from "@/components/PageHeader";

const Services = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <>
      <PageHeader
        title={"Service Deals"}
        searchInputPlaceholder={"Search by service ID"}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        buttonTitle={"Add New Service Deal"}
        buttonLink={"/services/create"}
      />
      <div className="h-[50rem] rounded-xl bg-white p-2 shadow-md dark:bg-zinc-800">
        <DataTable
          columns={serviceColumns}
          rows={services}
          searchKeyword={searchKeyword}
          defaultSearchColumnField={"id"}
          defaultSortedColumn="updatedOn"
        />
      </div>
    </>
  );
};

export default Services;
