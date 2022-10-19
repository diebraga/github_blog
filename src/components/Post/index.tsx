import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Post: React.FC = () => {
  return (
    <Flex h="260px" flexDir="column" bg="#112131">
      <Box p={8}>
        <Flex justify="space-between">
          <Text
            color="#E7EDF4"
            fontSize="1.25rem"
            fontWeight="700"
            noOfLines={[2]}
            maxW="500px"
          >
            JavaScript data types and data structures
          </Text>
          <Text
            color="#7B96B2"
            fontSize={["0.8rem", "0.82rem", "0.875rem"]}
            fontWeight="400"
            display="inline-block"
            whiteSpace="nowrap"
            pl={2}
          >
            3 Days ago
          </Text>
        </Flex>

        <Text
          color="#AFC2D4"
          fontSize="1rem"
          noOfLines={[6, 6, 5]}
          mt={[1, 4]}
          maxW={["300px", "500px"]}
        >
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass. Tristique volutpat pulvinar vel massa, pellentesque
          egestas. Eu viverra massa quam dignissim aenean malesuada suscipit.
          Nunc, volutpat pulvinar vel mass. Tristique volutpat pulvinar vel
          massa, pellentesque egestas. Eu viverra massa quam dignissim aenean
          malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </Text>
      </Box>
    </Flex>
  );
};

export { Post };
