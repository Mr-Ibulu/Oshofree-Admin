"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MdOutlineChevronLeft, MdOutlineError } from "react-icons/md";
import * as Form from "@radix-ui/react-form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select";
import { findAllDescendantCategory, findAllRootCategories } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const CreateCategory = () => {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8 flex items-center gap-4">
        <button className="text-5xl" onClick={() => router.replace("/categories")}>
          <MdOutlineChevronLeft />
        </button>
        <h1 className="text-2xl font-bold sm:text-3xl">Create Category</h1>
      </div>
      <div className="mx-auto max-w-4xl rounded-xl bg-white px-5 py-5 shadow-md dark:bg-zinc-800">
        <Form.Root className="space-y-7">
          <Form.Field className="mb-2 grid" name="name">
            <div className="flex flex-wrap items-center px-3">
              <Form.Label className="font-medium leading-8">Name</Form.Label>
              <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
                <MdOutlineError className="text-sm" /> Please enter category name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <Input
                required
                type="text"
                className="h-12 rounded-3xl px-6 text-base font-medium shadow-inner focus-visible:ring-transparent data-[invalid]:border-red-500 dark:bg-zinc-900 dark:shadow-zinc-950"
              />
            </Form.Control>
            <p className="mt-1 px-3 text-xs font-medium dark:text-zinc-400">The name is how it appears on Oshofree.com</p>
          </Form.Field>
          <Form.Field className="mb-2 grid" name="slug">
            <div className="flex flex-wrap items-center px-3">
              <Form.Label className=" font-medium leading-8">Slug</Form.Label>
              <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
                <MdOutlineError className="text-sm" /> Please enter slug
              </Form.Message>
            </div>
            <Form.Control asChild>
              <Input
                required
                type="text"
                className="h-12 rounded-3xl px-6 text-base font-medium shadow-inner focus-visible:ring-transparent data-[invalid]:border-red-500 dark:bg-zinc-900 dark:shadow-zinc-950"
              />
            </Form.Control>
            <p className="mt-1 px-3 text-xs font-medium dark:text-zinc-400">
              The &quot;slug&quot; is the URL-friendly version of the name. It should be all lowercase and contains only letters, numbers and hyphens.
            </p>
          </Form.Field>
          <div className="mb-2 grid" name="parent">
            <div className="flex flex-wrap items-center px-3">
              <p className=" font-medium leading-8">Parent Category</p>
            </div>
            <Select>
              <SelectTrigger className="h-12 max-w-md rounded-3xl px-6 text-base font-medium shadow-inner focus:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950">
                <SelectValue placeholder="None" />
              </SelectTrigger>
              <SelectContent className="max-h-80">
                {findAllRootCategories().map((cat) => (
                  <React.Fragment key={cat.slug}>
                    <SelectItem value={cat.slug} className="font-semibold">
                      {cat.title}
                    </SelectItem>
                    {findAllDescendantCategory(cat).map((subCat) => (
                      <SelectItem key={subCat.slug} value={subCat.slug}>
                        {subCat.title}
                      </SelectItem>
                    ))}
                    <SelectSeparator />
                  </React.Fragment>
                ))}
              </SelectContent>
            </Select>
            <p className="mt-1 px-3 text-xs font-medium dark:text-zinc-400">
              Assign a parent category to create a hierarchy. If <b>&quot;None&quot;</b> is selected, this category would be stored as a root
              category.
            </p>
          </div>
          <Form.Field className="mb-2 grid" name="description">
            <div className="flex flex-wrap items-center px-3">
              <Form.Label className=" font-medium leading-8">Description</Form.Label>
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

export default CreateCategory;
