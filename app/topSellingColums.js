"use client";

import RowTitle from "@/components/table/RowTitle";
import TableImage from "@/components/table/TableImage";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import numeral from "numeral";

export const topSellingColumns = [
  {
    field: "image",
    headerAlign: "center",
    sortable: false,
    headerName: "Image",
    minWidth: 100,
    renderCell: ({ row }) => <TableImage row={row} />,
  },
  {
    flex: 1,
    headerAlign: "center",
    field: "title",
    headerName: "Name",
    minWidth: 250,
    renderCell: ({ row }) => (
      <Link
        href={row.type === "service" ? `/services/${row.id}` : `/products/${row.id}`}
        className="w-full decoration-4 underline-offset-4 hover:underline"
      >
        <RowTitle title={row.title} />
      </Link>
    ),
  },
  {
    flex: 1,
    headerAlign: "center",
    field: "newPrice",
    headerName: "Discounted Price",
    minWidth: 160,
    valueFormatter: ({ value }) => `\u20A6 ${value.toFixed(2)}`,
  },
  {
    flex: 1,
    headerAlign: "center",
    field: "available",
    headerName: "Available",
    minWidth: 150,
    type: "boolean",
    renderCell: ({ row }) =>
      row.available ? (
        <Badge className="bg-green-600 dark:bg-green-600 dark:text-white">Available</Badge>
      ) : (
        <Badge variant="destructive">Expired</Badge>
      ),
  },
  {
    flex: 1,
    headerAlign: "center",
    field: "completedSales",
    type: "number",
    headerName: "Total Sales",
    minWidth: 160,
    valueFormatter: ({ value }) => numeral(value).format("0.0a"),
  },
];
