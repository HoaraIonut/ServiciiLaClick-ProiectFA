import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Box,
  UnorderedList,
  ListItem,
  Link as Linc,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Select,
  Text,
  VStack,
  Heading,
  HStack,
} from "@chakra-ui/react";

function OptionsMenuHome(props) {
  const theme = props.theme;
  return (
    <VStack>
      <Card borderRadius={0} shadow="lg" mt={10} bgColor={theme === 'light' ? "white" : "#161A30"}>
        <CardHeader>
          <Heading size="md" color={theme === "light" ? "#092635" : "#F0ECE5"}>Meniu opțiuni</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="5">
            <Box>
              <Heading size="xs" textTransform="uppercase" marginBottom={3} color={theme === "light" ? "#092635" : "#F0ECE5"}>
                Categorii
              </Heading>
              <Text pt="2" fontSize="sm">
                <UnorderedList spacing={7} listStyleType="none">
                  <ListItem color={theme === "light" ? "#092635" : "#F0ECE5"}>
                    <Linc>Servicii de Construcții și Renovări</Linc>
                  </ListItem>
                  <ListItem color={theme === "light" ? "#092635" : "#F0ECE5"}>
                    <Linc>Consultanță și Servicii Profesionale</Linc>
                  </ListItem>
                  <ListItem color={theme === "light" ? "#092635" : "#F0ECE5"}>
                    <Linc>Transport și Logistică</Linc>
                  </ListItem>
                  <ListItem color={theme === "light" ? "#092635" : "#F0ECE5"}>
                    <Linc>Servicii IT și Tehnologie</Linc>
                  </ListItem>
                  <ListItem color={theme === "light" ? "#092635" : "#F0ECE5"}>
                    <Linc>Design Grafic și Creativ</Linc>
                  </ListItem>
                  <ListItem color={theme === "light" ? "#092635" : "#F0ECE5"}>
                    <Linc>Curățenie și Întreținere</Linc>
                  </ListItem>
                  <ListItem color={theme === "light" ? "#092635" : "#F0ECE5"}>
                    <Linc>Educație</Linc>
                  </ListItem>
                  <ListItem color={theme === "light" ? "#092635" : "#F0ECE5"}>
                    <Linc>Servicii de Evenimente</Linc>
                  </ListItem>
                  <ListItem color={theme === "light" ? "#092635" : "#F0ECE5"}>
                    <Linc>Asistență Medicală și Îngrijire la Domiciliu</Linc>
                  </ListItem>
                </UnorderedList>
              </Text>
            </Box>
            <Box color={theme === "light" ? "#092635" : "#F0ECE5"}>
              <Heading size="xs" textTransform="uppercase" marginBottom={3} color={theme === "light" ? "#092635" : "#F0ECE5"}>
                Filtre
              </Heading>
              <HStack spacing={5} marginBottom={3}>
                <Text fontSize="sm">Preț</Text>
                <RangeSlider
                  aria-label={["min", "max"]}
                  defaultValue={[0, 30]}
                  colorScheme={theme === "light" ? "green" : "purple"}
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
              </HStack>
              <HStack>
                <Text fontSize="sm">Oraș</Text>
                <Select placeholder="Alege orașul" size="sm">
                  <option value="București">București</option>
                  <option value="Cluj">Cluj</option>
                  <option value="Timișoara">Timișoara</option>
                </Select>
              </HStack>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </VStack>
  );
}

export default OptionsMenuHome;
