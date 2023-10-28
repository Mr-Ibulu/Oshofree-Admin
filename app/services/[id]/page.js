import React from "react";
import DealDetailsForm from "@/components/forms/DealDetailsForm";
import { findService } from "@/lib/utils";
import DetailsHead from "@/components/DetailsHead";
import DetailsImageContainer from "@/components/DetailsImageContainer";

const ViewServiceDeal = ({ params }) => {
  const dealDetails = findService(params.id);

  return (
    <div className="mx-auto max-w-5xl">
      <DetailsHead headerTitle={dealDetails.title} />
      <div className="mx-auto flex flex-col gap-8 rounded-xl bg-white px-5 py-5 shadow-md dark:bg-zinc-800 sm:flex-row">
        <DetailsImageContainer imageSrc={dealDetails.image} alt={dealDetails.title} />
        <DealDetailsForm dealDetails={dealDetails} />
      </div>
    </div>
  );
};

export default ViewServiceDeal;
