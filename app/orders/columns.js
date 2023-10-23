import Link from "next/link";
import { MdRemoveRedEye } from "react-icons/md";

export const orders = [
  {
    field: "actions",
    headerName: "View",
    width: 100,
    renderCell: ({ row }) => (
      <Link href={`/orders/${row.id}`} className="rounded-full p-2 hover:bg-zinc-200 dark:hover:bg-zinc-900">
        <MdRemoveRedEye className="text-xl text-zinc-600 dark:text-zinc-400" />
      </Link>
    ),
  },
];
