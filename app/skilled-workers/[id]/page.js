import React from "react";
import { findSkilledWorker } from "@/lib/utils";
import DetailsHead from "@/components/DetailsHead";
import { Switch } from "@/components/ui/switch";
import DetailsImageContainer from "@/components/DetailsImageContainer";
import SkilledWorkerDetailsForm from "@/components/forms/SkilledWorkerDetailsForm";

const SkilledWorkerDetails = ({ params }) => {
  const skilledWorkerDetails = findSkilledWorker(params.id);
  return (
    <div className="mx-auto max-w-5xl">
      <DetailsHead headerTitle={skilledWorkerDetails.name} />
      <div className="mx-auto flex flex-col flex-wrap gap-8 rounded-xl bg-white px-5 py-5 shadow-md dark:bg-zinc-800 sm:flex-row">
        <div className="w-full">
          <div className="flex items-center gap-3">
            <span>Suspend Account</span>
            <Switch />
          </div>
        </div>
        <DetailsImageContainer imageSrc={skilledWorkerDetails.image} alt={skilledWorkerDetails.name} />
        <div className="grow">
          <div className="mb-5 space-x-3 px-3">
            <span>ID:</span> <span>{skilledWorkerDetails.id}</span>
          </div>
          <div className="mb-5 space-x-3 px-3">
            <span>Joined:</span> <span>{skilledWorkerDetails.dateJoined.toLocaleDateString()}</span>
          </div>
          <div className="mb-5 space-x-3 px-3">
            <span>Completed Jobs:</span> <span>{skilledWorkerDetails.jobsCompleted}</span>
          </div>
          <div className="mb-5 space-x-3 px-3">
            <span>Followers:</span> <span>{skilledWorkerDetails.follows}</span>
          </div>
          <SkilledWorkerDetailsForm skilledWorkerDetails={skilledWorkerDetails} />
        </div>
      </div>
    </div>
  );
};

export default SkilledWorkerDetails;
