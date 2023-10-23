"use client";

import React from "react";
import DetailsHead from "@/components/DetailsHead";
import CreateSkilledWorkerForm from "@/components/forms/CreateSkilledWorkerForm";

const CreateSkilledWorker = () => {
  return (
    <div className="mx-auto max-w-5xl">
      <DetailsHead headerTitle={"Create Skilled Worker"} type={"create"} />
      <div className="mx-auto max-w-4xl rounded-xl bg-white px-5 py-5 shadow-md dark:bg-zinc-800">
        <CreateSkilledWorkerForm />
      </div>
    </div>
  );
};

export default CreateSkilledWorker;
