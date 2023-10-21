import React from "react";
import CreateDeal from "@/components/forms/CreateDeal";

const CreateProductDeal = () => {
  return <CreateDeal type={"Product"} backUrl={"/products"} />;
};

export default CreateProductDeal;
