import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MdOutlineCheck, MdOutlineClose, MdRemoveRedEye } from "react-icons/md";

export const orderColumns = [
  {
    field: "actions",
    headerName: "View",
    width: 100,
    renderCell: ({ row }) => (
      <Link href={`/orders/${row.orderId}`} className="rounded-full p-2 hover:bg-zinc-200 dark:hover:bg-zinc-900">
        <MdRemoveRedEye className="text-xl text-zinc-600 dark:text-zinc-400" />
      </Link>
    ),
  },
  {
    field: "orderId",
    headerName: "Order No",
    width: 130,
  },
  {
    field: "date",
    type: "dateTime",
    headerName: "Order Date",
    width: 200,
  },
  {
    field: "customerId",
    headerName: "Customer ID",
    width: 130,
    renderCell: ({ value }) => (
      <Link href={`/customers/${value}`} className="truncate decoration-2 underline-offset-4 hover:underline">
        {value}
      </Link>
    ),
  },
  {
    field: "deal",
    headerName: "Product/Service",
    width: 200,
    valueFormatter: ({ value }) => value.title,
    renderCell: ({ value }) =>
      value.type === "service" ? (
        <Link href={`/services/${value.id}`} className="truncate decoration-2 underline-offset-4 hover:underline">
          {value.title}
        </Link>
      ) : value.type === "product" ? (
        <Link href={`/products/${value.id}`} className="truncate decoration-2 underline-offset-4 hover:underline">
          {value.title}
        </Link>
      ) : (
        value.title
      ),
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
  },
  {
    field: "discount",
    headerName: "Discount",
    width: 120,
    valueFormatter: ({ value }) => `${value.toLocaleString()}%`,
  },
  {
    field: "totalPrice",
    headerName: "Total",
    width: 120,
    valueFormatter: ({ value }) => `\u20A6 ${value.toFixed(2)}`,
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: ({ row }) =>
      row.status === "pending" ? (
        <Badge className="space-x-2 bg-sky-600 dark:bg-sky-600 dark:text-white">
          <span>{row.statusInfo}</span>
          <span className="block h-5 w-5 animate-spin rounded-full border-4 border-gray-300 border-t-white"></span>
        </Badge>
      ) : row.status === "complete" ? (
        <Badge className="space-x-2 bg-green-600 dark:bg-green-600 dark:text-white">
          <span>{row.statusInfo}</span>
          <span>
            <MdOutlineCheck className="text-lg" />
          </span>
        </Badge>
      ) : (
        <Badge variant={"destructive"} className="space-x-2">
          <span>{row.statusInfo}</span>
          <span>
            <MdOutlineClose className="text-lg" />
          </span>
        </Badge>
      ),
  },
];
