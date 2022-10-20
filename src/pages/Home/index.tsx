import { Box, Grid, GridItem, Spinner } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FormEvent, useEffect, useState } from "react";
import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { Search } from "../../components/Search";

export type ProfileType = {
  avatar_url: string;
  bio: string;
  name: string;
  followers: number;
  html_url: string;
  company: string;
  login: string;
};

export type IssuesPostType = {
  title: string;
  body: string;
  url: string;
  id: number;
  updated_at: string;
  number: number;
  html_url: string;
  user: ProfileType;
  comments: number;
};

export type IssuesPostsType = {
  items: IssuesPostType[];
};

const github_api = "https://api.github.com";

export function Home() {
  const [user, setUser] = useState({} as ProfileType);
  const [issuesPosts, setIssuesPosts] = useState({} as IssuesPostsType);
  const [searchText, setSearchText] = useState<string>("");

  const fetchIssues = async (): Promise<IssuesPostsType> => {
    const response = await fetch(
      `${github_api}/search/issues?q=${searchText}%20repo:${
        import.meta.env.VITE_GITHUB_USERNAME
      }/${import.meta.env.VITE_GITHUB_REPOSITORY}`
    );
    const data: IssuesPostsType = await response.json();
    setIssuesPosts(data);
    return data;
  };

  const fetchProfile = async (): Promise<ProfileType> => {
    const response = await fetch(
      `${github_api}/users/${import.meta.env.VITE_GITHUB_USERNAME}`
    );
    const data: ProfileType = await response.json();
    setUser(data);
    return data;
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    fetchIssues();
  }, []);

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    fetchIssues();
    setSearchText("");
  };

  return (
    <HomeContainer>
      <Profile user={user} />
      <Search
        setSearchText={setSearchText}
        onSubmit={onSubmit}
        searchText={searchText}
        postsCount={issuesPosts.items && issuesPosts.items.length}
      />
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={[4, 5, 6]}
        marginTop="40px"
        pb={12}
      >
        {!issuesPosts.items ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : (
          issuesPosts.items.map((post) => {
            return (
              <GridItem key={post.url}>
                <Post post={post} />
              </GridItem>
            );
          })
        )}
      </Grid>
    </HomeContainer>
  );
}

const HomeContainer = styled(Box)`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  margin-top: 0;

  min-height: 100vh;
`;
