"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MdAdd, MdDelete, MdOutlineChevronLeft, MdOutlineError } from "react-icons/md";
import * as Form from "@radix-ui/react-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Calendar as CalendarIcon } from "lucide-react";
import NoImage from "@/components/NoImage";
import { Switch } from "@/components/ui/switch";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn, findAllDescendantCategory, findAllRootCategories, findProduct } from "@/lib/utils";
import { format } from "date-fns";
import { randomRate } from "@mui/x-data-grid-generator";

const ViewDeal = ({ params }) => {
  const [date, setDate] = useState(findProduct(params.id).expiry);
  const [selectedCategories, setSelectedCategories] = useState(findProduct(params.id).categories);
  const router = useRouter();
  const dealDetails = findProduct(params.id);
  const addCategory = (name) => {
    if (selectedCategories.includes(name)) {
      return;
    }
    setSelectedCategories([...selectedCategories, name]);
  };

  const removeCategory = (event, name) => {
    event.preventDefault();
    const filteredArr = selectedCategories.filter((el) => el !== name);
    setSelectedCategories(filteredArr);
  };
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8 flex items-center gap-4">
        <button className="text-5xl" onClick={() => router.replace("/products")}>
          <MdOutlineChevronLeft />
        </button>
        <h1 className="text-2xl font-bold sm:text-3xl">{dealDetails.title}</h1>
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
                  <NoImage altText={`${dealDetails.slug}/no-image`} size={50} className={"rounded-xl border dark:border-zinc-950"} />
                )}
              </div>
              <Form.Control asChild>
                <Input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  className="mx-auto mt-5 w-[70%] shadow-inner dark:bg-zinc-900 dark:shadow-zinc-950 dark:file:bg-zinc-900"
                />
              </Form.Control>
            </Form.Field>
          </div>
          <div className="grow space-y-7">
            <Form.Field className="mb-2 flex items-center gap-4" name="isEnabled">
              <div className="flex flex-wrap items-center px-3">
                <Form.Label className=" font-medium leading-8">Available</Form.Label>
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
                  className="h-12 rounded-3xl px-6 text-base font-medium shadow-inner focus-visible:ring-transparent data-[invalid]:border-red-500 dark:bg-zinc-900 dark:shadow-zinc-950"
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
                  className="h-12 rounded-3xl px-6 text-base font-medium shadow-inner focus-visible:ring-transparent data-[invalid]:border-red-500 dark:bg-zinc-900 dark:shadow-zinc-950"
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
                  className="h-12 rounded-3xl px-6 text-base font-medium shadow-inner focus-visible:ring-transparent data-[invalid]:border-red-500 dark:bg-zinc-900 dark:shadow-zinc-950"
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
                  className="h-12 rounded-3xl px-6 text-base font-medium shadow-inner focus-visible:ring-transparent data-[invalid]:border-red-500 dark:bg-zinc-900 dark:shadow-zinc-950"
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
            <div className="mb-2 grid" name="categories">
              <div className="flex flex-wrap items-center px-3">
                <p className=" font-medium leading-8">Add Categories</p>
              </div>
              <div className="relative min-h-[48px] max-w-md rounded-3xl bg-zinc-100 px-6 py-3 text-base font-medium shadow-inner focus:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950">
                {selectedCategories.map((cat) => (
                  <button
                    key={cat}
                    className="mx-1 my-1 rounded-md border border-zinc-400 bg-zinc-200 px-2 text-sm dark:border-zinc-700 dark:bg-zinc-800"
                    onClick={(event) => removeCategory(event, cat)}
                  >
                    {cat}
                  </button>
                ))}

                <Popover>
                  <PopoverTrigger className="absolute right-3 top-1/2 -translate-y-1/2 p-1">
                    <MdAdd className="text-2xl" />
                  </PopoverTrigger>
                  <PopoverContent className="scrollbar-track-zinc-200 dark:scrollbar-track-zinc-700 scrollbar-thumb-zinc-400 dark:scrollbar-thumb-zinc-800 scrollbar-track-rounded-full scrollbar-thumb-rounded-full xl:scrollbar-thin max-h-80 w-80 overflow-y-auto">
                    {findAllRootCategories().map((cat) => (
                      <React.Fragment key={cat.slug}>
                        <button
                          value={cat.slug}
                          className="my-1 block w-full px-1 py-1 text-start text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800"
                          onClick={() => addCategory(cat.title)}
                        >
                          {cat.title}
                        </button>
                        {findAllDescendantCategory(cat).map((subCat) => (
                          <button
                            key={subCat.slug}
                            value={subCat.slug}
                            className="my-1 block w-full px-1 py-1 text-start text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            onClick={() => addCategory(subCat.title)}
                          >
                            {subCat.title}
                          </button>
                        ))}
                      </React.Fragment>
                    ))}
                  </PopoverContent>
                </Popover>
              </div>
              <p className="mt-1 px-3 text-xs font-medium dark:text-zinc-400">
                You can assign multiple categories to this product. Click on selected item to remove it from the list.
              </p>
            </div>
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

export default ViewDeal;
