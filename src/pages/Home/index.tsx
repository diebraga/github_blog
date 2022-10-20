import { Box, Grid, GridItem } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
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

export function Home() {
  const [user, setUser] = useState({} as ProfileType);

  const fetchProfile = async (): Promise<ProfileType> => {
    const response = await fetch(
      `https://api.github.com/users/${import.meta.env.VITE_GITHUB_USERNAME}`
    );
    const data: ProfileType = await response.json();
    setUser(data);
    return data;
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const ArrayMock = Array.from(Array(10).keys());
  return (
    <HomeContainer>
      <Profile user={user} />
      <Search />
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={[4, 5, 6]}
        marginTop="40px"
        pb={12}
      >
        {ArrayMock.map((post) => {
          return (
            <GridItem key={post}>
              <Post id={String(post)} />
            </GridItem>
          );
        })}
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
