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
      />
      <div className="h-[50rem] rounded-xl bg-white p-2 shadow-md dark:bg-zinc-800">
        <DataTable
          columns={orderColumns}
          rows={orders}
          searchKeyword={searchKeyword}
          defaultSearchColumnField={urlSearchParamKey ?? "orderId"}
          defaultSortedColumn="date"
        />
      </div>
    </>
  );
};

export default Orders;
