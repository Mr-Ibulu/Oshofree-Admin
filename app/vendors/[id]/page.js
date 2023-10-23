"use client";

import React from "react";
import VendorDetailsForm from "@/components/forms/VendorDetailsForm";
import { findVendor } from "@/lib/utils";
import DetailsHead from "@/components/DetailsHead";
import DetailsImageContainer from "@/components/DetailsImageContainer";

const VendorDetails = ({ params }) => {
  const vendorDetails = findVendor(params.id);
  return (
    <div className="mx-auto max-w-5xl">
      <DetailsHead goBackLink={"/vendors"} headerTitle={vendorDetails.companyName} />
      <div className="mx-auto flex flex-col gap-8 rounded-xl bg-white px-5 py-5 shadow-md dark:bg-zinc-800 sm:flex-row">
        <DetailsImageContainer imageSrc={vendorDetails.image} alt={vendorDetails.companyName} />
        <VendorDetailsForm vendorDetails={vendorDetails} />
      </div>
    </div>
  );
};

export default VendorDetails;
