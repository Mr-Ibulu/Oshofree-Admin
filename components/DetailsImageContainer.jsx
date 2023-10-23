import Image from "next/image";
import React from "react";
import NoImagePlaceholder from "./NoImagePlaceholder";
import { Input } from "./ui/input";

const DetailsImageContainer = ({ imageSrc, alt }) => {
  return (
    <div className="w-full sm:w-[500px] xl:w-[300px]">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${alt} image`}
            fill
            sizes={"(max-width: 768px) 30vw, (max-width: 1200px) 70vw, 100vw"}
            className="object-cover"
          />
        ) : (
          <NoImagePlaceholder altText={`${alt}/no-image`} size={50} className={"rounded-xl border dark:border-zinc-950"} />
        )}
      </div>
      <Input
        type="file"
        accept=".png, .jpg, .jpeg"
        className="mx-auto mt-5 shadow-inner file:mr-2 file:rounded file:bg-white dark:bg-zinc-900 dark:shadow-zinc-950 dark:file:bg-zinc-700"
      />
    </div>
  );
};

export default DetailsImageContainer;
