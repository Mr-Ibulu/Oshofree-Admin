"use client";

import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/table/DataTable";
import React, { useEffect, useState } from "react";
import { orderColumns } from "./columns";
import { orders } from "@/data/orders";

const Orders = ({ searchParams }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const urlSearchParamKey = Object.keys(searchParams)[0];

  useEffect(() => {
    if (searchParams[urlSearchParamKey]) {
      setSearchKeyword(searchParams[urlSearchParamKey]);
    }
  }, [searchParams, urlSearchParamKey]);

  return (
    <>
      <PageHeader
        title={"Orders"}
        searchInputPlaceholder={`Search by ${urlSearchParamKey ?? "order ID"} `}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        showAddButton={false}
      />
      <DataTable
        columns={orderColumns}
        rows={orders}
        searchKeyword={searchKeyword}
        defaultSearchColumnField={urlSearchParamKey ?? "orderId"}
        defaultSort="date"
      />
    </>
  );
};

export default Orders;
