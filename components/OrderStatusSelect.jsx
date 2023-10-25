"use client";

import React, { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "./ui/badge";
import { MdOutlineCheck, MdOutlineClose } from "react-icons/md";

const OrderStatusBadge = ({ status, message }) => {
  return (
    <>
      {status === "pending" ? (
        <Badge className="space-x-2 bg-sky-600 dark:bg-sky-600 dark:text-white">
          <span>{message}</span>
          <span className="block h-5 w-5 animate-spin rounded-full border-4 border-gray-300 border-t-white"></span>
        </Badge>
      ) : status === "complete" ? (
        <Badge className="space-x-2 bg-green-600 dark:bg-green-600 dark:text-white">
          <span>{message}</span>
          <span>
            <MdOutlineCheck className="text-lg" />
          </span>
        </Badge>
      ) : (
        <Badge variant={"destructive"} className="space-x-2">
          <span>{message}</span>
          <span>
            <MdOutlineClose className="text-lg" />
          </span>
        </Badge>
      )}
    </>
  );
};

const OrderStatusSelect = ({ orderDetails }) => {
  const [statusInfo, setStatusInfo] = useState(orderDetails.statusInfo);

  return (
    <Select value={statusInfo} onValueChange={setStatusInfo}>
      <SelectTrigger className="w-fit focus:ring-transparent dark:bg-zinc-900 dark:ring-offset-transparent dark:focus:ring-transparent">
        <SelectValue placeholder="Change Status" />
      </SelectTrigger>
      <SelectContent className="dark:bg-zinc-900">
        <SelectGroup>
          {orderDetails.type === "product" && (
            <SelectItem value="Package en route">
              <OrderStatusBadge status={"pending"} message={"Package en route"} />
            </SelectItem>
          )}
          {orderDetails.type === "product" && (
            <SelectItem value="Package delivered">
              <OrderStatusBadge status={"complete"} message={"Package delivered"} />
            </SelectItem>
          )}
          {orderDetails.type === "service" && (
            <SelectItem value="Awaiting completion">
              <OrderStatusBadge status={"pending"} message={"Awaiting completion"} />
            </SelectItem>
          )}
          {orderDetails.type === "service" && (
            <SelectItem value="Service rendered">
              <OrderStatusBadge status={"complete"} message={"Service rendered"} />
            </SelectItem>
          )}
          <SelectItem value="Expired">
            <OrderStatusBadge status={"cancelled"} message={"Expired"} />
          </SelectItem>
          <SelectItem value="Cancelled">
            <OrderStatusBadge status={"cancelled"} message={"Cancelled"} />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default OrderStatusSelect;
