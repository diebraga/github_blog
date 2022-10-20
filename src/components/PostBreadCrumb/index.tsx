import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  Link as ChacraLink,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Company from "../../assets/icons/company.svg";
import Github from "../../assets/icons/github.svg";
import Followers from "../../assets/icons/followers.svg";
import LinkIcon from "../../assets/icons/link.svg";

const PostBreadCrumb: React.FC = () => {
  return (
    <Flex h="168px" flexDir="column" bg="#112131" borderRadius="18px">
      <Flex p={8} h="100%" flexDir="column" justify="space-between">
        <Flex justify="space-between" color="#3294F8" fontSize="sm">
          <ChacraLink as={Link} to="/">
            {"<"} BACK
          </ChacraLink>
          <ChacraLink as={Link} to="/">
            SEE ON GITHUB{" "}
            <Image src={LinkIcon} h="18px" display="inline-block" ml="2px" />
          </ChacraLink>
        </Flex>
        <Heading fontWeight="bold" color="white" fontSize="2xl">
          JavaScript data types and data structures
        </Heading>
        <HStack
          as="ul"
          color="#C4D4E3"
          spacing={4}
          fontSize={["xs", "xs", "sm"]}
        >
          <Box>
            <Image src={Github} width="18px" display="inline-block" />
            <Text as="span" ml="2">
              Diego Braga
            </Text>
          </Box>
          <Box>
            <Image src={Company} width="18px" display="inline-block" />
            <Text as="span" ml="2">
              Hertz
            </Text>
          </Box>
          <Box>
            <Image src={Followers} width="18px" display="inline-block" />
            <Text as="span" ml="2">
              33 Followers
            </Text>
          </Box>
        </HStack>
      </Flex>
    </Flex>
  );
};

export { PostBreadCrumb };
