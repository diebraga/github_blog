import { Box, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { PostBreadCrumb } from "../../components/PostBreadCrumb";

const Post: React.FC = () => {
  return (
    <PostContainer>
      <PostBreadCrumb />
    </PostContainer>
  );
};

export { Post };

const PostContainer = styled(Box)`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  margin-top: 0;

  min-height: 100vh;
`;
