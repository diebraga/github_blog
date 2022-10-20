import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PostBreadCrumb } from "../../components/PostBreadCrumb";
import { IssuesPostType } from "../Home";

const Post: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [post, setPost] = useState({} as IssuesPostType);

  const fetchPost = async (): Promise<void> => {
    const response = await fetch(`${searchParams.get("url")}`);
    const data = await response.json();
    setPost(data);
    return data;
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <PostContainer>
      <PostBreadCrumb post={post} />
      <Text
        dangerouslySetInnerHTML={{ __html: post.body }}
        color="white"
        p={9}
        mt="10px"
      />
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
