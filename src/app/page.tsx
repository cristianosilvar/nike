"use client";

import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Header from "@/components/Header";
import Main from "@/components/Main";

const defaultTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Main></Main>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}
