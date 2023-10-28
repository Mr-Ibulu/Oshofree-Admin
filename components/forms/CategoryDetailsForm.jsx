"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";
import { Switch } from "../ui/switch";
import { MdOutlineError } from "react-icons/md";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { findAllDescendantCategory, findAllRootCategories, findParent } from "@/lib/utils";

const CategoryDetailsForm = ({ categoryDetails }) => {
  const parent = findParent(categoryDetails);

  return (
    <Form.Root>
      <div className="grow space-y-7">
        <Form.Field className="mb-2 flex items-center gap-4" name="isEnabled">
          <div className="flex flex-wrap items-center px-3">
            <Form.Label className=" font-medium leading-8">Enabled</Form.Label>
          </div>
          <Form.Control asChild>
            <Switch checked={categoryDetails.isEnabled} />
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
              value={categoryDetails.title}
              type="text"
              className="h-12 rounded-3xl border-none bg-slate-100 px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
            />
          </Form.Control>
          <p className="mt-1 px-3 text-xs font-medium dark:text-zinc-400">The name is how it appears on Oshofree.com</p>
        </Form.Field>
        <Form.Field className="mb-2" name="slug">
          <div className="flex flex-wrap items-center px-3">
            <Form.Label className=" font-medium leading-8">Slug</Form.Label>
            <Form.Message className="ml-auto flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter slug
            </Form.Message>
          </div>
          <Form.Control asChild>
            <Input
              value={categoryDetails.slug}
              required
              type="text"
              className="h-12 rounded-3xl border-none bg-slate-100 px-6 text-base font-medium shadow-inner data-[invalid]:border-red-500 focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
            />
          </Form.Control>
          <p className="mt-1 px-3 text-xs font-medium dark:text-zinc-400">
            The &quot;slug&quot; is the URL-friendly version of the name. It should be all lowercase and contains only letters, numbers and hyphens.
          </p>
        </Form.Field>
        <div className="mb-2" name="parent">
          <div className="flex flex-wrap items-center px-3">
            <p className=" font-medium leading-8">Parent Category</p>
          </div>
          <Select value={parent?.slug}>
            <SelectTrigger className="h-12 max-w-md rounded-3xl border-none bg-slate-100 px-6 text-base font-medium shadow-inner focus:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950">
              <SelectValue placeholder="None" aria-label={parent?.slug} />
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
            Assign a parent category to create a hierarchy. If <b>&quot;None&quot;</b> is selected, this category would be stored as a root category.
          </p>
        </div>
        <Form.Field className="mb-2" name="description">
          <div className="flex flex-wrap items-center px-3">
            <Form.Label className=" font-medium leading-8">Description</Form.Label>
          </div>
          <Form.Control asChild>
            <Textarea
              value={categoryDetails.description}
              className="rounded-xl px-6 text-base font-medium shadow-inner focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
            />
          </Form.Control>
        </Form.Field>
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

export default CategoryDetailsForm;
