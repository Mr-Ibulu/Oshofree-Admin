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
      <DataTable columns={categoryColumns} rows={categories} searchKeyword={searchKeyword} defaultSearchColumnField={"title"} defaultSort="title" />
    </>
  );
};

export default Categories;
