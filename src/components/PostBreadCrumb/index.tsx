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
import Calendar from "../../assets/icons/calendar.svg";
import Github from "../../assets/icons/github.svg";
import Cloud from "../../assets/icons/cloud.svg";
import LinkIcon from "../../assets/icons/link.svg";
import { IssuesPostType } from "../../pages/Home";
import moment from "moment";

type PostBreadCrumbProps = {
  post: IssuesPostType;
};

const PostBreadCrumb: React.FC<PostBreadCrumbProps> = ({ post }) => {
  return (
    <Flex h="168px" flexDir="column" bg="#112131" borderRadius="18px" marginTop="-5rem">
      <Flex p={8} h="100%" flexDir="column" justify="space-between">
        <Flex justify="space-between" color="#3294F8" fontSize="sm">
          <ChacraLink as={Link} to="/">
            {"<"} BACK
          </ChacraLink>
          <ChacraLink href={`${post.html_url}`} target="_blank" isExternal>
            SEE ON GITHUB{" "}
            <Image src={LinkIcon} h="18px" display="inline-block" ml="2px" />
          </ChacraLink>
        </Flex>
        <Heading fontWeight="bold" color="white" fontSize="2xl">
          {post.title}
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
              {post.user && post.user.login}
            </Text>
          </Box>
          <Box>
            <Image src={Calendar} width="18px" display="inline-block" />
            <Text as="span" ml="2">
              {moment(post.updated_at).fromNow()}
            </Text>
          </Box>
          <Box>
            <Image src={Cloud} width="18px" display="inline-block" />
            <Text as="span" ml="2">
              {post.comments} comments
            </Text>
          </Box>
        </HStack>
      </Flex>
    </Flex>
  );
};

export { PostBreadCrumb };
