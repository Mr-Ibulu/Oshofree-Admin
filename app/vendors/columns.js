import RowTitle from "@/components/table/RowTitle";
import TableImage from "@/components/table/TableImage";
import { Badge } from "@/components/ui/badge";
import { findCategory } from "@/lib/utils";
import Link from "next/link";
import { MdManageAccounts } from "react-icons/md";

export const vendorColumns = [
  {
    field: "actions",
    headerName: "Manage",
    width: 100,
    renderCell: ({ row }) => (
      <Link href={`/vendors/${row.id}`} className="rounded-full p-2 hover:bg-zinc-200 dark:hover:bg-zinc-900">
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
    field: "name",
    headerName: "Name",
    minWidth: 250,
    renderCell: ({ row }) => <RowTitle title={row.name} />,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    minWidth: 200,
  },
  {
    field: "email",
    headerName: "Email Address",
    minWidth: 250,
  },
  {
    field: "companyName",
    headerName: "Company Name",
    minWidth: 250,
  },
  {
    field: "officeAddress",
    headerName: "Official Address",
    minWidth: 250,
  },
  {
    field: "",
    headerName: "Verification",
    width: 200,
    type: "boolean",
    renderCell: ({ row }) =>
      row.isVerified ? (
        <Badge className="bg-green-600 dark:bg-green-600 dark:text-white">Verified</Badge>
      ) : (
        <Badge variant="destructive">Not Verified</Badge>
      ),
  },
  {
    field: "dateJoined",
    type: "date",
    headerName: "Joined On",
    minWidth: 130,
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 100,
    renderCell: ({ value }) =>
      value === "Active" ? (
        <Badge className="bg-green-600 dark:bg-green-600 dark:text-white">{value}</Badge>
      ) : value === "Suspended" ? (
        <Badge variant={"destructive"}>{value}</Badge>
      ) : (
        <Badge className="bg-yellow-600 dark:bg-yellow-600 dark:text-white">{value}</Badge>
      ),
  },
  { field: "dealsAvailable", headerName: "Available Deals", width: 140 },
  {
    field: "follows",
    headerName: "Followers",
    width: 100,
  },
  {
    field: "dealsFulfilled",
    headerName: "Fulfilled Deals",
    width: 140,
  },
  {
    field: "activeCategories",
    headerName: "Associated Categories",
    width: 200,
    valueFormatter: ({ value }) => value.map((slug) => findCategory(slug).title),
  },
];
