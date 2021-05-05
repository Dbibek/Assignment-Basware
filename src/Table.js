import React from "react";
import useFetchData from "./Hooks/useFetchData";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

export default function Table() {
  const { players, error } = useFetchData();

  const editableCellStyle = { backgroundColor: "white", cursor: "pointer" };
  const nonEditableCellStyle = {
    backgroundColor: "#CCC",
    pointerEvents: "none",
    opacity: 0.5,
  };
  return (
    <div className="ag-theme-alpine" style={{ height: "100vh", width: "100%" }}>
      <div
        id="myGrid"
        style={{
          height: "100%",
          width: "100%",
        }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          defaultColDef={{
            flex: 1,
            minWidth: 150,
          }}
          rowData={players}
          pagination={true}
          paginationPageSize={20}
        >
          <AgGridColumn
            field="athlete"
            editable={true}
            cellStyle={editableCellStyle}
          />
          <AgGridColumn
            field="date"
            editable={true}
            cellStyle={editableCellStyle}
          />
          <AgGridColumn field="country" cellStyle={nonEditableCellStyle} />
          <AgGridColumn
            field="year"
            maxWidth={120}
            cellStyle={nonEditableCellStyle}
          />
          <AgGridColumn
            field="sport"
            editable={true}
            cellStyle={editableCellStyle}
          />
        </AgGridReact>
      </div>
    </div>
  );
}
