import React from "react";

import {
  ChatIcon,
  EmailIcon,
  TimeIcon,
  CloseIcon,
  ViewIcon,
} from "@chakra-ui/icons";

import {
  Flex,
  Avatar,
  Box,
  Button,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useTheme } from "../store/Theme.context";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth.reducer";

function Sidebar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { theme, switchTheme } = useTheme();
  return (
    <VStack
      textAlign="left"
      bgColor={theme === "light" ? "#07202c" : "#101323"}
      height="100%"
      justify="space-between"
      alignItems="flex-start"
      padding={5}
    >
      <Stack direction="column" spacing={4}>
        <Button leftIcon={<EmailIcon />} colorScheme={theme === "light" ? "blue" : "green"} variant="solid">
          Servicii
        </Button>
        <Button leftIcon={<ChatIcon />} colorScheme={theme === "light" ? "green" : "purple"} variant="solid">
          Conversații
        </Button>
        <Button leftIcon={<TimeIcon />} colorScheme={theme === "light" ? "green" : "purple"} variant="solid">
          Tranzacții anterioare
        </Button>
        <Button leftIcon={<ViewIcon />} colorScheme={theme === "light" ? "green" : "purple"} variant="solid">
          Anunțurile mele
        </Button>
        <Button leftIcon={<CloseIcon />} colorScheme="red" variant="solid" onClick={() => {
          localStorage.removeItem("AuthToken");
          dispatch(logout());
          navigate('/login');
        }}>
          Deconectare
        </Button>
      </Stack>
      <Flex>
        <Avatar />
        <Box ml="3" >
          <Text fontWeight="bold" color = "#F0ECE5">
            {props.user.nume + ' ' + props.user.prenume}
          </Text>
          <Text fontSize="sm" color = "#F0ECE5">
            Client
          </Text>
        </Box>
      </Flex>
    </VStack>
  );
}

export default Sidebar;
