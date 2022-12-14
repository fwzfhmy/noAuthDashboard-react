import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Form from "./Form"
const LoginPage = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          sociopedia
        </Typography>
      </Box>
      <Box
        width={isNonMobile ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        backgroundColor={theme.palette.background.alt}
        borderRadius="1.5rem"
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Sociopedia, the somialca afnafnafor sociopaths!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
