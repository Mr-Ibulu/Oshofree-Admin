import Link from "next/link";
import React from "react";
import { MdDelete, MdOutlineChevronLeft } from "react-icons/md";
import { Button } from "./ui/button";

const DetailsHead = ({ goBackLink, headerTitle, type }) => {
  return (
    <div className="mb-8 flex items-center gap-4">
      <Link href={goBackLink} replace className="text-5xl">
        <MdOutlineChevronLeft />
      </Link>
      <h1 className="line-clamp-3 text-2xl font-bold sm:text-3xl">{headerTitle}</h1>
      {type !== "create" && (
        <Button variant="ghost" size="icon" className="ml-auto mr-5">
          <MdDelete className="text-3xl text-red-600" />
        </Button>
      )}
    </div>
  );
};

export default DetailsHead;
