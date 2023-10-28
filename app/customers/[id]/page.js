import React from "react";
import DetailsHead from "@/components/DetailsHead";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { findCustomer } from "@/lib/utils";
import Link from "next/link";
import {
  MdHouse,
  MdOutlineAccountBox,
  MdOutlineAssignment,
  MdOutlineHandshake,
  MdOutlineLocalPhone,
  MdOutlineMailOutline,
  MdOutlineNumbers,
  MdOutlinePersonOutline,
} from "react-icons/md";
import { customers } from "@/data/customers";

export function generateStaticParams() {
  return customers.map((customer) => ({ id: customer.id }));
}

const CustomerDetails = ({ params }) => {
  const customerDetails = findCustomer(params.id);

  return (
    <div className="mx-auto max-w-5xl">
      <DetailsHead headerTitle={customerDetails.name} />
      <div className="mx-auto space-y-8 rounded-xl bg-white px-5 py-5 shadow-md dark:bg-zinc-800">
        <div className="flex items-center gap-3">
          <span>Suspend Account</span>
          <Switch />
        </div>
        <div>
          <div className="mb-5 flex items-center space-x-3 px-3">
            <span>
              <MdOutlineNumbers className="text-lg" />
            </span>
            <span>Customer ID:</span> <span>{customerDetails.id}</span>
          </div>
          <div className="mb-5 flex items-center space-x-3 px-3">
            <span>
              <MdOutlineAccountBox className="text-lg" />
            </span>
            <span>Account Status:</span> <span>{customerDetails.accountStatus}</span>
          </div>
          <div className="mb-5 flex items-center space-x-3 px-3">
            <span>
              <MdOutlineHandshake className="text-lg" />
            </span>
            <span>Joined:</span> <span>{customerDetails.dateJoined.toLocaleDateString()}</span>
          </div>
          <div className="mb-5 flex items-center space-x-3 px-3">
            <span>
              <MdOutlineAssignment className="text-lg" />
            </span>
            <span>Total Orders:</span> <span>{customerDetails.totalOrders}</span>
          </div>
          <div className="mb-5 flex items-center space-x-3 px-3">
            <span>
              <MdOutlinePersonOutline className="text-lg" />
            </span>
            <span>Name:</span> <span>{customerDetails.name}</span>
          </div>
          <div className="mb-5 flex items-center space-x-3 px-3">
            <span>
              <MdOutlineLocalPhone className="text-lg" />
            </span>
            <span>Phone Number:</span> <span>{customerDetails.phone}</span>
          </div>
          <div className="mb-5 flex items-center space-x-3 px-3">
            <span>
              <MdOutlineMailOutline className="text-lg" />
            </span>
            <span>Email Address:</span> <span>{customerDetails.email}</span>
          </div>
          <div className="mb-5 flex items-center space-x-3 px-3">
            <span>
              <MdHouse className="text-lg" />
            </span>
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
