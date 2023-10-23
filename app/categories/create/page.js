"use client";

import React from "react";
import DetailsHead from "@/components/DetailsHead";
import { CreateCategoryForm } from "@/components/forms/CreateCategoryForm";

const CreateCategory = () => {
  return (
    <div className="mx-auto max-w-5xl">
      <DetailsHead headerTitle={"Create Category"} type={"create"} />
      <div className="mx-auto max-w-4xl rounded-xl bg-white px-5 py-5 shadow-md dark:bg-zinc-800">
        <CreateCategoryForm />
      </div>
    </div>
  );
};

export default CreateCategory;
