import React from 'react';
import styled from 'styled-components';
import LogoLight from '../assets/logoLight.png';
import { RxAvatar } from 'react-icons/rx';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillMoonFill } from 'react-icons/bs';

function Navbar() {
  return (
    <Container>
      <Logo>
        <LogoImg src={LogoLight} alt="logo itsaka"/>
        <LogoName>Itsaka</LogoName>
      </Logo>

      <Menu>
        <MenuItems>Accueil</MenuItems>
        <MenuItems>Nos produits</MenuItems>
        <MenuItems>Apropos</MenuItems>
      </Menu>

      <User>
        <RxAvatar />
        <Cart>
          <AiOutlineShoppingCart />
          <ProductNumber> 1 </ProductNumber>
        </Cart>
        <Theme>
          <BsFillMoonFill />
        </Theme>
      </User>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  width: 95%;
  height: 64px;
  background-color: ${props => props.theme.light.navbarBackground};
  margin: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  color: ${props => props.theme.light.textNavbar};
`;

/*------Logo------*/

const Logo = styled.div`
  width: auto;
  height: 64px;
  display: flex;
  align-items: center;
  margin-left: 5vw;
`;

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
  vertical-align: middle;
`;

const LogoName = styled.p`
  font-weight: 900;
  font-size: 2.5rem;
  margin-left: 15px;
`;

/*------Menu------*/

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const MenuItems = styled.li`
  list-style: none;
  font-weight: 900;
`;

/*------User------*/

const User = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 5vw;
  gap: 30px;

  svg{
    font-size: 35px;
  }
`;


const Cart = styled.div`
  
`;

const ProductNumber = styled.sup`
  font-size: 15px;
  font-weight: 500;
  border-radius: 8px;
  padding-left: 1px;
  padding-right: 5px;
  vertical-align: top;
  background-color: ${props => props.theme.light.yellow};
`

const Theme = styled.div`
  svg{
    font-size: 30px;
  }
`;