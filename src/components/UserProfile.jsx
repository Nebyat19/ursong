import { useState } from "react";
import styled from 'styled-components';
import { UserIcon } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/UserState";

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
  display:  'block';
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
    background-color: #f27015; 
  }
`;

function UserProfile() {
    const [isHidden, setHidden] = useState(false);
    const isbold =useState(true);
    const isAuthenticated =useSelector(state=>state.user.isAuthenticated)
    const dispatch=useDispatch();
    const handleLogOut =()=>{
      dispatch(logout())
    }
    return (
        <ProfileContainer>
            <div onClick={() => setHidden((prev) => !prev)}>
                <ProfileImage src={UserIcon} alt="" />
            </div>
            {isAuthenticated&&isHidden&&
            <DropdownList>
                <ListItem isbold>
                    <a>Account Settngs</a>
                </ListItem>
                <ListItem>
                    <a >Support</a>
                </ListItem>
                <ListItem>
                    <a onClick={handleLogOut}>Sign Out</a>
                </ListItem>
            </DropdownList>
}
        </ProfileContainer>
    );
}

export { UserProfile };
