import TableImage from "@/components/table/TableImage";
import RowTitle from "@/components/table/RowTitle";
import { findParent } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { MdManageAccounts } from "react-icons/md";
import Link from "next/link";

export const categoryColumns = [
  {
    field: "actions",
    headerName: "Manage",
    width: 100,
    renderCell: ({ row }) => (
      <Link href={`/categories/${row.slug}`} className="rounded-full p-2 hover:bg-zinc-200 dark:hover:bg-zinc-900">
        <MdManageAccounts className="text-xl text-zinc-600 dark:text-zinc-400" />
      </Link>
    ),
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
    renderCell: ({ row }) => <RowTitle title={row.title} />,
  },
  {
    field: "description",
    headerName: "Description",
    minWidth: 200,
    flex: 1,
  },
  {
    field: "slug",
    headerName: "Slug",
    minWidth: 250,
  },
  {
    field: "deals",
    headerName: "Deals",
    width: 120,
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
    field: "parent",
    headerName: "Parent Category",
    minWidth: 250,
    valueGetter: ({ row }) => row.parent && findParent(row).title,
  },
  {
    field: "isEnabled",
    type: "boolean",
    headerName: "Enabled",
    minWidth: 100,
    renderCell: ({ row }) =>
      row.isEnabled ? (
        <Badge className="bg-green-600 dark:bg-green-600 dark:text-white">Enabled</Badge>
      ) : (
        <Badge variant="destructive">Disabled</Badge>
      ),
  },
];
