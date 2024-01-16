import React from "react";

import {
  Heading,
  Text,
  VStack,
  Card,
  CardHeader,
  CardBody,
  Stack,
  Box,
  StackDivider,
  Button,
  HStack,
} from "@chakra-ui/react";

import { MdBuild, MdCall } from "react-icons/md";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth.reducer";

function InfoMyAccount(props) {
  const dispatch = useDispatch();

  const theme = props.theme;

  const handleDeleteAccount = async () => {
    try {
      await axios.post("http://localhost:5000/deleteMyAccount", {email: props.user.email});
      console.log("Contul a fost sters cu succes.");
      dispatch(logout());
      localStorage.removeItem("AuthToken");
    } catch (err) {
      console.error("Eroare la stergerea contului.", err);
    }
  };

  return (
    <HStack margin={5} width="100%" justifyContent="space-evenly">
      <VStack width="40%">
        <Card width="100%" bgColor={theme === "light" ? "white" : "#161A30"} color={theme === "light" ? "#092635" : "#F0ECE5"}>
          <CardHeader>
            <Heading size="md">Despre cont</Heading>
          </CardHeader>

          <CardBody boxShadow="lg">
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Email
                </Heading>
                <Text pt="2" fontSize="sm">
                  {props.user.email}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Nume
                </Heading>
                <Text pt="2" fontSize="sm">
                  {props.user.nume}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Prenume
                </Heading>
                <Text pt="2" fontSize="sm">
                  {props.user.prenume}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Telefon
                </Heading>
                <Text pt="2" fontSize="sm">
                  {props.user.telefon}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Data nașterii
                </Heading>
                <Text pt="2" fontSize="sm">
                  {props.user.dataNasterii.slice(0, 10)}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Țară
                </Heading>
                <Text pt="2" fontSize="sm">
                  România
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </VStack>
      <VStack>
        <Stack direction="column" spacing={10}>
          <Button
            leftIcon={<MdBuild />}
            colorScheme={theme === "light" ? "green" : "purple"}
            variant="solid"
            boxShadow="lg"
          >
            Modifică informații
          </Button>
          <Button
            leftIcon={<MdCall />}
            colorScheme="red"
            variant="solid"
            boxShadow="lg"
            onClick={handleDeleteAccount}
          >
            Șterge cont
          </Button>
        </Stack>
      </VStack>
    </HStack>
  );
}

export default InfoMyAccount;
