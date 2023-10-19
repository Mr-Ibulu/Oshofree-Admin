import React from "react";
import Image from "next/image";
import NoImage from "../NoImage";

const TableImage = ({ row }) => {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full">
      {row.image ? <Image src={row.image} alt={row.title} fill sizes="30vw" className="object-cover" /> : <NoImage altText={row.title} size={30} />}
    </div>
  );
};

export default TableImage;
