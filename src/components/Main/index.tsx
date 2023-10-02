import React from "react";
import Header from "../Header";

const Main = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Main;
