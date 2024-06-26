import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  padding: 10px;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/posts/new">Add New Post</StyledLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
