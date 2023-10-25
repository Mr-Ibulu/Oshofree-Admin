"use client";

import React, { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "./ui/badge";
import { MdOutlineCheck, MdOutlineClose } from "react-icons/md";

const OrderStatusBadge = ({ status }) => {
  return (
    <>
      {status === "pending" ? (
        <Badge className="space-x-2 bg-yellow-600 dark:bg-yellow-600 dark:text-white">
          <span>Pending</span>
          <span className="block h-5 w-5 animate-spin rounded-full border-4 border-gray-300 border-t-white"></span>
        </Badge>
      ) : status === "complete" ? (
        <Badge className="space-x-2 bg-green-600 dark:bg-green-600 dark:text-white">
          <span>Paid</span>
          <span>
            <MdOutlineCheck className="text-lg" />
          </span>
        </Badge>
      ) : (
        <Badge variant={"destructive"} className="space-x-2">
          <span>Declined</span>
          <span>
            <MdOutlineClose className="text-lg" />
          </span>
        </Badge>
      )}
    </>
  );
};

const PayoutStatusSelect = ({ payoutDetail }) => {
  const [statusInfo, setStatusInfo] = useState(payoutDetail.status);

  return (
    <Select value={statusInfo} onValueChange={setStatusInfo}>
      <SelectTrigger className="w-fit focus:ring-transparent dark:bg-zinc-900 dark:ring-offset-transparent dark:focus:ring-transparent">
        <SelectValue placeholder="Change Status" />
      </SelectTrigger>
      <SelectContent className="dark:bg-zinc-900">
        <SelectGroup>
          <SelectItem value="pending">
            <OrderStatusBadge status={"pending"} />
          </SelectItem>
          <SelectItem value="complete">
            <OrderStatusBadge status={"complete"} />
          </SelectItem>
          <SelectItem value="declined">
            <OrderStatusBadge status={"declined"} />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PayoutStatusSelect;
