import { useState } from "react";
import styled from 'styled-components';
import { UserIcon } from "../constants";

const ProfileContainer = styled.div`
font-family: "Lato", sans-serif;
  position: relative;
`;

const ProfileImage = styled.img`

  height: 3.5rem;
  width: 3.5rem; 
  object-fit: cover;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  display: ${({ isvisible }) => (isvisible ? 'block' : 'none')};
  position: absolute;
  right: 0;
  top: 100%;
  background-color: #fff; 
  border-radius: 0.375rem; 
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1); 
  width: 12rem;
  padding: 0.5rem 0; 
`;

const ListItem = styled.li`
  padding: 0.5rem 1rem; 
  font-size: 0.875rem; 
  color: ${({ isbold }) => (isbold ? 'var(--brand-80)' : '#6b7280')}; 
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #059669; 
  }
`;

function UserProfile() {
    const [isHidden, setHidden] = useState(false);
    const isbold =useState(true);
    
    return (
        <ProfileContainer>
            <div onClick={() => setHidden((prev) => !prev)}>
                <ProfileImage src={UserIcon} alt="" />
            </div>
            <DropdownList isvisible={isHidden}>
                <ListItem isbold>
                    <a href="">Account Settngs</a>
                </ListItem>
                <ListItem>
                    <a href="">Support</a>
                </ListItem>
                <ListItem>
                    <a href="">Sign Out</a>
                </ListItem>
            </DropdownList>
        </ProfileContainer>
    );
}

export { UserProfile };
