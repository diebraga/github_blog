import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Company from "../../assets/icons/company.svg";
import Github from "../../assets/icons/github.svg";
import Followers from "../../assets/icons/followers.svg";
import LinkIcon from "../../assets/icons/link.svg";

export function Profile() {
  return (
    <ProfileContainer as="section" borderRadius="9px" height="100%">
      <Flex
        paddingY={6}
        paddingX={2}
        borderRadius="9px"
        alignItems="center"
        flexDir={["column", "column", "row"]}
      >
        <Image src="https://github.com/diebraga.png" w="148px" h="148px" />
        <Flex
          flexDir="column"
          w="100%"
          ml={["", "", "5"]}
          h={["", "", "148px"]}
          mt={["3", "3", ""]}
        >
          <Flex justify="space-between" mb={2}>
            <Text fontWeight="bold" color="white" fontSize="2xl">
              Diego Braga
            </Text>
            <Link color="#3294F8;" fontSize="sm">
              GITHUB{" "}
              <Image src={LinkIcon} h="18px" display="inline-block" ml="2px" />
            </Link>
          </Flex>
          <Text color="#AFC2D4" flexGrow={1} w="90%" mb={2}>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </Text>
          <HStack as="ul" color="#C4D4E3" spacing={4} fontSize={["xs", "xs", "sm"]}>
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
    </ProfileContainer>
  );
}

const ProfileContainer = styled(Flex)`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  margin-top: -5rem;
  background: #0b1b2b;
`;
