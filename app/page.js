"use client";

import React from "react";
import RevenueLineChart from "@/components/charts/RevenueLineChart";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { MdOutlineArrowDownward, MdOutlineArrowUpward, MdOutlineDiscount, MdOutlineGroups } from "react-icons/md";
import { revenueGrowth } from "@/data/revenueGrowth";
import DataTable from "@/components/table/DataTable";
import { topSellingColumns } from "./topSellingColums";
import { getRecentOrders, getTopTenSellingDeals } from "@/lib/utils";
import Link from "next/link";
import TableImage from "@/components/table/TableImage";
import numeral from "numeral";

const Dashboard = () => {
  return (
    <>
      <div className="mb-12 space-y-2">
        <h1 className="truncate text-2xl font-semibold [word-spacing:4px] sm:text-3xl">Welcome back, John Doe</h1>
        <p className="text-xs font-medium text-gray-700 [word-spacing:1px] dark:text-gray-400 sm:text-sm">
          Here&apos;s a brief summary of what&apos;s happening on Oshofree
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 pb-5 xl:grid-cols-4">
        <div className="space-y-8 sm:space-y-12 xl:col-span-3">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="flex flex-col rounded-xl bg-white p-5 shadow-md dark:bg-zinc-800">
              <div className="mb-6 flex items-center">
                <div className="space-y-1">
                  <h2 className="text-lg font-medium">Revenue</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Last 30 days</p>
                </div>
                <div className="ml-auto mr-3 text-3xl text-green-600 dark:text-green-500">
                  <LiaMoneyBillWaveSolid />
                </div>
              </div>
              <div className="mt-auto flex items-center">
                <p className="mr-1 truncate text-2xl font-semibold">{"\u20A6"} 100,000,000</p>
                <div className="ml-auto mr-3 inline-flex items-center text-xs font-medium">
                  <MdOutlineArrowUpward className="text-lg text-green-600" />
                  <span>+12%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-white p-5 shadow-md dark:bg-zinc-800">
              <div className="mb-6 flex items-center">
                <div className="space-y-1">
                  <h2 className="text-lg font-medium">Active Customers</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Last 30 days</p>
                </div>
                <div className="ml-auto mr-3 text-3xl text-sky-600 dark:text-sky-500">
                  <MdOutlineGroups />
                </div>
              </div>
              <div className="mt-auto flex items-center">
                <p className="mr-1 truncate text-2xl font-semibold">230,400</p>
                <div className="ml-auto mr-3 inline-flex items-center text-xs font-medium">
                  <MdOutlineArrowUpward className="text-lg text-green-600" />
                  <span>+20%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-white p-5 shadow-md dark:bg-zinc-800">
              <div className="mb-6 flex items-center">
                <div className="space-y-1">
                  <h2 className="text-lg font-medium">Total Deals</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Last 30 days</p>
                </div>
                <div className="ml-auto mr-3 text-3xl text-red-600 dark:text-red-500">
                  <MdOutlineDiscount />
                </div>
              </div>
              <div className="mt-auto flex items-center">
                <p className="mr-1 truncate text-2xl font-semibold">5,235</p>
                <div className="ml-auto mr-3 inline-flex items-center text-xs font-medium">
                  <MdOutlineArrowDownward className="text-lg text-red-600" />
                  <span>-2%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-7 rounded-xl bg-white p-5 shadow-md dark:bg-zinc-800">
            <h2 className="text-lg font-medium">Earning Statistics</h2>
            <div className="h-72">
              <RevenueLineChart data={revenueGrowth} />
            </div>
          </div>
          <div className="space-y-7 rounded-xl bg-white p-5 shadow-md dark:bg-zinc-800">
            <div className="text-lg font-medium">Top Selling Deals</div>
            <div className="h-96">
              <DataTable
                columns={topSellingColumns}
                rows={getTopTenSellingDeals()}
                defaultSortedColumn="completedSales"
                showToolbar={false}
                justifyRowContent={true}
              />
            </div>
          </div>
        </div>
        <div className="h-full overflow-y-auto xl:relative xl:scrollbar-none">
          <div className="w-full space-y-8 xl:absolute">
            <div className="rounded-xl bg-white p-5 shadow-md dark:bg-zinc-800">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-medium">Recent Orders</h2>
                <Link href={"/orders"} className="ml-auto min-w-fit text-sm font-medium underline-offset-2 hover:underline">
                  See all
                </Link>
              </div>
              <div className="mt-3 max-h-64 space-y-5 overflow-y-auto border-t-2 py-4 pr-2 scrollbar-track-zinc-200 scrollbar-thumb-zinc-400 scrollbar-track-rounded-full scrollbar-thumb-rounded-full dark:border-zinc-600 dark:scrollbar-track-zinc-700 dark:scrollbar-thumb-zinc-900 xl:pr-0 xl:scrollbar-none xl:hover:scrollbar-thin">
                {getRecentOrders().map((order) => (
                  <div key={order.id} className="flex items-center gap-3">
                    <div className="flex items-center gap-3">
                      <TableImage row={order.deal} className={"h-9 w-9"} />
                      <div className="text-sm font-medium">
                        <p className="line-clamp-2 max-w-xs">{order.deal.title}</p>
                      </div>
                    </div>
                    <div className="ml-auto shrink-0 text-sm font-medium">{`\u20A6 ${numeral(order.deal.prevPrice).format("0.0a")}`}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-md dark:bg-zinc-800">
              <div className="flex items-center gap-3">
                <h2 className="truncate text-lg font-medium">Recent Admin Activity</h2>
                <Link href={""} className="ml-auto min-w-fit text-sm font-medium underline-offset-2 hover:underline">
                  See all
                </Link>
              </div>
              <div className="mt-3 max-h-64 space-y-5 overflow-y-auto border-t-2 py-4 pr-2 scrollbar-track-zinc-200 scrollbar-thumb-zinc-400 scrollbar-track-rounded-full scrollbar-thumb-rounded-full dark:border-zinc-600 dark:scrollbar-track-zinc-700 dark:scrollbar-thumb-zinc-900 xl:pr-0 xl:scrollbar-none xl:hover:scrollbar-thin">
                <div className="flex gap-3">
                  <div className="max-w-xs truncate">
                    <p className="truncate text-sm font-semibold capitalize">New Product Added added added</p>
                    <p className="truncate text-xs font-medium text-gray-500 dark:text-zinc-400">Dickson added a new product</p>
                  </div>
                  <div className="ml-auto min-w-fit text-xs font-medium">2 mins ago</div>
                </div>
                <div className="flex gap-3">
                  <div className="max-w-xs truncate">
                    <p className="truncate text-sm font-semibold capitalize">New Service Added added added</p>
                    <p className="truncate text-xs font-medium text-gray-500 dark:text-zinc-400">Douglas added a new service</p>
                  </div>
                  <div className="ml-auto min-w-fit text-xs font-medium">10 mins ago</div>
                </div>
                <div className="flex gap-3">
                  <div className="max-w-xs truncate">
                    <p className="truncate text-sm font-semibold capitalize">Log in</p>
                    <p className="truncate text-xs font-medium text-gray-500 dark:text-zinc-400">Mary Jane logged into their account</p>
                  </div>
                  <div className="ml-auto min-w-fit text-xs font-medium">12 mins ago</div>
                </div>
                <div className="flex gap-3">
                  <div className="max-w-xs truncate">
                    <p className="truncate text-sm font-semibold capitalize">Order Status Updated</p>
                    <p className="truncate text-xs font-medium text-gray-500 dark:text-zinc-400">Dickson changed the status of order 94728</p>
                  </div>
                  <div className="ml-auto min-w-fit text-xs font-medium">2 mins ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
