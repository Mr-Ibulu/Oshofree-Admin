import Image from "next/image";
import React from "react";

const TableImage = ({ row }) => {
  return (
    <div className="relative h-12 w-12 overflow-hidden rounded-full">
      <Image src={row.image} alt={row.title} fill sizes="30vw" className="object-cover" />
    </div>
  );
};

export default TableImage;
