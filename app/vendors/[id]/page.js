"use client";

import React from "react";
import VendorDetailsForm from "@/components/forms/VendorDetailsForm";
import { findVendor } from "@/lib/utils";
import DetailsHead from "@/components/DetailsHead";
import DetailsImageContainer from "@/components/DetailsImageContainer";
import { Switch } from "@/components/ui/switch";

const VendorDetails = ({ params }) => {
  const vendorDetails = findVendor(params.id);
  return (
    <div className="mx-auto max-w-5xl">
      <DetailsHead goBackLink={"/vendors"} headerTitle={vendorDetails.companyName} />
      <div className="mx-auto flex flex-col flex-wrap gap-8 rounded-xl bg-white px-5 py-5 shadow-md dark:bg-zinc-800 sm:flex-row">
        <div className="w-full">
          <div className="flex items-center gap-3">
            <span>Suspend Account</span>
            <Switch />
          </div>
        </div>
        <DetailsImageContainer imageSrc={vendorDetails.image} alt={vendorDetails.companyName} />
        <div className="grow">
          <div className="mb-5 space-x-3 px-3">
            <span>ID:</span> <span>{vendorDetails.id}</span>
          </div>
          <div className="mb-5 space-x-3 px-3">
            <span>Joined:</span> <span>{vendorDetails.dateJoined.toLocaleDateString()}</span>
          </div>
          <div className="mb-5 space-x-3 px-3">
            <span>Available Deals:</span> <span>{vendorDetails.dealsAvailable}</span>
          </div>
          <div className="mb-5 space-x-3 px-3">
            <span>Orders Fullfilled:</span> <span>{vendorDetails.ordersFulfilled}</span>
          </div>
          <div className="mb-5 space-x-3 px-3">
            <span>Followers:</span> <span>{vendorDetails.follows}</span>
          </div>
          <VendorDetailsForm vendorDetails={vendorDetails} />
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
