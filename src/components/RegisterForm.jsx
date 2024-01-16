import React, { useState } from "react";
import {
  Text,
  Center,
  VStack,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Checkbox,
  Button,
  Heading,
} from "@chakra-ui/react";

import { Link as link, useNavigate } from "react-router-dom";
import { PhoneIcon } from "@chakra-ui/icons";
import { useTheme } from "../store/Theme.context";
import ModalRegisterPage from "./ModalRegisterPage";
import axios from "axios";

function RegisterForm() {
  let theme = useTheme().theme;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");
  const [confirmareParola, setConfirmareParola] = useState("");
  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [telefon, setTelefon] = useState("");
  const [dataNastere, setDataNastere] = useState("");

  const [acordTermeni, setAcordTermeni] = useState(true);
  const [acordOferte, setAcordOferte] = useState(false);

  const [statusContNou, setStatusContNou] = useState(10);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleParola = (event) => {
    setParola(event.target.value);
  };

  const handleConfirmareParola = (event) => {
    setConfirmareParola(event.target.value);
  };

  const handleNume = (event) => {
    setNume(event.target.value);
  };

  const handlePrenume = (event) => {
    setPrenume(event.target.value);
  };

  const handleTelefon = (event) => {
    setTelefon(event.target.value);
  };

  const handleDataNastere = (event) => {
    setDataNastere(event.target.value);
  };

  const handleAcordTermeni = () => {
    setAcordTermeni(!acordTermeni);
  };

  const handleAcordOferte = () => {
    setAcordOferte(!acordOferte);
  };

  const handleStatusContNou = () => {
    if (email === "") return 1;
    if (parola === "") return 2;
    if (parola !== confirmareParola) return 3;
    if (nume === "") return 4;
    if (prenume === "") return 5;
    if (telefon === "") return 6;
    if (dataNastere === "") return 7;
    if (!acordTermeni) return 8;
    return 0;
  };

  const closeModal = () => {
    setStatusContNou(10);
  };

  return (
    <Center
      height="calc(100vh - 3rem)"
      bgColor={theme === "light" ? "#F0ECE5" : "#080911"}
    >
      <VStack justify="space-around" spacing={15} width="50%">
        <Heading
          as="h1"
          size="lg"
          color={theme === "light" ? "#092635" : "#F0ECE5"}
        >
          ÎNREGISTRARE
        </Heading>
        <HStack spacing={20} width="100%" justify="space-between">
          <VStack spacing={7} width="40%">
            <VStack width="100%" alignItems="start">
              <Text color={theme === "light" ? "#092635" : "#F0ECE5"}>
                Email:{" "}
              </Text>
              <Input
                placeholder="email"
                borderColor={theme === "light" ? "black" : "white"}
                color={theme === "light" ? "#092635" : "#F0ECE5"}
                focusBorderColor={theme === "light" ? "#282828" : "#626fb7"}
                _hover={{ borderWidth: "1px" }}
                _placeholder={{
                  color: theme === "light" ? "#282828" : "#F0ECE5",
                }}
                onChange={handleEmail}
                type="email"
              ></Input>
            </VStack>
            <VStack width="100%" alignItems="start">
              <Text color={theme === "light" ? "#092635" : "#F0ECE5"}>
                Parola:{" "}
              </Text>
              <Input
                type="password"
                placeholder="parola"
                color={theme === "light" ? "#092635" : "#F0ECE5"}
                focusBorderColor={theme === "light" ? "#282828" : "#626fb7"}
                borderColor={theme === "light" ? "black" : "white"}
                _hover={{ borderWidth: "1px" }}
                _placeholder={{
                  color: theme === "light" ? "#282828" : "#F0ECE5",
                }}
                onChange={handleParola}
              ></Input>
            </VStack>
            <VStack width="100%" alignItems="start">
              <Text color={theme === "light" ? "#092635" : "#F0ECE5"}>
                Confirmare parola:{" "}
              </Text>
              <Input
                type="password"
                placeholder="confirmare parola"
                color={theme === "light" ? "#092635" : "#F0ECE5"}
                focusBorderColor={theme === "light" ? "#282828" : "#626fb7"}
                borderColor={theme === "light" ? "black" : "white"}
                _hover={{ borderWidth: "1px" }}
                _placeholder={{
                  color: theme === "light" ? "#282828" : "#F0ECE5",
                }}
                onChange={handleConfirmareParola}
              ></Input>
            </VStack>
          </VStack>
          <VStack width="40%">
            <VStack width="100%" alignItems="start">
              <Text color={theme === "light" ? "#092635" : "#F0ECE5"}>
                Nume:
              </Text>
              <Input
                placeholder="nume"
                color={theme === "light" ? "#092635" : "#F0ECE5"}
                focusBorderColor={theme === "light" ? "#282828" : "#626fb7"}
                borderColor={theme === "light" ? "black" : "white"}
                _hover={{ borderWidth: "1px" }}
                _placeholder={{
                  color: theme === "light" ? "#282828" : "#F0ECE5",
                }}
                onChange={handleNume}
              ></Input>
            </VStack>
            <VStack width="100%" alignItems="start">
              <Text color={theme === "light" ? "#092635" : "#F0ECE5"}>
                Prenume:
              </Text>
              <Input
                placeholder="prenume"
                color={theme === "light" ? "#092635" : "#F0ECE5"}
                focusBorderColor={theme === "light" ? "#282828" : "#626fb7"}
                borderColor={theme === "light" ? "black" : "white"}
                _hover={{ borderWidth: "1px" }}
                _placeholder={{
                  color: theme === "light" ? "#282828" : "#F0ECE5",
                }}
                onChange={handlePrenume}
              ></Input>
            </VStack>
            <VStack width="100%" alignItems="start">
              <Text color={theme === "light" ? "#092635" : "#F0ECE5"}>
                Telefon
              </Text>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <PhoneIcon
                    color={theme === "light" ? "#282828" : "gray.300"}
                  />
                </InputLeftElement>
                <Input
                  type="tel"
                  placeholder="Phone number"
                  color={theme === "light" ? "#092635" : "#F0ECE5"}
                  focusBorderColor={theme === "light" ? "#282828" : "#626fb7"}
                  borderColor={theme === "light" ? "black" : "white"}
                  _hover={{ borderWidth: "1px" }}
                  _placeholder={{
                    color: theme === "light" ? "#282828" : "#F0ECE5",
                  }}
                  onChange={handleTelefon}
                />
              </InputGroup>
            </VStack>
            <VStack width="100%" alignItems="start">
              <Text color={theme === "light" ? "#092635" : "#F0ECE5"}>
                Data nașterii
              </Text>{" "}
              <Input
                size="md"
                type="date"
                color={theme === "light" ? "#092635" : "#F0ECE5"}
                focusBorderColor={theme === "light" ? "#282828" : "#626fb7"}
                borderColor={theme === "light" ? "black" : "white"}
                _hover={{ borderWidth: "1px" }}
                onChange={handleDataNastere}
              />
            </VStack>
          </VStack>
        </HStack>
        <VStack width="100%" alignItems="start">
          <Checkbox
            colorScheme={theme === "light" ? "green" : "purple"}
            color={theme === "light" ? "#092635" : "#F0ECE5"}
            defaultChecked
            required
            focusBorderColor={theme === "light" ? "#282828" : "#96EFFF"}
            borderColor={theme === "light" ? "black" : "white"}
            onChange={handleAcordTermeni}
          >
            Sunt de acord cu <Link>termenii și condițiile</Link>.
          </Checkbox>
          <Checkbox
            color={theme === "light" ? "#092635" : "#F0ECE5"}
            colorScheme={theme === "light" ? "green" : "purple"}
            borderColor={theme === "light" ? "black" : "white"}
            onChange={handleAcordOferte}
          >
            Doresc să primesc mai multe detalii despre ofertele ServiciiLaClick
            pe e-mail.
          </Checkbox>
          <Text color={theme === "light" ? "#092635" : "#F0ECE5"}>
            Toate câmpurile trebuie completate.
          </Text>
        </VStack>
        <HStack spacing={10}>
          <Button
            colorScheme={theme === "light" ? "green" : "purple"}
            onClick={() => {
              var isOk = handleStatusContNou();
              // console.log(email, parola, confirmareParola, nume, prenume, telefon, dataNastere, acordTermeni, acordOferte);
              if (isOk === 0) {
                const ContNou = {
                  email: email,
                  parola: parola,
                  nume: nume,
                  prenume: prenume,
                  telefon: telefon,
                  dataNastere: dataNastere,
                  acordTermeni: acordTermeni,
                  acordOferte: acordOferte,
                };
                axios
                  .post("http://localhost:5000/register", ContNou)
                  .then((res) => {
                    console.log(
                      "Datele noului utilizator au fost trimise cu succes.",
                      res
                    );
                  })
                  .catch((err) => {
                    console.error(
                      "Eroare la trimiterea datelor noului utilizator: ",
                      err
                    );
                  });
                navigate("/login");
                setStatusContNou(10);
              } else setStatusContNou(isOk);
            }}
          >
            Înregistrare
          </Button>
          <Button colorScheme="red" as={link} to="/login">
            Am deja cont
          </Button>
        </HStack>
      </VStack>
      {statusContNou !== 0 && statusContNou !== 10 && (
        <ModalRegisterPage isOpen={statusContNou} onClose={closeModal} />
      )}
    </Center>
  );
}

export default RegisterForm;
