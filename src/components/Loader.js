import { Box, CircularProgress } from "@material-ui/core";

const Loader = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <CircularProgress color="primary" />
    </Box>
  );
};

export default Loader;
