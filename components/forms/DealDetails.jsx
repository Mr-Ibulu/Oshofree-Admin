"use client";

import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { MdDelete, MdOutlineChevronLeft, MdOutlineError } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Calendar as CalendarIcon } from "lucide-react";
import NoImagePlaceholder from "@/components/NoImagePlaceholder";
import { Switch } from "@/components/ui/switch";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn, findCategory } from "@/lib/utils";
import { format } from "date-fns";
import { randomRate } from "@mui/x-data-grid-generator";
import MultiSelectCategoryInput from "./MultiSelectCategoryInput";
import Link from "next/link";

const DealDetails = ({ type, backUrl, dealDetails }) => {
  const [date, setDate] = useState(dealDetails.expiry);
  const [selectedCategories, setSelectedCategories] = useState(dealDetails.categories.map((slug) => findCategory(slug).title));

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8 flex items-center gap-4">
        <Link href={backUrl} replace className="text-5xl">
          <MdOutlineChevronLeft />
        </Link>
        <h1 className="line-clamp-3 text-2xl font-bold sm:text-3xl">{dealDetails.title}</h1>
        <Button variant="ghost" size="icon" className="ml-auto mr-5">
          <MdDelete className="text-3xl text-red-600" />
        </Button>
      </div>
      <Form.Root className="">
        <div className="mx-auto flex flex-col gap-8 rounded-xl bg-white px-5 py-5 shadow-md dark:bg-zinc-800 sm:flex-row">
          <div className="w-full sm:w-[500px]">
            <Form.Field className="mb-2" name="image">
              <div className="relative aspect-square max-h-[300px] w-full overflow-hidden rounded-xl">
                {dealDetails.image ? (
                  <Image
                    src={dealDetails.image}
                    alt={`${dealDetails.title} image`}
                    fill
                    sizes={"(max-width: 768px) 30vw, (max-width: 1200px) 70vw, 100vw"}
                    className="object-cover"
                  />
                ) : (
                  <NoImagePlaceholder altText={`${dealDetails.slug}/no-image`} size={50} className={"rounded-xl border dark:border-zinc-950"} />
                )}
              </div>
              <Form.Control asChild>
                <Input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  className="mx-auto mt-5 w-[70%] shadow-inner file:mr-2 file:rounded file:bg-white  dark:bg-zinc-900 dark:shadow-zinc-950 dark:file:bg-zinc-700"
                />
              </Form.Control>
            </Form.Field>
          </div>
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
                  className="h-12 rounded-3xl px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
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
                  className="h-12 rounded-3xl px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
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
                  value={dealDetails.prevPrice - randomRate() * dealDetails.prevPrice}
                  required
                  type="text"
                  className="h-12 rounded-3xl px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
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
                  className="h-12 rounded-3xl px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
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
                      "h-12 w-full justify-start rounded-3xl bg-zinc-100 text-left text-base font-medium shadow-inner hover:bg-zinc-200 dark:bg-zinc-900 dark:shadow-zinc-950 dark:hover:bg-zinc-950 sm:w-[448px]",
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
            <MultiSelectCategoryInput labelTitle="Attached Categories" defaultCategories={selectedCategories} />
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
        </div>
      </Form.Root>
    </div>
  );
};

export default DealDetails;
