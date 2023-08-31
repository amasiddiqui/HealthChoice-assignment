import React from "react";
import { Button } from "@mui/material";

const SignInButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      style={{
        backgroundColor: "white",
        color: "blue",
        whiteSpace: "nowrap",
        margin: "20px",
        marginLeft: "16px",
        height: "36px",
      }}
    >
      Sign In
    </Button>
  );
};

export default SignInButton;
