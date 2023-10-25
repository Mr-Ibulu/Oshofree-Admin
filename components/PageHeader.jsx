import React from "react";
import { Input } from "./ui/input";
import { MdAdd, MdOutlineSearch } from "react-icons/md";
import { Button } from "./ui/button";
import Link from "next/link";

const PageHeader = ({ title, searchKeyword, setSearchKeyword, searchInputPlaceholder, buttonTitle, buttonLink }) => {
  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">{title}</h1>
      <div className="mb-8 flex flex-col items-center justify-between gap-6 rounded-xl bg-white p-4 shadow-md dark:bg-zinc-800 dark:shadow-zinc-950 sm:flex-row">
        <div className="relative w-full max-w-xs">
          <Input
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            type="text"
            placeholder={searchInputPlaceholder}
            className="h-12 rounded-3xl border-none bg-slate-100 px-6 text-base font-medium shadow-inner placeholder:[word-spacing:4px] focus-visible:ring-transparent dark:bg-zinc-900 dark:shadow-zinc-950"
          />
          <MdOutlineSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl" />
        </div>
        {buttonLink && (
          <Button asChild>
            <Link href={buttonLink} className="rounded-3xl">
              <MdAdd className="mr-2 text-2xl" /> {buttonTitle}
            </Link>
          </Button>
        )}
      </div>
    </>
  );
};

export default PageHeader;
