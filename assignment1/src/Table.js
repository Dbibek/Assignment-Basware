import React from "react";
import useFetchData from "./Hooks/useFetchData";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

export default function Table() {
  const { players } = useFetchData();

  const editableCellStyle = {
    cursor: "text",
    boxShadow: "inset 0 0 2px #000",
    marginLeft: "10px",
    background: "white",
  };
  const nonEditableCellStyle = {
    backgroundColor: "#CCC",
    pointerEvents: "none",
    opacity: 0.5,
    marginLeft: "10px",
  };
  return (
    <div className="ag-theme-alpine" style={{ height: "100vh" }}>
      <div
        id="myGrid"
        style={{
          height: "100%",
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
            width="150px"
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
