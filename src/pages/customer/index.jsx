import { Box, Toolbar, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { MockDataCustomer } from "../../data/mockData";
import BadgeIcon from "@mui/icons-material/Badge";
import Header from "../../components/Header";

const Customer = () => {
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

  return (
    <Box m="20px">
      <Header title="CUSTOMERS" subtitle="Managing the Customer" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
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
        }}
      >
        <DataGrid
          rows={MockDataCustomer}
          columns={columns}
          checkboxSelection
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Customer;
