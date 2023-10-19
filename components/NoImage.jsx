"use client";
import React from "react";
import Image from "next/image";
import noImageBlack from "@/public/images/no-image-black.svg";
import noImageWhite from "@/public/images/no-image-white.svg";
import { useTheme } from "next-themes";

const NoImage = ({ altText, size, className }) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className={`${className} flex h-full w-full items-center justify-center`}>
      {resolvedTheme === "dark" ? (
        <Image src={noImageWhite} alt={altText} width={size}></Image>
      ) : (
        <Image src={noImageBlack} alt={altText} width={size}></Image>
      )}
    </div>
  );
};

export default NoImage;
