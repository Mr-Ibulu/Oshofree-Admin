"use client";

import React, { useEffect, useState } from "react";
import brandBlack from "@/public/images/brand-black.png";
import brandWhite from "@/public/images/brand-white.png";
import Image from "next/image";
import {
  MdOutlineAccountTree,
  MdOutlineAssignment,
  MdOutlineEngineering,
  MdOutlineGroups2,
  MdOutlineHome,
  MdOutlineHomeRepairService,
  MdOutlinePayments,
  MdOutlineStoreMallDirectory,
} from "react-icons/md";
import { TbPackages } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { SheetClose } from "../ui/sheet";

const sidebarOptions = [
  { link: "", title: "Dashboard", icon: <MdOutlineHome /> },
  { link: "categories", title: "Categories", icon: <MdOutlineAccountTree /> },
  { link: "products", title: "Products", icon: <TbPackages /> },
  { link: "services", title: "Services", icon: <MdOutlineHomeRepairService /> },
  { link: "vendors", title: "Vendors", icon: <MdOutlineStoreMallDirectory /> },
  { link: "skilled-workers", title: " Skilled Workers", icon: <MdOutlineEngineering /> },
  { link: "customers", title: "Customers", icon: <MdOutlineGroups2 /> },
  { link: "orders", title: "Orders", icon: <MdOutlineAssignment /> },
  { link: "payouts", title: "Payouts", icon: <MdOutlinePayments /> },
];

const SideBarLink = ({ icon, title, link, isDialogLink }) => {
  const [active, setActive] = useState(false);
  const pathname = usePathname();
  const pathArr = pathname.split("/");

  useEffect(() => {
    setActive(pathArr[1] === link);
  }, [pathArr, link]);

  return isDialogLink ? (
    <SheetClose asChild>
      <Link
        href={`/${link}`}
        className={`${
          active
            ? "bg-zinc-900 text-white dark:bg-red-500"
            : "text-gray-600 hover:bg-zinc-200 hover:text-gray-950 dark:text-gray-400 dark:hover:bg-zinc-900 dark:hover:text-gray-100"
        } flex gap-3 rounded-full  px-5 py-3 font-semibold `}
      >
        <div className="w-8 text-2xl">{icon}</div>
        {title}
      </Link>
    </SheetClose>
  ) : (
    <Link
      href={`/${link}`}
      className={`${
        active
          ? "bg-zinc-900 text-white dark:bg-red-500"
          : "text-gray-600 hover:bg-zinc-200 hover:text-gray-950 dark:text-gray-400 dark:hover:bg-zinc-900 dark:hover:text-gray-100"
      } flex gap-3 rounded-full  px-5 py-3 font-semibold `}
    >
      <div className="w-8 text-2xl">{icon}</div>
      {title}
    </Link>
  );
};

const Sidebar = ({ isDialog = false }) => {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState();
  useEffect(() => {
    setTheme(resolvedTheme);
  }, [resolvedTheme]);
  return (
    <>
      <div className="px-5 py-9 sm:py-12">
        <Image src={theme === "dark" ? brandWhite : brandBlack} alt="logo" priority className="mx-auto w-36" />
      </div>
      <div className="overflow-auto px-5 scrollbar-none scrollbar-track-gray-50 scrollbar-thumb-gray-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full hover:xl:scrollbar-thin">
        <ul>
          {sidebarOptions.map((option) => (
            <li key={option.title} className="my-3">
              <SideBarLink icon={option.icon} title={option.title} link={option.link} isDialogLink={isDialog} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
