import { Box } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { Profile } from "../../components/Profile"

export function Home() {
  return (
    <HomeContainer>
      <Profile />
    </HomeContainer>
  )
}

const HomeContainer = styled(Box)`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  margin-top: 0;
  
  min-height: 100vh;
`
