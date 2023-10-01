import React from "react";
import ButtonDefault, { ButtonDefaultInterface } from "..";

interface ButtonLink extends ButtonDefaultInterface {}

const ButtonLink = ({ children, ...rest }: ButtonDefaultInterface) => {
  return <ButtonDefault {...rest}>{children}</ButtonDefault>;
};

export default ButtonLink;
