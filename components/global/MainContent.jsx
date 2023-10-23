"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

const MainContent = ({ children }) => {
  const container = useRef(null);
  const pathName = usePathname();
  useEffect(() => {
    container.current.scrollTop = 0;
  }, [pathName]);

  return (
    <div
      ref={container}
      className="relative grow overflow-y-auto scrollbar-track-zinc-200 scrollbar-thumb-zinc-400 scrollbar-track-rounded-full scrollbar-thumb-rounded-full dark:scrollbar-track-zinc-700 dark:scrollbar-thumb-zinc-800 xl:scrollbar-thin"
    >
      {children}
    </div>
  );
};

export default MainContent;
