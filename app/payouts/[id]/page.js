import React from "react";
import * as Form from "@radix-ui/react-form";
import DetailsHead from "@/components/DetailsHead";
import PayoutStatusSelect from "@/components/PayoutStatusSelect";
import { findPayoutDatail } from "@/lib/utils";
import {
  MdOutlineAccountBalance,
  MdOutlineDateRange,
  MdOutlineLocalPhone,
  MdOutlineMailOutline,
  MdOutlineNumbers,
  MdOutlinePayments,
  MdOutlinePersonPin,
} from "react-icons/md";
import { Input } from "@/components/ui/input";
import { payouts } from "@/data/payouts";

export function generateStaticParams() {
  return payouts.map((payout) => ({ id: payout.id }));
}

const PayoutDetails = ({ params }) => {
  const payoutDetail = findPayoutDatail(params.id);
  return (
    <div className="mx-auto max-w-5xl">
      <DetailsHead headerTitle={`Reference ID: ${payoutDetail.id}`} />
      <div className="mx-auto space-y-7 rounded-xl bg-white px-5 py-5 shadow-md dark:bg-zinc-800">
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <div className="space-x-3">
            <span className="text-sm">Due Date:</span> <span className="font-semibold">{payoutDetail.dateDue.toLocaleDateString()}</span>
          </div>
          <div>
            <PayoutStatusSelect payoutDetail={payoutDetail} />
          </div>
        </div>
        <div>
          <div className="mb-5 flex items-center space-x-3 px-3">
            <span>
              <MdOutlinePersonPin className="text-lg" />
            </span>
            <span>Recipient Name:</span> <span>{payoutDetail.recipient.companyName}</span>
          </div>
          <div className="mb-5 flex items-center space-x-3 px-3">
            <span>
              <MdOutlineMailOutline className="text-lg" />
            </span>
            <span>Email:</span> <span>{payoutDetail.recipient.email}</span>
          </div>
          <div className="mb-5 flex items-center space-x-3 px-3">
            <span>
              <MdOutlineLocalPhone className="text-lg" />
            </span>
            <span>Phone:</span> <span>{payoutDetail.recipient.phone}</span>
          </div>
          <div className="mb-5 flex items-center space-x-3 px-3">
            <span>
              <MdOutlineDateRange className="text-lg" />
            </span>
            <span>Date Created:</span> <span>{payoutDetail.dateCreated.toLocaleDateString()}</span>
          </div>
          <div className="mb-5 flex items-center space-x-3 px-3">
            <span>
              <MdOutlinePayments className="text-lg" />
            </span>
            <span>Amount:</span> <span>&#8358; {payoutDetail.amount}</span>
          </div>
          <div className="mb-5 flex items-center space-x-3 px-3">
            <span>
              <MdOutlineNumbers className="text-lg" />
            </span>
            <span>Account Number:</span> <span>{payoutDetail.accountNo}</span>
          </div>
          <div className="mb-5 flex items-center space-x-3 px-3">
            <span>
              <MdOutlineAccountBalance className="text-lg" />
            </span>
            <span>Bank:</span> <span>{payoutDetail.bank}</span>
          </div>
          <div className="mt-10 flex items-center justify-center rounded-xl border p-3 dark:border-zinc-600">
            <Form.Root className="space-y-7">
              <Form.Field className="mb-2 grid" name="documents">
                <div className="mb-2 px-3">
                  <Form.Label className=" font-medium leading-8">Upload Payment Receipts</Form.Label>
                </div>
                <Form.Control asChild>
                  <Input
                    multiple
                    type="file"
                    accept=".png, .jpg, .jpeg, .pdf, .docx"
                    className="shadow-inner file:mr-2 file:rounded file:bg-white  dark:bg-zinc-900 dark:shadow-zinc-950 dark:file:bg-zinc-700"
                  />
                </Form.Control>
              </Form.Field>
            </Form.Root>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoutDetails;
