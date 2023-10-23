"use client";
import React from "react";
import CreateDealForm from "@/components/forms/CreateDealForm";
import DetailsHead from "@/components/DetailsHead";

const CreateProductDeal = () => {
  return (
    <div className="mx-auto max-w-5xl">
      <DetailsHead headerTitle={"Create Product Deal"} type={"create"} />
      <div className="mx-auto max-w-4xl rounded-xl bg-white px-5 py-5 shadow-md dark:bg-zinc-800">
        <CreateDealForm type={"Product"} />
      </div>
    </div>
  );
};

export default CreateProductDeal;
