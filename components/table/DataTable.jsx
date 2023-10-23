"use client";

import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import TableToolbar from "@/components/table/Toolbar";
import { useTheme } from "next-themes";

const DataTable = ({ columns, rows, searchKeyword, defaultSearchColumnField, defaultSort = "" }) => {
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
    <div className="h-[50rem] rounded-xl bg-white p-2 shadow-md dark:bg-zinc-800">
      <DataGrid
        columns={columns}
        rows={rows}
        rowHeight={70}
        initialState={{ sorting: { sortModel: [{ field: defaultSort, sort: "asc" }] }, pagination: { paginationModel: { pageSize: 20 } } }}
        {...(!useToolbarFilter && { filterModel: { items: [{ field: defaultSearchColumnField, operator: "contains", value: searchKeyword }] } })}
        slots={{ toolbar: TableToolbar }}
        pageSizeOptions={[10, 20, 30]}
        // getRowHeight={() => "auto"}
        sx={{
          borderWidth: "0px",
          fontFamily: "inherit",
          color: "inherit",
          "& .MuiDataGrid-withBorderColor": { borderColor: resolvedTheme === "dark" ? "#71717a" : "" },
          "& .MuiDataGrid-columnSeparator": { visibility: "visible", color: resolvedTheme === "dark" ? "#ef4444" : "" },
          "& .MuiButtonBase-root": { color: "inherit" },
          "& .MuiTablePagination-root": { color: "inherit" },
          "& .MuiDataGrid-toolbarContainer": { gap: "20px" },
        }}
      />
    </div>
  );
};

export default DataTable;
