"use client";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}
