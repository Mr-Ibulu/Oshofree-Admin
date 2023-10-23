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
      <DataTable columns={serviceColumns} rows={services} searchKeyword={searchKeyword} defaultSearchColumnField={"id"} defaultSort="id"/>
    </>
  );
};

export default Services;
