import { categories } from "@/data/categories";
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const findParent = (childCategory) => {
  return categories.find((parent) => parent.slug === childCategory.parent);
};