import { Box } from "@mui/material";
import { useDemoData } from "@mui/x-data-grid-generator";
import { DataGridPro } from "@mui/x-data-grid-pro";

const DataTablePro = ({ loading, initialState, slotProps }) => {
  const { data, index } = useDemoData({
    dataSet: "Employee",
    rowLength: 100,
    maxColumns: 9,
  });

  return (
    <Box sx={{ width: "100%", height: 400 }}>
      <DataGridPro
        {...data}
        key={index}
        loading={loading}
        slotProps={slotProps}
        initialState={initialState}
      />
    </Box>
  );
};

export default DataTablePro;
