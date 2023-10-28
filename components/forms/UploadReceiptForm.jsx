"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";
import { Input } from "@/components/ui/input";

const UploadReceiptForm = () => {
  return (
    <Form.Root className="space-y-7">
      <Form.Field className="mb-2 grid" name="documents">
        <div className="mb-2 px-3">
          <Form.Label className=" font-medium leading-8">Upload Payment Receipts</Form.Label>
        </div>
        <Form.Control asChild>
          <Input
            multiple
            type="file"
            accept=".png, .jpg, .jpeg, .pdf, .docx"
            className="shadow-inner file:mr-2 file:rounded file:bg-white  dark:bg-zinc-900 dark:shadow-zinc-950 dark:file:bg-zinc-700"
          />
        </Form.Control>
      </Form.Field>
    </Form.Root>
  );
};

export default UploadReceiptForm;
