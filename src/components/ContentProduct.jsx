import React from "react";

import {
  Stack,
  StackDivider,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  UnorderedList,
  ListItem,
  Button,
  Box,
  VStack,
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
} from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ContentProduct(props) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const theme = props.theme;

  const handleContacteaza = () => {
    if (isAuthenticated) {
      navigate("/myaccount");
    }
    else {
        navigate("/login");
    }
  };

  return (
    <VStack width="50%">
      <Card bgColor={theme === "light" ? "white" : "#161A30"} borderRadius={0}>
        <CardHeader>
          <Heading size="md" color={theme === "light" ? "#092635" : "#F0ECE5"}>
            Prestige Haircuts: Tunsori Impecabile la Prețuri Accesibile!
          </Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase" color={theme === "light" ? "#092635" : "#F0ECE5"}>
                Descriere
              </Heading>
              <Text pt="2" fontSize="sm" color={theme === "light" ? "#092635" : "#F0ECE5"}>
                Prestige Haircuts aduce experiența salonului direct în confortul
                casei tale! Oferind tunsori reușite la prețuri reduse, suntem
                dedicati să-ți aducem stilul pe care îl meriți, cu
                profesionalism și atenție la detalii. Transformă-ți aspectul cu
                tunsori de calitate, fără a părăsi confortul propriei tale
                locuințe!
              </Text>
            </Box>

            <Box>
              <Heading size="xs" textTransform="uppercase" color={theme === "light" ? "#092635" : "#F0ECE5"}>
                Ofertă
              </Heading>
              <Text pt="2" fontSize="sm" color={theme === "light" ? "#092635" : "#F0ECE5"}>
                <UnorderedList>
                  <ListItem>
                    Tunsorile de Bază (49 lei): O tunsoră clasică și stilizare
                    pentru un look proaspăt și îngrijit.
                  </ListItem>
                  <ListItem>
                    Tunsorile de Lux (89 lei): O experiență premium care include
                    tuns, styling și tratamente pentru păr, pentru o îngrijire
                    sporită.
                  </ListItem>
                  <ListItem>
                    Colorare Profesională (de la 69 lei): Transformă-ți look-ul
                    cu opțiuni de colorare, de la nuanțe naturale la culori
                    îndrăznețe.
                  </ListItem>
                </UnorderedList>
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase" color={theme === "light" ? "#092635" : "#F0ECE5"}>
                Concluzie
              </Heading>
              <Text pt="2" fontSize="sm" color={theme === "light" ? "#092635" : "#F0ECE5"}>
                Prestige Haircuts îți aduce tunsorile reușite la doar 49 lei! Cu
                sediul nostru în inima orașului, te așteptăm într-un spațiu
                elegant și primitor. Experimentează stilul de calitate fără a
                părăsi confortul casei tale!
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Button
        leftIcon={<EmailIcon />}
        colorScheme={theme === "light" ? "green" : "purple"}
        variant="solid"
        onClick={handleContacteaza}
      >
        Contactează
      </Button>
      {
        !isAuthenticated && <Alert status="error" marginTop={3} colorScheme={theme === "light" ? "red" : "purple"}>
          <AlertIcon />
          <AlertTitle>Nu sunteți conectat!</AlertTitle>
          <AlertDescription>
            Pentru a contacta un prestator de servicii trebuie să fiți conectat.
          </AlertDescription>
        </Alert>
      }
    </VStack>
  );
}

export default ContentProduct;
