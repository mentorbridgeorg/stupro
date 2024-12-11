import React from 'react';
import {
  Box,
  Text,
  AspectRatio,
  Image,
  Stack,
  Heading,
} from 'native-base';
const DetailsCard = () =>(
      <Box
  shadow="2"
  rounded="10px"
  w={{ base: '64', md: '80', lg: 'md' }}
  _light={{ bg: 'coolGray.50' }}
  _dark={{ bg: 'gray.700' }}
  justifyContent= "center"
>
  <AspectRatio w="100%" ratio={16 / 9}>
    <Image source={{uri:'https://get.wallhere.com/photo/garden-city-lake-building-reflection-park-castle-river-New-York-City-USA-pond-Central-Park-monastery-chateau-tree-autumn-flower-place-of-worship-287444.jpg'}} alt="image base" roundedTop="10px" />
  </AspectRatio>
  <Text bold position="absolute" color="coolGray.50" top="0" m="4">
    NEWS
  </Text>
  <Stack space="2" p="4">
    <Text color="gray.400">December 10, 2024</Text>
    <Heading size={'md'} fontWeight="medium">
      The Garden City
    </Heading>
    <Text isTruncated noOfLines={5}>
      Bengaluru (also called Bangalore) is the center of India's
      high-tech industry. It is located in southern India on the Deccan
      Plateau.The city is also known for its parks and nightlife.
      Bangalore is the major center of India's IT industry, popularly
      known as the Silicon Valley of India.
    </Text>
  </Stack>
</Box>
);

export default DetailsCard;
