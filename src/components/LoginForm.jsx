import { React, useState } from "react";
import {
  Text,
  Input,
  Box,
  Stack,
  Button,
  ButtonGroup,
  Heading,
} from "@chakra-ui/react";
import { useTheme } from "../store/Theme.context";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch} from "react-redux";
import { setIsAuthenticated } from "../store/auth.reducer";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let theme = useTheme();
  theme = theme.theme;

  const [parola, setParola] = useState("");
  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleParola = (event) => {
    setParola(event.target.value);
  };

  const handleConectare = async () => {

    const posibilUtilizator = {
      email: email,
      parola: parola,
    };


    try {
      const raspuns = await axios.post(
        "https://serviciilaclick-proiectfa-backend.onrender.com/login",
        posibilUtilizator
      );
      console.log("Cererea de conectare a fost trimisa cu succes.", raspuns);
      if(raspuns.data === true) {
        dispatch(setIsAuthenticated());
        localStorage.setItem('AuthToken', email);
        navigate('/myaccount');
      }
      else {
        window.location.reload();
      }
    } catch (err) {
      console.error("Eroare la cererea de conectare.", err);
    }
  };

  return (
    <Stack
      spacing="20px"
      bgColor={theme === "light" ? "#F0ECE5" : "#080911"}
      height="calc(100vh - 3rem)"
      width="100vw"
      align="center"
      justify="center"
    >
      <Heading
        as="h1"
        size="lg"
        color={theme === "light" ? "#092635" : "#F0ECE5"}
      >
        CONECTARE
      </Heading>
      <Box width="300px">
        <Text color={theme === "light" ? "#092635" : "#F0ECE5"}>Email</Text>
        <Input
          type="email"
          placeholder="email"
          _placeholder={{ color: "#B6BBC4" }}
          size="md"
          width="300px"
          value={email}
          onChange={handleEmail}
          color={theme === "light" ? "#092635" : "#F0ECE5"}
          focusBorderColor={theme === "light" ? "#282828" : "#626fb7"}
          borderColor={theme === "light" ? "black" : "white"}
          _hover={{ borderWidth: "1px" }}
        />
      </Box>
      <Box>
        <Text color={theme === "light" ? "#092635" : "#F0ECE5"}>Parola</Text>
        <Input
          placeholder="parola"
          _placeholder={{ color: "#B6BBC4" }}
          size="md"
          width="300px"
          type="password"
          value={parola}
          onChange={handleParola}
          color={theme === "light" ? "#092635" : "#F0ECE5"}
          focusBorderColor={theme === "light" ? "#282828" : "#626fb7"}
          borderColor={theme === "light" ? "black" : "white"}
          _hover={{ borderWidth: "1px" }}
        />
      </Box>
      <ButtonGroup spacing="6">
        <Button
          onClick={handleConectare}
          colorScheme={theme === "light" ? "green" : "purple"}
        >
          Conectează-mă
        </Button>
        <Button
          colorScheme={theme === "light" ? "green" : "purple"}
          as={Link}
          to="/register"
        >
          Înregistrare
        </Button>
      </ButtonGroup>
    </Stack>
  );
}

export default LoginForm;
