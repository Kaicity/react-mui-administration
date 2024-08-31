import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import DataTablePro from "../../components/DataTablePro";

const DataGridPro = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ margin: "20px" }}>
      <Header title="DataGrid Pro" subtitle="DataGrid pro loading component" />

      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(4, 1fr)", // 4 columns on extra small screens
          sm: "repeat(8, 1fr)", // 8 columns on small screens
          md: "repeat(12, 1fr)", // 12 columns on medium screens and up
        }}
        gridAutoRows="160px"
        gap="20px"
      >
        {/* DATAGRID PRO */}
        <Box
          gridColumn={{ xs: "span 12", sm: "span 6" }}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <DataTablePro
            loading={true}
            slotProps={{
              loadingOverlay: {
                variant: "skeleton",
                noRowsVariant: "skeleton",
              },
            }}
            initialState={{
              pinnedColumns: {
                left: ["desk"],
              },
            }}
          />
        </Box>

        <Box
          gridColumn={{ xs: "span 12", sm: "span 6" }}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <DataTablePro
            loading={false}
            slotProps={{
              loadingOverlay: {
                variant: "skeleton",
                noRowsVariant: "skeleton",
              },
            }}
            initialState={{
              pinnedColumns: {
                left: ["desk"],
              },
            }}
          />
        </Box>

        <Box
          gridColumn={{ xs: "span 12", sm: "span 6" }}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <DataTablePro loading={true} />
        </Box>

        <Box
          gridColumn={{ xs: "span 12", sm: "span 6" }}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <DataTablePro
            loading={true}
            slotProps={{
              loadingOverlay: {
                variant: "linear-progress",
                noRowsVariant: "linear-progress",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DataGridPro;
