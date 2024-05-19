import { CircularProgress, Grid } from "@mui/material";

export default function Loading() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="h-screen">
      <CircularProgress />
      <p className="ml-5">Loading</p>
    </Grid>
  );
}
