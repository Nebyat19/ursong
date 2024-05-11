import styled from 'styled-components';
import { LogoImage } from '../constants';
import { UserProfile } from './UserProfile';
import { Outlet, Link, useLocation } from "react-router-dom";
import { Footer } from './Footer';
import { useState } from 'react';
import { MusicIcon } from '../constants';
import * as colors from "../constants/colors";
import { useSelector } from 'react-redux';

const HeaderContainer = styled.div`
  background-color: #e5e7eb; 
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
  padding-top:10px;
  padding-bottom:10px;
`;

const ContentContainer = styled.div`
  width: 82%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 2.5rem; 
  height: 2.5rem; 
`;

const LogoText = styled.span`
  margin-left:10px;
  font-size: 1.125rem; 
  font-weight: bold; 
  color: #f27015; 
`;

const Nav = styled.nav``;
const NavLink = styled(Link)`
 
  font-size: 0.875rem; 
   
  color: ${({ isActive }) => (isActive ? colors.primaryColor : colors.secondaryColor)};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${colors.secondaryColor};
  }
`;
const NavUl = styled.ul`
display:flex;
gap:10px;
`;


const Header = () => {
  const isAuthenticated =useSelector(state=>state.user.isAuthenticated)

    const location = useLocation();
    const [routes] = useState([
        { path: '/mysong', name: 'Mysong' },
        { path: '/feed', name: 'Feed' },

    ]);

    return (

        <di>
            <HeaderContainer>
                <ContentContainer>
                    <LogoWrapper>
                        <Logo src={MusicIcon} alt="" />
                        <LogoText>UrSong.</LogoText>
                    </LogoWrapper>
                    <Nav>
                      {isAuthenticated&&
                        <NavUl>
                            {routes.map((route, index) => (
                                <li key={index}>
                                    <NavLink to={route.path} isActive={location.pathname === route.path}>
                                        {route.name}
                                    </NavLink>
                                </li>
                            ))}

                        </NavUl>
}
                    </Nav>
                    <UserProfile />
                </ContentContainer>
            </HeaderContainer>
            <Outlet />
            <Footer />
        </di>


    )
};

export default Header;
