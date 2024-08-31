import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import DataTable from "../../components/DataTable";
import { MockDataCustomer } from "../../data/mockData";
import { GridToolbar } from "@mui/x-data-grid";

const DataGrid = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "dateOfBirth",
      headerName: "Date of Birth",
      width: 150,
      headerAlign: "left",
      align: "left",
    },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "customerType", headerName: "Customer Type", flex: 1 },
    {
      field: "loyaltyPoints",
      headerName: "Loyalty Points",
      flex: 1,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
  ];

  const stylingBoxDataGridComponent = {
    "& .MuiDataGrid-root": {
      border: "none",
    },
    "& .MuiDataGrid-cell": {
      borderBottom: "none",
    },
    "& .name-column--cell": {
      color: colors.greenAccent[300],
    },
    "& .MuiDataGrid-columnHeader": {
      backgroundColor: colors.blueAccent[700],
      borderBottom: "none",
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: colors.primary[400],
    },
    "& .MuiDataGrid-footerContainer": {
      backgroundColor: colors.blueAccent[700],
      borderTop: "none",
    },
    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
      color: `${colors.grey[100]} !important`,
    },
    "& .MuiCheckbox-root": {
      color: `${colors.greenAccent[200]} !important`,
    },
  };

  return (
    <Box
      sx={{
        margin: "20px",
      }}
    >
      <Header title="Datagrid" subtitle="Datagrid basic component" />

      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(4, 1fr)",
          sm: "repeat(8, 1fr)",
          md: "repeat(12, 1fr)",
        }}
        gridAutoRows="160px"
        gap="20px"
      >
        <Box
          gridColumn={{ xs: "span 12", sm: "span 6" }}
          gridRow="span 2"
          sx={stylingBoxDataGridComponent}
        >
          <Typography variant="h3" fontWeight="bold">
            Basic table
          </Typography>
          <DataTable
            rows={MockDataCustomer}
            columns={columns}
            checkboxSelection={true}
            slots={{ toolbar: GridToolbar }}
          />
        </Box>

        <Box
          gridColumn={{ xs: "span 12", sm: "span 6" }}
          gridRow="span 2"
          sx={stylingBoxDataGridComponent}
        >
          <Typography variant="h3" fontWeight="bold">
            Basic table
          </Typography>
          <DataTable
            rows={MockDataCustomer}
            columns={columns}
            checkboxSelection={true}
            slots={{ toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DataGrid;
