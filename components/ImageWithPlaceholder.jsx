import React from "react";
import getBase64Url from "@/lib/getBase64Url";
import Image from "next/image";

const ImageWithPlaceholder = async ({ src, alt = "", fill = false, sizes = null, priority = false, className = null }) => {
  const blurDataUrl = typeof src === "object" ? null : await getBase64Url(src);
  return (
    <Image src={src} alt={alt} fill={fill} sizes={sizes} placeholder="blur" blurDataURL={blurDataUrl} priority={priority} className={className} />
  );
};

export default ImageWithPlaceholder;
