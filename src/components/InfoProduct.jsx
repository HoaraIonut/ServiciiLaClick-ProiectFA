import React from "react";
import { Image, Flex, Icon, chakra, Box } from "@chakra-ui/react";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";

function InfoProduct(props) {
  const theme = props.theme;

  return (
    <Flex alignItems="center" justifyContent="center" shadow="lg">
      <Box
        w="sm"
        mx="auto"
        bg="white"
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        bgColor={theme === "light" ? "white" : "#161A30"}
        borderRadius={0}
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          objectPosition="center"
          src="https://calificare-evaluare.ro/wp-content/uploads/2022/08/frizer-2-scaled.jpg"
          alt="avatar"
        />

        <Box py={4} px={6}>
          <chakra.h1 fontSize="xl" fontWeight="bold" color={theme === "light" ? "#092635" : "#F0ECE5"}>
            Andrei Stănescu
          </chakra.h1>

          <chakra.p py={2} color={theme === "light" ? "#092635" : "#F0ECE5"}>
            Maestru al tunsorilor și soluționar creativ, transform fiecare fir
            de păr într-un element de design. Pasiunea mea: aducerea clarității
            și stilului în lumea estetică a tunsorilor, prin inovație și
            comunicare atentă cu clienții.
          </chakra.p>

          <Flex alignItems="center" mt={4} color={theme === "light" ? "#092635" : "#F0ECE5"}>
            <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm" >
              Frizer
            </chakra.h1>
          </Flex>

          <Flex alignItems="center" mt={4} color={theme === "light" ? "#092635" : "#F0ECE5"}>
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              București
            </chakra.h1>
          </Flex>
          <Flex alignItems="center" mt={4} color={theme === "light" ? "#092635" : "#F0ECE5"}>
            <Icon as={MdEmail} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              andreistanescu@gmail.com
            </chakra.h1>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default InfoProduct;
