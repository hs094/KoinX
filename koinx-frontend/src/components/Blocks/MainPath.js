import React from 'react';
import styled from 'styled-components';

const MainPath = () => {
  return (
    <Container>
      <InnerContainer>
        <Header>
          <Nav>
            <GrayText>Cryptocurrencies</GrayText>
            <Separator>&gt;&gt;</Separator>
            <BoldText>Bitcoin</BoldText>
          </Nav>
        </Header>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  border-top: 1px solid #e5e7eb;
  margin-top: 80px;
`;

const InnerContainer = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  font-size: 0.875rem;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const GrayText = styled.span`
  color: #6b7280;
`;

const Separator = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: #9ca3af;
`;

const BoldText = styled.span`
  font-weight: 500;
  color: #111827;
`;

export default MainPath;