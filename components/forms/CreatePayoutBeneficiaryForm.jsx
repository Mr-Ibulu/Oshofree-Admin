"use client";

import React, { useState } from "react";
import { MdOutlineError } from "react-icons/md";
import * as Form from "@radix-ui/react-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import MultiSelectInput from "./MultiSelectInput";

const CreatePayoutBeneficiaryForm = () => {
  const [date, setDate] = useState();

  return (
    <Form.Root className="space-y-7">
      <Form.Field className="mb-2 grid" name="id">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className="font-medium leading-8">Reference ID</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter Reference ID
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
      <Form.Field className="mb-2 grid" name="amount">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className=" font-medium leading-8">Amount To Pay</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter amount
          </Form.Message>
        </div>
        <div className="relative">
          <Form.Control asChild>
            <Input
              required
              type="number"
              className="h-12 rounded-3xl border-none bg-slate-100 px-10 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
            />
          </Form.Control>
          <span className="absolute left-5 top-1/2 -translate-y-1/2">&#8358;</span>
        </div>
      </Form.Field>
      <Form.Field className="mb-2 grid" name="recipient">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className=" font-medium leading-8">Recipient Name</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter recipient name
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
      <Form.Field className="mb-2 grid" name="email">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className=" font-medium leading-8">Email</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter recipient email address
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
          <Form.Label className=" font-medium leading-8">Phone</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter recipient phone number
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
      <Form.Field className="mb-2 grid" name="accountNo">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className=" font-medium leading-8">Account Number</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter recipient account number
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
      <Form.Field className="mb-2 grid" name="bank">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className=" font-medium leading-8">Bank</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter recipient bank
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
      <Form.Field className="mb-2 grid" name="dateDue">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className=" font-medium leading-8">Due Date</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter Due Date
          </Form.Message>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "h-12 w-full justify-start rounded-3xl border-none bg-slate-100 text-left text-base font-medium shadow-inner hover:bg-zinc-200 dark:bg-zinc-900 dark:shadow-zinc-950 dark:hover:bg-zinc-950 sm:w-[448px]",
                !date && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
      </Form.Field>

      <div className="flex items-center justify-center">
        <Form.Submit asChild>
          <Button className="w-60">Add</Button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default CreatePayoutBeneficiaryForm;
