import React from "react";
import Image from "next/image";
import NoImagePlaceholder from "../NoImagePlaceholder";
import { cn } from "@/lib/utils";

const TableImage = ({ row, className }) => {
  return (
    <div className={cn("relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full", className)}>
      {row.image ? (
        <Image src={row.image} alt={row.title ?? row.name} fill sizes="30vw" className="object-cover" />
      ) : (
        <NoImagePlaceholder altText={row.title} size={30} />
      )}
    </div>
  );
};

export default TableImage;
