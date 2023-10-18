import TableImage from "@/components/table/TableImage";
import RowTitle from "@/components/table/RowTitle";
import { findParent } from "@/lib/utils";
import { randomQuantity } from "@mui/x-data-grid-generator";

export const categoryColumns = [
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
    type: "number",
    headerName: "Deals",
    width: 120,
    valueGetter: ({ row }) => randomQuantity(),
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
];
