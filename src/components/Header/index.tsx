import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

import Logotipo from "../../../public/assets/logotipo.svg";

import ButtonText from "../Buttons/ButtonText";

const Header = () => {
  return (
    <Box
      px={"2rem"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Image src={Logotipo} alt={"Logo da Nike"} width={100} />
      <ButtonText size="large">Login</ButtonText>
    </Box>
  );
};

export default Header;
