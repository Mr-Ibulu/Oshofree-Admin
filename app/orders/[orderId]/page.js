"use client";

import React from "react";
import DetailsHead from "@/components/DetailsHead";
import { Button } from "@/components/ui/button";
import { findCustomer, findOrder, findProduct, findVendor } from "@/lib/utils";
import { MdOutlineLocalPhone, MdOutlineMailOutline, MdOutlinePersonOutline, MdOutlinePrint } from "react-icons/md";
import OrderStatusSelect from "@/components/OrderStatusSelect";
import Link from "next/link";
import Image from "next/image";

const OrderDetails = ({ params }) => {
  const orderDetails = findOrder(params.orderId);
  const customerDetails = findCustomer(orderDetails.customerId);
  const productDetails = orderDetails.deal;
  const vendorDetails = findVendor(productDetails.vendorId);
  return (
    <div className="mx-auto max-w-5xl">
      <DetailsHead headerTitle={`Order: #${orderDetails.orderId}`} />
      <div className="mx-auto space-y-7 rounded-xl bg-white px-5 py-5 shadow-md dark:bg-zinc-800">
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <div className="space-x-3">
            <span className="text-sm">Placed On:</span> <span className="font-semibold">{orderDetails.date.toLocaleDateString()}</span>
          </div>
          <div>
            <OrderStatusSelect orderDetails={orderDetails} />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Customer</h2>
          <div className="mt-2 flex flex-col gap-3 rounded-xl border p-3 dark:border-zinc-600 sm:flex-row sm:gap-7">
            <div className="flex items-center gap-3">
              <span>
                <MdOutlinePersonOutline className="text-lg" />
              </span>
              <span>{customerDetails.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>
                <MdOutlineLocalPhone className="text-lg" />
              </span>
              <span>{customerDetails.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>
                <MdOutlineMailOutline className="text-lg" />
              </span>
              <span>{customerDetails.email}</span>
            </div>
          </div>
          <div className="text-center">
            <Link href={`/customers/${orderDetails.customerId}`} className="inline-block p-1 text-sm hover:underline">
              Details
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Vendor</h2>
          <div className="mt-2 flex flex-col gap-3 rounded-xl border p-3 dark:border-zinc-600 sm:flex-row sm:gap-7">
            <div className="flex items-center gap-3">
              <span>
                <MdOutlinePersonOutline className="text-lg" />
              </span>
              <span>{vendorDetails.companyName}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>
                <MdOutlineLocalPhone className="text-lg" />
              </span>
              <span>{vendorDetails.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>
                <MdOutlineMailOutline className="text-lg" />
              </span>
              <span>{vendorDetails.email}</span>
            </div>
          </div>
          <div className="text-center">
            <Link href={`/vendors/${vendorDetails.id}`} className="inline-block p-1 text-sm hover:underline">
              Details
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Deal Details</h2>
          <div className="mt-2 flex flex-col gap-3 rounded-xl border p-3 dark:border-zinc-600">
            <Link
              href={orderDetails.type === "service" ? `/services/${orderDetails.deal.id}` : `/products/${orderDetails.deal.id}`}
              className="flex gap-3"
            >
              <Image src={orderDetails.deal.image} alt={orderDetails.deal.title} width={60} className="aspect-square shrink-0 object-cover" />
              <div className="line-clamp-2">{orderDetails.deal.title}</div>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">Purchased Variant:</span>
              <span>Variant name</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">Quantity:</span>
              <span>{orderDetails.quantity}</span>
            </div>
          </div>
        </div>
        {orderDetails.type === "product" && (
          <div>
            <h2 className="text-xl font-semibold">Delivery Details</h2>
            <div className="mt-2 flex flex-col gap-3 rounded-xl border p-3 dark:border-zinc-600">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Delivery Option:</span>
                <span>Door Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Address:</span>
                <span>{orderDetails.deliveryInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">City:</span>
                <span>{orderDetails.deliveryInfo.city}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">State:</span>
                <span>{orderDetails.deliveryInfo.state}</span>
              </div>
            </div>
          </div>
        )}
        <div>
          <h2 className="text-xl font-semibold">Payment Details</h2>
          <div className="mt-2 flex flex-col gap-3 rounded-xl border p-3 dark:border-zinc-600">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">Payment Method:</span>
              <span>{orderDetails.paymentMethod}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">Discount:</span>
              <span>{orderDetails.discount.toFixed(2)}%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">Price:</span>
              <span> {`\u20A6 ${orderDetails.totalPrice}`}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">Delivery Fee:</span>
              <span> {`\u20A6 1000`}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">Total:</span>
              <span> {`\u20A6 ${orderDetails.totalPrice + 1000}`}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button className="w-60">
            <MdOutlinePrint className="mr-2 text-xl" /> Print Receipt
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
