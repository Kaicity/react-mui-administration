import { Box, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import { MockDataCustomer } from "../../data/mockData";
import Header from "../../components/Header";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import Form from "./CustomerFormData";
import DataTable from "../../components/DataTable";
import { GridToolbar } from "@mui/x-data-grid";
import ModalDialog from "../../components/ModalDialog";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
const Customer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openFormDialog, setOpenFormDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenFormDialog(true);
  };

  const handleClickClose = () => {
    setOpenFormDialog(false);
  };

  const handleEdit = (id) => {
    console.log("Edit customer with ID:", id);
    setOpenFormDialog(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      console.log("Delete customer with ID:", id);
    }
  };

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
    {
      field: "action",
      headerName: "",
      flex: 1,
      headerAlign: "left",
      align: "left",
      sortable: false,
      type: "null",
      disableColumnMenu: true,
      renderCell: (params) => (
        <Box
          display="flex"
          gap="20px"
          width="100%"
          alignItems="center"
          mt="5px"
        >
          <IconButton color="warning" onClick={() => handleEdit(params.row.id)}>
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
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
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="secondary"
            endIcon={<AddCircleOutlineIcon />}
            onClick={handleClickOpen}
          >
            Create
          </Button>

          {/* DIALOG FORM */}
          <ModalDialog
            title="Create a new Customer"
            openFormDialog={openFormDialog}
            handleClickClose={() => {
              setOpenFormDialog(false);
            }}
            content={<Form onClose={handleClickClose} />}
            sx={{
              "& .MuiDialog-paper": {
                backgroundColor: colors.primary[400],
              },
            }}
          />
        </Box>

        <DataTable
          rows={MockDataCustomer}
          columns={columns}
          checkboxSelection={true}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Customer;
