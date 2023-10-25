import { randomCompanyName, randomCreatedDate, randomInt, randomUnitPrice, randomUpdatedDate } from "@mui/x-data-grid-generator";
import { vendors } from "./vendors";

const payoutStatus = ["pending", "complete", "declined"];

const getRandomStatus = () => {
  return payoutStatus[Math.floor(Math.random() * payoutStatus.length)];
};
const getRandomVendor = () => {
  return vendors[Math.floor(Math.random() * vendors.length)];
};
export const payouts = [
  {
    status: getRandomStatus(),
    id: randomInt(10000, 60000),
    dateCreated: randomCreatedDate(),
    dateDue: randomUpdatedDate(),
    amount: randomUnitPrice(),
    recipient: getRandomVendor(),
    accountNo: randomInt(11111111, 99999999),
    bank: randomCompanyName(),
  },
  {
    status: getRandomStatus(),
    id: randomInt(10000, 60000),
    dateCreated: randomCreatedDate(),
    dateDue: randomUpdatedDate(),
    amount: randomUnitPrice(),
    recipient: getRandomVendor(),
    accountNo: randomInt(11111111, 99999999),
    bank: randomCompanyName(),
  },
  {
    status: getRandomStatus(),
    id: randomInt(10000, 60000),
    dateCreated: randomCreatedDate(),
    dateDue: randomUpdatedDate(),
    amount: randomUnitPrice(),
    recipient: getRandomVendor(),
    accountNo: randomInt(11111111, 99999999),
    bank: randomCompanyName(),
  },
  {
    status: getRandomStatus(),
    id: randomInt(10000, 60000),
    dateCreated: randomCreatedDate(),
    dateDue: randomUpdatedDate(),
    amount: randomUnitPrice(),
    recipient: getRandomVendor(),
    accountNo: randomInt(11111111, 99999999),
    bank: randomCompanyName(),
  },
  {
    status: getRandomStatus(),
    id: randomInt(10000, 60000),
    dateCreated: randomCreatedDate(),
    dateDue: randomUpdatedDate(),
    amount: randomUnitPrice(),
    recipient: getRandomVendor(),
    accountNo: randomInt(11111111, 99999999),
    bank: randomCompanyName(),
  },
];
