import React from "react";
import ButtonDefault, { ButtonDefaultInterface } from "..";

interface ButtonText extends ButtonDefaultInterface {}

const ButtonText = ({ children, ...rest }: ButtonDefaultInterface) => {
  return (
    <ButtonDefault color="inherit" {...rest}>
      {children}
    </ButtonDefault>
  );
};

export default ButtonText;
