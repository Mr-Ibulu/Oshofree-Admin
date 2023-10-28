import { randomBoolean, randomCreatedDate, randomId, randomInt, randomPrice, randomRating, randomUpdatedDate } from "@mui/x-data-grid-generator";
import electronics from "@/public/images/electronics.png";
import fashion from "@/public/images/fashion.png";
import fashion2 from "@/public/images/fashion2.jpg";
import food from "@/public/images/food.png";
import food2 from "@/public/images/food2.jpg";
import { vendors } from "./vendors";

const getRandomVendor = () => {
  return vendors[Math.floor(Math.random() * vendors.length)];
};

export const products = [
  {
    id: randomInt(0, 400),
    image: electronics,
    title: "Costway 6.5QT Air Fryer Oilless Cooker w/ 8 Preset Functions&Smart Touch Screen Black ES10020US-BK",
    prevPrice: randomPrice(),
    vendorId: getRandomVendor().id,
    available: randomBoolean(),
    createdOn: randomCreatedDate(),
    updatedOn: randomUpdatedDate(),
    expiry: randomUpdatedDate(),
    rating: randomRating(),
    type: "product",
    isNew: true,
    categories: ["electronics", "entertainment", "phones-and-tablet"],
    completedSales: randomInt(100, 2000),
    // newPrice: 1000,
  },
  {
    id: randomInt(0, 400),
    image: fashion2,
    title: "Men's Galaxy By Harvic Moisture Wicking Tagless Polo Shirt",
    prevPrice: randomPrice(),
    vendorId: getRandomVendor().id,
    available: randomBoolean(),
    createdOn: randomCreatedDate(),
    updatedOn: randomUpdatedDate(),
    expiry: randomUpdatedDate(),
    rating: randomRating(),
    type: "product",
    isNew: true,
    categories: ["local", "mens-fashion"],
    completedSales: randomInt(100, 2000),
    // newPrice: 1000,
  },
  {
    id: randomInt(0, 400),
    image: fashion,
    title: "LESIES Women's Summer Halter Floral Dresses Casual Sleeveless Ruffle Sundress",
    prevPrice: randomPrice(),
    vendorId: getRandomVendor().id,
    available: randomBoolean(),
    createdOn: randomCreatedDate(),
    updatedOn: randomUpdatedDate(),
    expiry: randomUpdatedDate(),
    rating: randomRating(),
    type: "product",
    isNew: true,
    categories: ["local", "womens-fashion"],
    completedSales: randomInt(100, 2000),
    // newPrice: 1000,
  },
  {
    id: randomInt(0, 400),
    image: food,
    title: "Food and Drinks at Kenny's Ribs & Chicken",
    prevPrice: randomPrice(),
    vendorId: getRandomVendor().id,
    available: randomBoolean(),
    createdOn: randomCreatedDate(),
    updatedOn: randomUpdatedDate(),
    expiry: randomUpdatedDate(),
    rating: randomRating(),
    type: "product",
    isNew: true,
    categories: ["local", "food-and-drinks", "family"],
    completedSales: randomInt(100, 2000),
    // newPrice: 1000,
  },
  {
    id: randomInt(0, 400),
    image: food2,
    title: "Toward Breakfast or Lunch at Apple Villa",
    prevPrice: randomPrice(),
    vendorId: getRandomVendor().id,
    available: randomBoolean(),
    createdOn: randomCreatedDate(),
    updatedOn: randomUpdatedDate(),
    expiry: randomUpdatedDate(),
    rating: randomRating(),
    type: "product",
    isNew: true,
    categories: ["local", "food-and-drinks", "family"],
    completedSales: randomInt(100, 2000),
    // newPrice: 1000,
  },
];
