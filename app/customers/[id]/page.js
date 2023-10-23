"use client";

import DetailsHead from "@/components/DetailsHead";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { findCustomer } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const CustomerDetails = ({ params }) => {
  const customerDetails = findCustomer(params.id);

  return (
    <div className="mx-auto max-w-5xl">
      <DetailsHead headerTitle={customerDetails.name} />
      <div className="mx-auto flex flex-col flex-wrap gap-8 rounded-xl bg-white px-5 py-5 shadow-md dark:bg-zinc-800 sm:flex-row">
        <div className="w-full">
          <div className="flex items-center gap-3">
            <span>Suspend Account</span>
            <Switch />
          </div>
        </div>
        <div className="grow">
          <div className="mb-5 space-x-3 px-3">
            <span>Customer ID:</span> <span>{customerDetails.id}</span>
          </div>
          <div className="mb-5 space-x-3 px-3">
            <span>Account Status:</span> <span>{customerDetails.accountStatus}</span>
          </div>
          <div className="mb-5 space-x-3 px-3">
            <span>Joined:</span> <span>{customerDetails.dateJoined.toLocaleDateString()}</span>
          </div>
          <div className="mb-5 space-x-3 px-3">
            <span>Total Orders:</span> <span>{customerDetails.totalOrders}</span>
          </div>
          <div className="mb-5 space-x-3 px-3">
            <span>Name:</span> <span>{customerDetails.name}</span>
          </div>
          <div className="mb-5 space-x-3 px-3">
            <span>Phone Number:</span> <span>{customerDetails.phone}</span>
          </div>
          <div className="mb-5 space-x-3 px-3">
            <span>Email Address:</span> <span>{customerDetails.email}</span>
          </div>
          <div className="mb-5 space-x-3 px-3">
            <span>Address:</span> <span>{customerDetails.address}</span>
          </div>
          <div className="flex items-center justify-center">
            <Button asChild>
              <Link href={`/orders?customerId=${customerDetails.id}`} className="w-60">
                View Orders
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
