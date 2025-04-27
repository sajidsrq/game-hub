import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/react.svg";
export const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} />
    </HStack>
  );
};
