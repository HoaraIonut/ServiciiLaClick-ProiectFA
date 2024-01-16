import React from "react";

import { Image, Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function ProductCard(props) {
    const theme = props.theme;
    const valStar = theme === "light" ? "green.500" : "purple.500";

    const product = {
        imageUrl: 'https://calificare-evaluare.ro/wp-content/uploads/2022/08/frizer-2-scaled.jpg',
        title: 'Prestige Haircuts: Tunsori Impecabile la Prețuri Accesibile!',
        user: 'Andrei Stănescu',
        reviewCount: Math.floor(Math.random() * 100) + 1,
        rating: Math.floor(Math.random() * 5) + 1,
      }
    
      return (
        <Box maxW='sm' borderWidth='1px'  overflow='hidden' shadow='lg' bgColor={theme === 'light' ? "white" : "#161A30"} borderColor={theme === 'light' ? "white" : "#161A30"}>
          <Image src={product.imageUrl}/>
    
          <Box p='6'>
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
              color={theme === "light" ? "#092635" : "#F0ECE5"}
            >
              {product.title}
            </Box>
    
            <Box color={theme === "light" ? "#092635" : "#F0ECE5"}>
              {product.user}
            </Box>
    
            <Box display='flex' mt='2' alignItems='center'>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < product.rating ? valStar : 'gray.300'}
                  />
                ))}
              <Box as='span' ml='2' color={theme === "light" ? "#092635" : "#F0ECE5"} fontSize='sm'>
                {product.reviewCount} păreri
              </Box>
            </Box>
          </Box>
        </Box>
      )
}

export default ProductCard;