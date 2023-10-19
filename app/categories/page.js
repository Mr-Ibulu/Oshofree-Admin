"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdAdd, MdOutlineSearch } from "react-icons/md";
import { categoryColumns } from "./columns";
import { categories } from "@/data/categories";
import DataTable from "@/components/table/DataTable";
import Link from "next/link";

const Categories = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">Categories</h1>
      <div className="mb-8 flex flex-col items-center justify-between gap-6 rounded-xl bg-white p-4 shadow-md dark:bg-zinc-800 dark:shadow-zinc-950 sm:flex-row">
        <div className="relative w-full max-w-sm">
          <Input
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            type="text"
            placeholder="Search category name"
            className="h-12 rounded-3xl border-none px-6 text-base font-medium shadow-inner focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
          />
          <MdOutlineSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl" />
        </div>
        <Button asChild>
          <Link href={"/categories/create"} className="rounded-3xl">
            <MdAdd className="mr-2 text-2xl" /> Add New Category
          </Link>
        </Button>
      </div>
      <DataTable columns={categoryColumns} rows={categories} searchKeyword={searchKeyword} defaultSearchColumnField={"title"} />
    </>
  );
};

export default Categories;
