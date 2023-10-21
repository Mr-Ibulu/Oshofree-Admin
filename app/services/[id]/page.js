"use client";
import React from "react";
import DealDetails from "@/components/forms/DealDetails";
import { findService } from "@/lib/utils";

const ViewServiceDeal = ({ params }) => {
  const dealDetails = findService(params.id);
  return <DealDetails backUrl={"/services"} dealDetails={dealDetails} />;
};

export default ViewServiceDeal;
