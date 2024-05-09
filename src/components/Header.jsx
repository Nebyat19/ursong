import styled from 'styled-components';
import { LogoImage } from '../constants';
import { UserProfile } from './UserProfile';
import { Outlet, Link, useLocation } from "react-router-dom";
import { Footer } from './Footer';
import { useState } from 'react';
const HeaderContainer = styled.div`
  background-color: #e5e7eb; 
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
  padding-top:10px;
  padding-bottom:10px;
`;

const ContentContainer = styled.div`
  width: 82%; /* Equivalent to Tailwind's w-[82%] */
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
  font-size: 1.125rem; 
  font-weight: bold; 
  color: #6ec24a; 
`;

const Nav = styled.nav``;
const NavLink = styled(Link)`
  color: ${({ isActive }) => (isActive ? 'red' : 'black')};
  font-size: 0.875rem; 
  color: #c31b4b; 
  color: ${({ isActive }) => (isActive ? '#c31b4b' : '#6ec24a')};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #6ec24a;
  }
`;



const Header = () => {
    const location = useLocation();
    const [routes] = useState([
        { path: '/', name: 'Mysong' },
        { path: '/feed', name: 'Feed' },

    ]);

    return (

        <di>
            <HeaderContainer>
                <ContentContainer>
                    <LogoWrapper>
                        <Logo src={LogoImage} alt="" />
                        <LogoText>UrSong.</LogoText>
                    </LogoWrapper>
                    <Nav>
                        <ul className="flex gap-5">
                            {routes.map((route, index) => (
                                <li key={index}>
                                    <NavLink to={route.path} isActive={location.pathname === route.path}>
                                        {route.name}
                                    </NavLink>
                                </li>
                            ))}

                        </ul>
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
