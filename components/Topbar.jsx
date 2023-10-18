import React from "react";
import Link from "next/link";
import paul from "@/public/images/paul.png";
import { MdMenu, MdOutlineChatBubbleOutline, MdOutlineNotificationsNone } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ThemeToggle from "./theme/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";

const Topbar = () => {
  return (
    <div className="sticky top-0 z-50 flex h-16 w-full items-center bg-transparent px-6 backdrop-blur">
      <Sheet>
        <SheetTrigger asChild>
          <button className="rounded-full bg-white p-2 text-2xl shadow-md transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none active:scale-95 dark:bg-zinc-800 dark:shadow-zinc-950 sm:text-3xl lg:hidden">
            <MdMenu />
            <span className="sr-only">Menu</span>
          </button>
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[80%] rounded-r-[30px] border-none p-0">
          <div className="scrollbar-none shadow-sidebar h-full overflow-y-scroll rounded-r-[30px] dark:bg-zinc-800 dark:shadow-zinc-950">
            <Sidebar isDialog={true} />
          </div>
        </SheetContent>
      </Sheet>
      <div className="ml-auto flex items-center gap-3">
        <ThemeToggle className="rounded-full bg-white p-2 text-lg shadow-md transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95 dark:bg-zinc-800 dark:shadow-zinc-950 sm:text-xl" />
        <Link
          href={""}
          className="relative rounded-full bg-white p-2 text-lg shadow-md transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95 dark:bg-zinc-800 dark:shadow-zinc-950 sm:text-xl"
        >
          <MdOutlineChatBubbleOutline />
          <span className="absolute left-6 top-0  h-3 w-3 rounded-full border-2 border-white bg-red-500 dark:border-zinc-900"></span>
        </Link>
        <Link
          href={""}
          className="relative rounded-full bg-white p-2 text-lg shadow-md transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95 dark:bg-zinc-800 dark:shadow-zinc-950 sm:text-xl"
        >
          <MdOutlineNotificationsNone />
          <span className="absolute left-6 top-0  h-3 w-3 rounded-full border-2 border-white bg-red-500 dark:border-zinc-900"></span>
        </Link>
        <Link
          href={""}
          className="flex items-center gap-3 rounded-full bg-white p-1 text-lg shadow-md transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95 dark:bg-zinc-800 dark:shadow-zinc-950 sm:px-2 sm:text-xl"
        >
          <div>
            <Avatar className="h-8 w-8">
              <AvatarImage src={paul.src} />
              <AvatarFallback>OS</AvatarFallback>
            </Avatar>
          </div>
          <div className="hidden text-sm sm:block">John Doe</div>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
