import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdAdd, MdOutlineSearch } from "react-icons/md";

const Categories = () => {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Categories</h1>
      <div className="flex flex-col items-center justify-between gap-6 rounded-xl bg-white p-4 shadow-md dark:bg-zinc-800 dark:shadow-zinc-950 sm:flex-row">
        <div className="relative w-full max-w-sm">
          <Input type="text" placeholder="Search category" className="h-12 rounded-3xl border-none px-6 text-base font-medium" />
          <MdOutlineSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl" />
        </div>
        <Button className="rounded-3xl">
          <MdAdd className="mr-2 text-2xl" /> Add New Category
        </Button>
      </div>
    </div>
  );
};

export default Categories;
