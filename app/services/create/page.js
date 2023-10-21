import React from "react";
import CreateDeal from "@/components/forms/CreateDeal";

const CreateServiceDeal = () => {
  return <CreateDeal type={"Service"} backUrl={"/services"} />;
};

export default CreateServiceDeal;
