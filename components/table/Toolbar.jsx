import React from "react";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

const TableToolbar = () => {
  return (
    <GridToolbarContainer className="mb-4 text-red-500 ">
      <GridToolbarColumnsButton style={{ fontFamily: "inherit" }} />
      <GridToolbarFilterButton style={{ fontFamily: "inherit" }} />
      <GridToolbarDensitySelector style={{ fontFamily: "inherit" }} />
      <GridToolbarExport style={{ fontFamily: "inherit" }} />
    </GridToolbarContainer>
  );
};

export default TableToolbar;
