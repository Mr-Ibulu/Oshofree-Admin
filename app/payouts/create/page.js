import React from "react";
import DetailsHead from "@/components/DetailsHead";
import CreatePayoutBeneficiaryForm from "@/components/forms/CreatePayoutBeneficiaryForm";

const CreateBeneficiary = () => {
  return (
    <div className="mx-auto max-w-5xl">
      <DetailsHead headerTitle={"Add New Beneficiary"} type={"create"} />
      <div className="mx-auto max-w-4xl rounded-xl bg-white px-5 py-5 shadow-md dark:bg-zinc-800">
        <CreatePayoutBeneficiaryForm />
      </div>
    </div>
  );
};

export default CreateBeneficiary;
