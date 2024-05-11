import styled from 'styled-components';
import React, { useState } from 'react';
import { Popup } from './Popup';
import { useDispatch } from 'react-redux';
import { setplaylisterrorNull } from '../store/playListState';
const StyledCreateButton = styled.div`
  position: fixed;
  bottom: 100px;
  right: 25px;
`;

const Button = styled.div`
  width: 3rem; 
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%; 
  background-color: #c31b4b; 
  transition: background-color 0.3s ease; 
  cursor: pointer;


  &:hover {
    opacity: 0.8; 
    scale:110%;
    
  }
`;

const Icon = styled.svg`
  width: 1.5rem; 
  height: 1.5rem;
  stroke: white; 
`;

const CreateButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
      setIsOpen(true);
    };
  
    const dispatch=useDispatch()
    const closePopup = () => {
      setIsOpen(false);
      dispatch(setplaylisterrorNull())
    };
  return (
    <div>
        {isOpen && <Popup onClose={closePopup} /> }
    
    <StyledCreateButton onClick={openPopup}>
      <Button>
        <Icon
          data-slot="icon"
          aria-hidden="true"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 4.5v15m7.5-7.5h-15" strokeLinecap="round" strokeLinejoin="round" />
        </Icon>
      </Button>
    </StyledCreateButton>
    </div>
  );
};

export  {CreateButton};
