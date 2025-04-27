import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/react.svg";
import { ColorModeSwitch } from "./ColorModeSwitch";
export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="30px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};
