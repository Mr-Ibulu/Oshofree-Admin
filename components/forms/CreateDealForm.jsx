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

const CreateDealForm = ({ type }) => {
  const [date, setDate] = useState();

  return (
    <Form.Root className="space-y-7">
      <Form.Field className="mb-2 grid" name="name">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className="font-medium leading-8">{type} Name</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter {type.toLowerCase()} name
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
      <Form.Field className="mb-2 grid" name="prevPrice">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className=" font-medium leading-8">Original Price</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter price
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
      <Form.Field className="mb-2 grid" name="newPrice">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className=" font-medium leading-8">Discounted Price</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter price
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
      <Form.Field className="mb-2 grid" name="vendor">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className=" font-medium leading-8">Vendor ID</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter vendor Id
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
      <Form.Field className="mb-2 grid" name="expiry">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className=" font-medium leading-8">Deal Expiry Date</Form.Label>
          <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
            <MdOutlineError className="text-sm" /> Please enter expiry date
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
      <MultiSelectInput labelTitle="Attach Categories" />
      <Form.Field className="mb-2 grid" name="description">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className=" font-medium leading-8">Deal Info</Form.Label>
        </div>
        <Form.Control asChild>
          <Textarea className="rounded-xl px-6 text-base font-medium shadow-inner focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950" />
        </Form.Control>
      </Form.Field>
      <Form.Field className="mb-2 grid" name="image">
        <div className="flex flex-wrap items-center px-3">
          <Form.Label className=" font-medium leading-8">Image</Form.Label>
        </div>
        <Form.Control asChild>
          <Input
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

export default CreateDealForm;
