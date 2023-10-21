"use client";
import React from "react";
import DealDetails from "@/components/forms/DealDetails";
import { findProduct } from "@/lib/utils";

const ViewDeal = ({ params }) => {
  const dealDetails = findProduct(params.id);
  return <DealDetails backUrl={"/products"} dealDetails={dealDetails} />;
};

export default ViewDeal;
