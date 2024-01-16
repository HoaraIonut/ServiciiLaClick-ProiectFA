import React from "react";

import { Box, Text, HStack, Center } from "@chakra-ui/react";
import { AddIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../store/Theme.context";

function NavBar() {
  const { theme, switchTheme } = useTheme();
  return (
    <>
      <Box
        width="100vw"
        height="3rem"
        bgColor={theme === "light" ? "#092635" : "#161A30"}
        display="flex"
        justifyContent="space-between"
        fontWeight="bold"
      >
        <Center marginLeft={10}>
          <Link to="/">
            <Text color={theme === "light" ? "white" : "#F0ECE5"}>
              ServiciiLaClick
            </Text>
          </Link>
        </Center>
        <HStack marginRight={10} spacing={5} color="white">
          {theme === "light" && (
            <MoonIcon
              boxSize={5}
              onClick={() => {
                switchTheme();
              }}
              color="white"
            ></MoonIcon>
          )}
          {theme === "dark" && (
            <SunIcon
              boxSize={5}
              onClick={() => {
                switchTheme();
              }}
              color="#F0ECE5"
            ></SunIcon>
          )}
          <Link to="/login">
            <AddIcon
              boxSize={5}
              color={theme === "light" ? "white" : "#F0ECE5"}
            ></AddIcon>
          </Link>
        </HStack>
        <></>
      </Box>
      <Outlet />
    </>
  );
}

export default NavBar;
