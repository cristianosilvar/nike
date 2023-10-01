import React from "react";
import { Button, ButtonProps } from "@mui/material";

export interface ButtonDefaultInterface extends ButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | undefined;
}

const ButtonDefault = ({
  children,
  size = "medium",
  ...rest
}: ButtonDefaultInterface) => {
  return (
    <Button size={size} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonDefault;
