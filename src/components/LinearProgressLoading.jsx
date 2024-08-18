import {Box} from "@mui/material"
import LinearProgress from '@mui/material/LinearProgress';

const LinearProgressLoading = () => {
  return (
    <Box sx={{ width: '100%', mt: "10px", mb: "10px" }}>
      <LinearProgress color="secondary" />
    </Box>
  );
};

export default LinearProgressLoading;
