"use client";

import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import TableToolbar from "@/components/table/Toolbar";
import { useTheme } from "next-themes";

const DataTable = ({
  columns,
  rows,
  searchKeyword = "",
  defaultSearchColumnField = "",
  defaultSortedColumn = "",
  sortOrder = "desc",
  showToolbar = true,
  justifyRowContent = false,
}) => {
  const { resolvedTheme } = useTheme();
  const [useToolbarFilter, setUseToolbarFilter] = useState(true);

  useEffect(() => {
    if (searchKeyword !== "") {
      setUseToolbarFilter(false);
      return;
    }
    setUseToolbarFilter(true);
  }, [searchKeyword]);

  return (
      <DataGrid
        columns={columns}
        rows={rows}
        rowHeight={70}
        initialState={{
          sorting: { sortModel: [{ field: defaultSortedColumn, sort: sortOrder }] },
          pagination: { paginationModel: { pageSize: 20 } },
        }}
        {...(!useToolbarFilter && { filterModel: { items: [{ field: defaultSearchColumnField, operator: "contains", value: searchKeyword }] } })}
        {...(showToolbar && { slots: { toolbar: TableToolbar } })}
        pageSizeOptions={[10, 20, 30]}
        // getRowHeight={() => "auto"}
        sx={{
          borderWidth: "0px",
          fontFamily: "inherit",
          color: "inherit",
          "& .MuiDataGrid-cell": { justifyContent: justifyRowContent ? "center" : "" },
          "& .MuiDataGrid-withBorderColor": { borderColor: resolvedTheme === "dark" ? "#3f3f46" : "" },
          "& .MuiDataGrid-columnSeparator": { visibility: "visible", color: resolvedTheme === "dark" ? "#ef4444" : "" },
          "& .MuiButtonBase-root": { color: "inherit" },
          "& .MuiTablePagination-root": { color: "inherit" },
          "& .MuiDataGrid-toolbarContainer": { gap: "20px" },
        }}
      />
  );
};

export default DataTable;
