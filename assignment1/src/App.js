import React from "react";
import "ag-grid-community/dist/styles/ag-grid.css";

import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Table from "./Table";

function App() {
  return (
    <>
      <div
        style={{
          maxwidth: "70%",
          margin: " 0 auto",
          backgroundColor: "#659DBD",
        }}
      >
        <div
          style={{
            textAlign: "center",
            paddingBottom: "10px",
          }}
        >
          <h1>Olympic Medals Winners Table</h1>
        </div>
        <Table />
      </div>
    </>
  );
}

export default App;
