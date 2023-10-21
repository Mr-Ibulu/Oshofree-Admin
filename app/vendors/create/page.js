"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MdAdd, MdOutlineChevronLeft, MdOutlineError } from "react-icons/md";
import * as Form from "@radix-ui/react-form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select";
import { findAllDescendantCategory, findAllRootCategories } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const AddVendor = () => {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState([]);

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
        <button className="text-5xl" onClick={() => router.replace("/vendors")}>
          <MdOutlineChevronLeft />
        </button>
        <h1 className="text-2xl font-bold sm:text-3xl">Add Vendor</h1>
      </div>
      <div className="mx-auto max-w-4xl rounded-xl bg-white px-5 py-5 shadow-md dark:bg-zinc-800">
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
                className="h-12 rounded-3xl px-6 text-base font-medium shadow-inner focus-visible:ring-transparent data-[invalid]:border-red-500 dark:bg-zinc-900 dark:shadow-zinc-950"
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
                type="text"
                className="h-12 rounded-3xl px-6 text-base font-medium shadow-inner focus-visible:ring-transparent data-[invalid]:border-red-500 dark:bg-zinc-900 dark:shadow-zinc-950"
              />
            </Form.Control>
          </Form.Field>
          <Form.Field className="mb-2 grid" name="email">
            <div className="flex flex-wrap items-center px-3">
              <Form.Label className=" font-medium leading-8">Email Address</Form.Label>
              <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
                <MdOutlineError className="text-sm" /> Please enter vendor&apos;s email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <Input
                required
                type="text"
                className="h-12 rounded-3xl px-6 text-base font-medium shadow-inner focus-visible:ring-transparent data-[invalid]:border-red-500 dark:bg-zinc-900 dark:shadow-zinc-950"
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
                className="h-12 rounded-3xl px-6 text-base font-medium shadow-inner focus-visible:ring-transparent data-[invalid]:border-red-500 dark:bg-zinc-900 dark:shadow-zinc-950"
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
                className="h-12 rounded-3xl px-6 text-base font-medium shadow-inner focus-visible:ring-transparent data-[invalid]:border-red-500 dark:bg-zinc-900 dark:shadow-zinc-950"
              />
            </Form.Control>
          </Form.Field>
          <div className="mb-2 grid" name="categories">
            <div className="flex flex-wrap items-center px-3">
              <p className=" font-medium leading-8">Associated Categories</p>
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
              You can assign multiple categories to this vendor. Click on selected item to remove it from the list.
            </p>
          </div>
          <Form.Field className="mb-2 grid" name="image">
            <div className="flex flex-wrap items-center px-3">
              <Form.Label className=" font-medium leading-8">Image</Form.Label>
            </div>
            <Form.Control asChild>
              <Input type="file" className="shadow-inner dark:bg-zinc-900 dark:shadow-zinc-950 dark:file:bg-zinc-900" />
            </Form.Control>
          </Form.Field>
          <Form.Field className="mb-2 grid" name="documents">
            <div className="flex flex-wrap items-center px-3">
              <Form.Label className=" font-medium leading-8">Upload Documents</Form.Label>
            </div>
            <Form.Control asChild>
              <Input type="file" className="shadow-inner dark:bg-zinc-900 dark:shadow-zinc-950 dark:file:bg-zinc-900" />
            </Form.Control>
          </Form.Field>
          <div className="flex items-center justify-center">
            <Form.Submit asChild>
              <Button className="w-60">Create</Button>
            </Form.Submit>
          </div>
        </Form.Root>
      </div>
    </div>
  );
};

export default AddVendor;
