import React from "react";

import {
  HStack,
} from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { useTheme } from "../store/Theme.context";
import { Link } from "react-router-dom";
import OptionsMenuHome from "../components/OptionsMenuHome";
import ContentHome from "../components/ContentHome";

function HomePage() {
  let theme = useTheme().theme;

  const anunturi = [];
  for (let i = 0; i < 17; i++) {
    anunturi.push(
      <Link to="/produs" key={i}>
        <ProductCard key={i} theme={theme}/>
      </Link>
    );
  }

  return (
    <HStack justify='space-evenly' bgColor={theme === "light" ? "#F0ECE5" : "#080911"} alignItems='flex-start'>
      <OptionsMenuHome theme={theme}/>
      <ContentHome anunturi={anunturi} theme={theme}/>
    </HStack>
  );
}

export default HomePage;
