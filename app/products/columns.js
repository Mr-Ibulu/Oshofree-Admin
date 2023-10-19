import TableImage from "@/components/table/TableImage";
import RowTitle from "@/components/table/RowTitle";
import { findCategory } from "@/lib/utils";
import { randomRate } from "@mui/x-data-grid-generator";
import { Badge } from "@/components/ui/badge";
import { MdManageAccounts, MdModeEditOutline, MdOutlineModeEditOutline } from "react-icons/md";
import Link from "next/link";

export const productColums = [
  {
    field: "actions",
    headerName: "Manage",
    width: 100,
    renderCell: ({ row }) => (
      <Link href={`/products/${row.id}`} className="rounded-full p-2 hover:bg-zinc-200 dark:hover:bg-zinc-900">
        <MdManageAccounts className="text-xl text-zinc-600 dark:text-zinc-400" />
      </Link>
    ),
  },
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "image",
    sortable: false,
    headerName: "Image",
    minWidth: 100,
    renderCell: ({ row }) => <TableImage row={row} />,
  },
  {
    field: "title",
    headerName: "Name",
    minWidth: 250,
    renderCell: ({ row }) => <RowTitle row={row} />,
  },
  {
    field: "prevPrice",
    type: "number",
    headerName: "Original Price",
    width: 160,
  },
  {
    field: "newPrice",
    type: "number",
    headerName: "Discounted Price",
    width: 160,
    valueGetter: ({ row }) => row.prevPrice - randomRate() * row.prevPrice,
  },
  {
    field: "discount",
    headerName: "Discount",
    width: 120,
    valueGetter: () => randomRate() * 100,
    valueFormatter: ({ value }) => `${value.toLocaleString()}%`,
  },
  {
    field: "available",
    headerName: "Available",
    width: 120,
    type: "boolean",
    renderCell: ({ row }) =>
      row.available ? (
        <Badge className="bg-green-600 dark:bg-green-600 dark:text-white">Available</Badge>
      ) : (
        <Badge variant="destructive">Expired</Badge>
      ),
  },
  {
    field: "vendorId",
    headerName: "Vendor ID",
    width: 100,
  },
  {
    field: "createdOn",
    type: "date",
    headerName: "Date Created",
    minWidth: 120,
  },
  {
    field: "updatedOn",
    type: "date",
    headerName: "Date Modified",
    minWidth: 120,
  },
  {
    field: "expiry",
    type: "date",
    headerName: "Expiry",
    minWidth: 120,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 100,
  },
  {
    field: "categories",
    headerName: "Categories",
    minWidth: 250,
    valueFormatter: ({ value }) => value.map((slug) => findCategory(slug).title),
  },
];
