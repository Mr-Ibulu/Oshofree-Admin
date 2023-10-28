"use client";

import React, { useState } from "react";
import { productColumns } from "./columns";
import DataTable from "@/components/table/DataTable";
import { products } from "@/data/products";
import PageHeader from "@/components/PageHeader";

const Products = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <>
      <PageHeader
        title={"Product Deals"}
        searchInputPlaceholder={"Search by product ID"}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        buttonTitle={"Add New Product Deal"}
        buttonLink={"/products/create"}
      />
      <div className="h-[50rem] rounded-xl bg-white p-2 shadow-md dark:bg-zinc-800">
        <DataTable
          columns={productColumns}
          rows={products}
          searchKeyword={searchKeyword}
          defaultSearchColumnField={"id"}
          defaultSortedColumn="updatedOn"
        />
      </div>
    </>
  );
};

export default Products;
