import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MdManageAccounts, MdOutlineCheck, MdOutlineClose } from "react-icons/md";

export const payoutColumns = [
  {
    field: "actions",
    headerName: "Manage",
    width: 100,
    renderCell: ({ row }) => (
      <Link href={`/payouts/${row.id}`} className="rounded-full p-2 hover:bg-zinc-200 dark:hover:bg-zinc-900">
        <MdManageAccounts className="text-xl text-zinc-600 dark:text-zinc-400" />
      </Link>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: ({ value }) =>
      value === "pending" ? (
        <Badge className="space-x-2 bg-yellow-600 dark:bg-yellow-600 dark:text-white">
          <span>{value.toUpperCase()}</span>
          <span className="block h-5 w-5 animate-spin rounded-full border-4 border-gray-300 border-t-white"></span>
        </Badge>
      ) : value === "complete" ? (
        <Badge className="space-x-2 bg-green-600 dark:bg-green-600 dark:text-white">
          <span>{value.toUpperCase()}</span>
          <span>
            <MdOutlineCheck className="text-lg" />
          </span>
        </Badge>
      ) : (
        <Badge variant={"destructive"} className="space-x-2">
          <span>{value.toUpperCase()}</span>
          <span>
            <MdOutlineClose className="text-lg" />
          </span>
        </Badge>
      ),
  },
  {
    field: "id",
    headerName: "Reference ID",
    width: 200,
  },
  {
    field: "dateCreated",
    type: "dateTime",
    headerName: "Date Created",
    width: 200,
  },
  {
    field: "dateDue",
    type: "dateTime",
    headerName: "Date Due",
    width: 200,
  },
  {
    field: "amount",
    headerName: "Amount To Pay",
    width: 150,
  },
  {
    field: "recipient",
    headerName: "Recipient",
    width: 230,
    valueGetter: ({ value }) => value.companyName,
  },
  {
    field: "accountNo",
    headerName: "Account Number",
    width: 200,
  },
  {
    field: "bank",
    headerName: "Bank",
    width: 200,
  },
];
