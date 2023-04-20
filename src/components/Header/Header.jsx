import { NavLink } from 'react-router-dom';
import { HeaderStyled, Nav } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <Nav>
        <NavLink to="/">Home</NavLink>
      </Nav>
    </HeaderStyled>
  );
};

export default Header;
