import { Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const Search: React.FC = () => {
  return (
    <Flex w="100%" flexDir="column" mt={["30px", "30px", "60px"]}>
      <Flex justify="space-between" mb="2">
        <Text fontSize="1.125rem" fontWeight="700" color="#C4D4E3">
          Posts
        </Text>
        <Text fontWeight="400" fontSize="0.875rem" color="#7B96B2">
          6 Posts
        </Text>
      </Flex>
      <Input
        placeholder="Search post"
        borderColor="#1C2F41"
        background="#040F1A"
      />
    </Flex>
  );
};

export { Search };
