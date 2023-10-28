"use client";

import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { MdOutlineError } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn, findCategory } from "@/lib/utils";
import { format } from "date-fns";
import MultiSelectInput from "./MultiSelectInput";

const DealDetailsForm = ({ dealDetails }) => {
  const [date, setDate] = useState(dealDetails.expiry);
  const [selectedCategories, setSelectedCategories] = useState(dealDetails.categories.map((slug) => findCategory(slug).title));

  return (
    <Form.Root>
      <div className="grow space-y-7">
        <Form.Field className="mb-2 flex items-center gap-4" name="isAvailable">
          <div className="flex flex-wrap items-center px-3">
            <Form.Label className=" font-medium leading-8">{dealDetails.available ? "Available" : "Uavailable"}</Form.Label>
          </div>
          <Form.Control asChild>
            <Switch checked={dealDetails.available} />
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
              value={dealDetails.title}
              type="text"
              className="h-12 rounded-3xl border-none bg-slate-100 px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
            />
          </Form.Control>
          <p className="mt-1 px-3 text-xs font-medium dark:text-zinc-400">The name is how it appears on Oshofree.com</p>
        </Form.Field>
        <Form.Field className="mb-2" name="prevPrice">
          <div className="flex flex-wrap items-center px-3">
            <Form.Label className=" font-medium leading-8">Original Price</Form.Label>
            <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter price
            </Form.Message>
          </div>
          <Form.Control asChild>
            <Input
              value={dealDetails.prevPrice}
              required
              type="text"
              className="h-12 rounded-3xl border-none bg-slate-100 px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2" name="newPrice">
          <div className="flex flex-wrap items-center px-3">
            <Form.Label className=" font-medium leading-8">Discounted Price</Form.Label>
            <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter price
            </Form.Message>
          </div>
          <Form.Control asChild>
            <Input
              value={dealDetails.newPrice}
              required
              type="text"
              className="h-12 rounded-3xl border-none bg-slate-100 px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2" name="vendor">
          <div className="flex flex-wrap items-center px-3">
            <Form.Label className=" font-medium leading-8">Vendor ID</Form.Label>
            <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter price
            </Form.Message>
          </div>
          <Form.Control asChild>
            <Input
              value={dealDetails.vendorId}
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
        <MultiSelectInput labelTitle="Attached Categories" defaultSelectedOptions={selectedCategories} />
        <Form.Field className="mb-2" name="description">
          <div className="flex flex-wrap items-center px-3">
            <Form.Label className=" font-medium leading-8">Description</Form.Label>
          </div>
          <Form.Control asChild>
            <Textarea
              value={dealDetails.description}
              className="rounded-xl px-6 text-base font-medium shadow-inner focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
            />
          </Form.Control>
        </Form.Field>
        <div className="flex items-center justify-center">
          <Form.Submit asChild>
            <Button className="w-60">Save</Button>
          </Form.Submit>
        </div>
      </div>
    </Form.Root>
  );
};

export default DealDetailsForm;
