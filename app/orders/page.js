"use client";

import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/table/DataTable";
import React, { useState } from "react";

const Orders = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <>
      <PageHeader
        title={"Orders"}
        searchInputPlaceholder={"Search by order ID"}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        showAddButton={false}
      />
      {/* <DataTable columns={customerColumns} rows={customers} searchKeyword={searchKeyword} defaultSearchColumnField={"orderId"} defaultSort="orderId"/> */}
    </>
  );
};

export default Orders;
