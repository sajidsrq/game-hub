import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/react.svg";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";
export const NavBar = () => {
  return (
    <HStack padding="30px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
