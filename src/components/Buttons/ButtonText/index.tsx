import React from "react";
import ButtonDefault, { ButtonDefaultInterface } from "..";

interface ButtonText extends ButtonDefaultInterface {
  children: React.ReactNode;
}

const ButtonText = ({ children, ...rest }: ButtonDefaultInterface) => {
  return (
    <ButtonDefault variant="text" color="inherit" {...rest}>
      {children}
    </ButtonDefault>
  );
};

export default ButtonText;
