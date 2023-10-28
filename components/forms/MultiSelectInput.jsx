"use client";

import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MdAdd } from "react-icons/md";
import { findAllDescendantCategory, findAllRootCategories } from "@/lib/utils";

const MultiSelectInput = ({ defaultSelectedOptions = [], labelTitle = "" }) => {
  const [selectedOptions, setSelectedOptions] = useState(defaultSelectedOptions);

  const attachCategory = (name) => {
    if (selectedOptions.includes(name)) {
      return;
    }
    setSelectedOptions([...selectedOptions, name]);
  };

  const removeCategory = (event, name) => {
    event.preventDefault();
    const filteredArr = selectedOptions.filter((el) => el !== name);
    setSelectedOptions(filteredArr);
  };

  return (
    <div className="mb-2 grid" name="options">
      <div className="flex flex-wrap items-center px-3">
        <p className=" font-medium leading-8">{labelTitle}</p>
      </div>
      <div className="relative min-h-[48px] max-w-md rounded-3xl bg-zinc-100 px-6 py-3 text-base font-medium shadow-inner focus:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950">
        {selectedOptions.map((cat) => (
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
          <PopoverContent className="max-h-80 w-80 overflow-y-auto scrollbar-track-zinc-200 scrollbar-thumb-zinc-400 scrollbar-track-rounded-full scrollbar-thumb-rounded-full dark:scrollbar-track-zinc-700 dark:scrollbar-thumb-zinc-800 xl:scrollbar-thin">
            {findAllRootCategories().map((cat) => (
              <React.Fragment key={cat.slug}>
                <button
                  value={cat.slug}
                  className="my-1 block w-full px-1 py-1 text-start text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  onClick={() => attachCategory(cat.title)}
                >
                  {cat.title}
                </button>
                {findAllDescendantCategory(cat).map((subCat) => (
                  <button
                    key={subCat.slug}
                    value={subCat.slug}
                    className="my-1 block w-full px-1 py-1 text-start text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    onClick={() => attachCategory(subCat.title)}
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
  );
};

export default MultiSelectInput;
