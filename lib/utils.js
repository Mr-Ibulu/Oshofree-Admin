import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { vendors } from "@/data/vendors";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const findAllDescendantCategory = (ancestorCategory, descendantCategories = []) => {
  const filteredCategories = categories.filter((cat) => cat.parent === ancestorCategory.slug);
  for (const result of filteredCategories) {
    descendantCategories.push(result);
    findAllDescendantCategory(result, descendantCategories);
  }
  return descendantCategories;
};

export const findParent = (childCategory) => {
  return categories.find((parent) => parent.slug === childCategory.parent);
};

export const findAllRootCategories = () => {
  return categories.filter((cat) => !cat.parent);
};

export const findCategory = (slug) => {
  return categories.find((cat) => cat.slug === slug);
};

export const findProduct = (id) => {
  return products.find((deal) => deal.id == id);
};
export const findService = (id) => {
  return services.find((deal) => deal.id == id);
};
export const findVendor = (id) => {
  return vendors.find((vendor) => vendor.id == id);
};
