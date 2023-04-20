import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: #222222;

  color: #fff;
  padding: 10px 20px;
`;

export const Nav = styled.nav`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
