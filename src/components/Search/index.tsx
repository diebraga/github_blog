import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { FormEvent } from "react";

type SearchProps = {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: FormEvent) => void;
  searchText: string;
  postsCount: number;
};

const Search: React.FC<SearchProps> = ({
  setSearchText,
  onSubmit,
  searchText,
  postsCount
}) => {
  return (
    <Flex
      w="100%"
      flexDir="column"
      mt={["30px", "30px", "60px"]}
      as="form"
      onSubmit={onSubmit}
    >
      <Flex justify="space-between" mb="2">
        <Text fontSize="1.125rem" fontWeight="700" color="#C4D4E3">
          Posts
        </Text>
        <Text fontWeight="400" fontSize="0.875rem" color="#7B96B2">
          {postsCount} Posts
        </Text>
      </Flex>
      <Flex>
        <Input
          placeholder="Search post"
          borderColor="#1C2F41"
          background="#040F1A"
          w="100%"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          color="white"
        />
        <Button ml="2" colorScheme="blue" type="submit">
          Search
        </Button>
      </Flex>
    </Flex>
  );
};

export { Search };
