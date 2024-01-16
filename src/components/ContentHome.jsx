import React from "react";

import {Grid,
    Text,
    VStack,
    Heading,
    Button,} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

function ContentHome(props) {
    const theme = props.theme;
    const navigate = useNavigate();

    const handleRegister = () => {
      navigate('/register');
    }

    return (
        <VStack width='60%'>
        <VStack width="60%" mt={5} mb={5}>
          <Heading mb={4} color={theme === "light" ? "#092635" : "#F0ECE5"}>ServiciiLaClick</Heading>
          <Text fontSize="xl" textAlign="center" color={theme === "light" ? "#092635" : "#F0ECE5"}>
            ServiciiLaClick - Conectând cererea cu oferta într-un simplu clic,
            aducem serviciile direct la tine, făcând fiecare nevoie o
            oportunitate de colaborare și excelență.
          </Text>
          <Button size="lg" mt="24px" colorScheme={theme === "light" ? "green" : "purple"} onClick={handleRegister}>
            Crează un cont gratuit!
          </Button>
        </VStack>
        <Grid templateColumns="repeat(4, 1fr)" gap={5} width="100%">
          {props.anunturi}
        </Grid>
      </VStack>
    )
} 

export default ContentHome;