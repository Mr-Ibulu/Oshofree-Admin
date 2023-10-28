"use client";

import React, { useState } from "react";
import { categoryColumns } from "./columns";
import { categories } from "@/data/categories";
import DataTable from "@/components/table/DataTable";
import PageHeader from "@/components/PageHeader";

const Categories = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <>
      <PageHeader
        title={"Categories"}
        searchInputPlaceholder={"Search by category name"}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        buttonTitle={"Add New Category"}
        buttonLink={"/categories/create"}
      />
      <div className="h-[50rem] rounded-xl bg-white p-2 shadow-md dark:bg-zinc-800">
        <DataTable
          columns={categoryColumns}
          rows={categories}
          searchKeyword={searchKeyword}
          defaultSearchColumnField={"title"}
          defaultSortedColumn="updatedOn"
        />
      </div>
    </>
  );
};

export default Categories;
