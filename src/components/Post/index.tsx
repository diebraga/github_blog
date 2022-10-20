import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { IssuesPostType } from "../../pages/Home";
import moment from "moment";

type PostProps = {
  post: IssuesPostType;
};

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Link
      to={{
        pathname: "/post",
        search: `?url=${post.url}`,
      }}
    >
      <Flex
        h="260px"
        flexDir="column"
        bg="#112131"
        borderRadius="18px"
        _hover={{ border: "1px solid #3486eb" }}
      >
        <Box p={8}>
          <Flex justify="space-between">
            <Text
              color="#E7EDF4"
              fontSize="1.25rem"
              fontWeight="700"
              noOfLines={[2]}
              maxW="500px"
            >
              {post.title}
            </Text>
            <Text
              color="#7B96B2"
              fontSize={["0.8rem", "0.82rem", "0.875rem"]}
              fontWeight="400"
              display="inline-block"
              whiteSpace="nowrap"
              pl={2}
            >
              {moment(post.updated_at).fromNow()}
            </Text>
          </Flex>

          <Text
            color="#AFC2D4"
            fontSize="1rem"
            noOfLines={[6, 6, 5]}
            mt={[1, 4]}
            maxW={["300px", "500px"]}
            dangerouslySetInnerHTML={{ __html: post.body }}
          ></Text>
        </Box>
      </Flex>
    </Link>
  );
};

export { Post };
