import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({ rows, columns, checkboxSelection, slots }) => {

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      checkboxSelection={checkboxSelection}
      slots={slots}
    />
  );
};

export default DataTable;
