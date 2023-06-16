import { Backdrop, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default function Loading({ isLoading }: { isLoading: boolean }) {
  return (
    <>
      {isLoading ? (
        <ClimbingBoxLoader color="white" size={15} speedMultiplier={1.3} />
      ) : // <Backdrop sx={{ color: "#fff", zIndex: 999 }} open={isLoading}>
      //   <CircularProgress color="inherit" />
      // </Backdrop>
      null}
    </>
  );
}
