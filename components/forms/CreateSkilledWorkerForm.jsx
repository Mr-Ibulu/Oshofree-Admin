"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";
import { MdOutlineError } from "react-icons/md";
import { Input } from "../ui/input";
import MultiSelectInput from "./MultiSelectInput";
import { Button } from "../ui/button";

const CreateSkilledWorkerForm = () => {
  return (
    <Form.Root className="space-y-7">
      <Form.Field className="mb-2 grid" name="name">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className="font-medium leading-8">Name</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter vendor name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Input
            required
            type="text"
            className="h-12 rounded-3xl border-none bg-slate-100 px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="mb-2 grid" name="phone">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className=" font-medium leading-8">Phone Number</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter vendor&apos;s phone
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Input
            required
            type="number"
            className="h-12 rounded-3xl border-none bg-slate-100 px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="mb-2 grid" name="email">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className=" font-medium leading-8">Email Address</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter vendor&apos;s email
          </Form.Message>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="typeMismatch">
            <MdOutlineError className="text-base" /> Please provide a valid Email Address
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Input
            required
            type="email"
            className="h-12 rounded-3xl border-none bg-slate-100 px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="mb-2 grid" name="companyName">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className=" font-medium leading-8">Company Name</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter vendor&apos;s company name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Input
            required
            type="text"
            className="h-12 rounded-3xl border-none bg-slate-100 px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="mb-2 grid" name="address">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className=" font-medium leading-8">Company Address</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter vendor&apos;s address
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Input
            required
            type="text"
            className="h-12 rounded-3xl border-none bg-slate-100 px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
          />
        </Form.Control>
      </Form.Field>
      <MultiSelectInput labelTitle="Skills" />
      <Form.Field className="mb-2 grid" name="image">
        <div className="px-3">
          <Form.Label className=" font-medium leading-8">Photo</Form.Label>
        </div>
        <Form.Control asChild>
          <Input
            type="file"
            accept=".png, .jpg, .jpeg"
            className="shadow-inner file:mr-2 file:rounded file:bg-white  dark:bg-zinc-900 dark:shadow-zinc-950 dark:file:bg-zinc-700"
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="mb-2 grid" name="documents">
        <div className="px-3">
          <Form.Label className=" font-medium leading-8">Upload Documents</Form.Label>
        </div>
        <Form.Control asChild>
          <Input
            multiple
            type="file"
            accept=".png, .jpg, .jpeg"
            className="shadow-inner file:mr-2 file:rounded file:bg-white  dark:bg-zinc-900 dark:shadow-zinc-950 dark:file:bg-zinc-700"
          />
        </Form.Control>
      </Form.Field>
      <div className="flex items-center justify-center">
        <Form.Submit asChild>
          <Button className="w-60">Create</Button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default CreateSkilledWorkerForm;
