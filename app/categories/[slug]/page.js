import React from "react";
import CategoryDetailsForm from "@/components/forms/CategoryDetailsForm";
import DetailsImageContainer from "@/components/DetailsImageContainer";
import DetailsHead from "@/components/DetailsHead";
import { findCategory } from "@/lib/utils";

const ViewCategory = ({ params }) => {
  const categoryDetails = findCategory(params.slug);
  return (
    <div className="mx-auto max-w-5xl">
      <DetailsHead headerTitle={categoryDetails.title} />
      <div className="mx-auto flex flex-col gap-8 rounded-xl bg-white px-5 py-5 shadow-md dark:bg-zinc-800 sm:flex-row">
        <DetailsImageContainer imageSrc={categoryDetails.image} alt={categoryDetails.title} />
        <CategoryDetailsForm categoryDetails={categoryDetails} />
      </div>
    </div>
  );
};

export default ViewCategory;
