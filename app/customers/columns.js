import RowTitle from "@/components/table/RowTitle";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MdRemoveRedEye } from "react-icons/md";

export const customerColumns = [
  {
    field: "actions",
    headerName: "View",
    width: 100,
    renderCell: ({ row }) => (
      <Link href={`/customers/${row.id}`} className="rounded-full p-2 hover:bg-zinc-200 dark:hover:bg-zinc-900">
        <MdRemoveRedEye className="text-xl text-zinc-600 dark:text-zinc-400" />
      </Link>
    ),
  },
  {
    field: "id",
    headerName: "ID",
    width: 100,
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
    field: "address",
    headerName: "Address",
    minWidth: 250,
  },
  {
    field: "dateJoined",
    type: "date",
    headerName: "Joined On",
    minWidth: 130,
  },
  {
    field: "totalOrders",
    headerName: "Total Orders Made",
    width: 150,
  },
  {
    field: "accountStatus",
    headerName: "Account Status",
    minWidth: 150,
    renderCell: ({ value }) =>
      value === "Active" ? (
        <Badge className="bg-green-600 dark:bg-green-600 dark:text-white">{value}</Badge>
      ) : value === "Suspended" ? (
        <Badge variant={"destructive"}>{value}</Badge>
      ) : (
        <Badge className="bg-yellow-600 dark:bg-yellow-600 dark:text-white">{value}</Badge>
      ),
  },
];
