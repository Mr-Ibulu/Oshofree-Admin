"use client";

import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { Switch } from "../ui/switch";
import { MdOutlineError } from "react-icons/md";
import { Input } from "../ui/input";
import MultiSelectInput from "./MultiSelectInput";
import { Button } from "../ui/button";
import { findCategory } from "@/lib/utils";

const VendorDetailsForm = ({ vendorDetails }) => {
  const [selectedCategories, setSelectedCategories] = useState(vendorDetails.activeCategories.map((slug) => findCategory(slug).title));

  return (
    <Form.Root>
      <div className="grow space-y-7">
        <div className="flex items-center gap-3 px-3">
          <span>Account Status:</span>
          {vendorDetails.accountStatus === "Suspended" ? (
            "Suspended"
          ) : (
            <Form.Field className="flex items-center gap-4" name="active">
              <div className="flex flex-wrap items-center px-3">
                <Form.Label className=" font-medium leading-8">{vendorDetails.accountStatus}</Form.Label>
              </div>
              <Form.Control asChild>
                <Switch checked={vendorDetails.accountStatus === "Active"} />
              </Form.Control>
            </Form.Field>
          )}
        </div>
        <Form.Field className="mb-2 flex items-center gap-4" name="isAvailable">
          <div className="flex flex-wrap items-center px-3">
            <Form.Label className=" font-medium leading-8">{vendorDetails.isVerified ? "Verified" : "Not Verified"}</Form.Label>
          </div>
          <Form.Control asChild>
            <Switch checked={vendorDetails.isVerified} />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2" name="name">
          <div className="flex flex-wrap items-center px-3">
            <Form.Label className="font-medium leading-8">Name</Form.Label>
            <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter category name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <Input
              required
              value={vendorDetails.name}
              type="text"
              className="h-12 rounded-3xl border-none bg-slate-100 px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2" name="phone">
          <div className="flex flex-wrap items-center px-3">
            <Form.Label className="font-medium leading-8">Phone Number</Form.Label>
            <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter phone number
            </Form.Message>
          </div>
          <Form.Control asChild>
            <Input
              required
              value={vendorDetails.phone}
              type="text"
              className="h-12 rounded-3xl border-none bg-slate-100 px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2" name="email">
          <div className="flex flex-wrap items-center px-3">
            <Form.Label className="font-medium leading-8">Email Address</Form.Label>
            <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter email address
            </Form.Message>
          </div>
          <Form.Control asChild>
            <Input
              required
              value={vendorDetails.email}
              type="text"
              className="h-12 rounded-3xl border-none bg-slate-100 px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2" name="companyName">
          <div className="flex flex-wrap items-center px-3">
            <Form.Label className="font-medium leading-8">Company Name</Form.Label>
            <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter the company name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <Input
              required
              value={vendorDetails.companyName}
              type="text"
              className="h-12 rounded-3xl border-none bg-slate-100 px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2" name="officeAddress">
          <div className="flex flex-wrap items-center px-3">
            <Form.Label className=" font-medium leading-8">Official Address</Form.Label>
            <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter address
            </Form.Message>
          </div>
          <Form.Control asChild>
            <Input
              value={vendorDetails.officeAddress}
              required
              type="text"
              className="h-12 rounded-3xl border-none bg-slate-100 px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
            />
          </Form.Control>
        </Form.Field>
        <MultiSelectInput labelTitle="Associated Categories" defaultSelectedOptions={selectedCategories} />
        <div className="flex items-center justify-center">
          <Form.Submit asChild>
            <Button disabled={true} className="w-60">
              Save
            </Button>
          </Form.Submit>
        </div>
      </div>
    </Form.Root>
  );
};

export default VendorDetailsForm;
