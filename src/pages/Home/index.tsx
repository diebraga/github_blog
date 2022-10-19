import { Box, Grid, GridItem } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { Search } from "../../components/Search";

export function Home() {
  const ArrayMock = Array.from(Array(10).keys());
  return (
    <HomeContainer>
      <Profile />
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
              <Post />
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
