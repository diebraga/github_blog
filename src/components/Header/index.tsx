import { Box, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Logo from "../../assets/icons/logo.svg";

export function Header() {
  return (
    <HeaderContainer bg="#040F1A">
      <HeaderContent>
        <Image src={Logo} />
      </HeaderContent>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(Box)`
  padding: 2.5rem 0 7.5rem 0;
`;

const HeaderContent = styled(Box)`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
