import React from "react";

import {

  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  VStack,
} from "@chakra-ui/react";

import InfoProduct from "../components/InfoProduct";

import { useTheme } from "../store/Theme.context";


import ContentProduct from "../components/ContentProduct";

function ProductPage() {
  const theme = useTheme().theme;

  return (
    <>
      <VStack
        height="calc(100vh - 3rem)"
        bgColor={theme === "light" ? "#F0ECE5" : "#080911"}
        display='flex'
        justifyContent='center'
      >
        <HStack justifyContent='center' marginBottom={3} color={theme === "light" ? "#092635" : "#F0ECE5"}>
          <Breadcrumb fontWeight="medium" fontSize="sm" >
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Acasă</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="/login">Oferte</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/produs">Produs</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </HStack>
        <HStack width="100%" justify="space-around">
            <InfoProduct theme={theme}/>
            <ContentProduct theme={theme} />
        </HStack>
      </VStack>
    </>
  );
}

export default ProductPage;
