import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Switch from "@mui/material/Switch";

const SettingSystem = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Settings" subtitle="Setting all configuration a System" />
      <Box
        height="75vh"
        width="100%"
        gap={4}
        p="2rem"
        sx={{ border: "2px solid grey" }}
      >
        <Box display="flex" mb="5px" alignItems="center" gap="10px">
          <Typography variant="h5">Config theme system</Typography>
          <Switch defaultChecked color="secondary" />
        </Box>

        <Box display="flex" mb="5px" alignItems="center" gap="10px">
          <Typography variant="h5">Config theme system</Typography>
          <Switch defaultChecked color="secondary" />
        </Box>

        <Box display="flex" mb="5px" alignItems="center" gap="10px">
          <Typography variant="h5">Config theme system</Typography>
          <Switch defaultChecked color="secondary" />
        </Box>

        <Box display="flex" mb="5px" alignItems="center" gap="10px">
          <Typography variant="h5">Config theme system</Typography>
          <Switch defaultChecked color="secondary" />
        </Box>

        <Box display="flex" mb="5px" alignItems="center" gap="10px">
          <Typography variant="h5">Config theme system</Typography>
          <Switch defaultChecked color="secondary" />
        </Box>
      </Box>
    </Box>
  );
};

export default SettingSystem;
