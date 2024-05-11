import React, { useState } from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import styled from 'styled-components';
import Header from './Header';
import * as colors from "../constants/colors";
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/UserState';
import { useNavigate } from 'react-router-dom/dist';

const Title = styled.h1`
    color: ${colors.secondaryColor};
  
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
`
const StyledSignupForm = styled.div`
font-family: "Lato", sans-serif;
font-weight: 400;
font-style: normal;
 width: 100%;

  max-width: 28rem;
  margin: 2rem auto;

`;

const StyledInput = styled.input`
align-items: center;
  padding-left: 2.5rem;
  width: 100%;
  color: #5f5a5a;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  &:focus {
    border-color: ${colors.secondaryColor};
    outline: none;
  }
`;
const Lable =styled.label`
font-size:0.8rem;
font-weight: 600;
color: #8b8686;
`
const StyledButton = styled.button`
 
  background-color: ${colors.secondaryColor};
  color: #fff;
  padding: 0.2rem 1.5rem;
  border-radius: 0.375rem;
  margin-top: 1rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${colors.primaryColor};
  }
`;
const LableHolder =styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
`
const StyledIcon =styled.span`
    color: ${colors.primaryColor};
`
const ButtomButtons =styled.div`
   display: flex;
   align-items: end;
   justify-content:space-between;
  
   span{
    color: #1132f3;
    font-weight: 400;
    font-size: 0.8rem;
    text-transform:capitalize;
    cursor: pointer;
    &:hover{
        color: ${colors.primaryColor};
    }
   }
`
const SignupForm = ({onChangeForm}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    id: new Date().getTime()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const user =useSelector(state=>state.user.user)
  const error = useSelector(state=>state.user.error)
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const navigator = useNavigate()
  

  if (isAuthenticated) navigator('/mysong');
  const handleSubmit = (e) => {
    e.preventDefault();
  
    dispatch(  { type: 'user/signup', payload: formData })
  
  };

  return (
    <StyledSignupForm>
      <Title>Sign Up</Title>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Lable htmlFor="username" >Username</Lable>
          <LableHolder>
           <StyledIcon> <FiUser  /></StyledIcon>
            <StyledInput
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </LableHolder>
        </div>
        <div>
          <Lable htmlFor="email" >Email</Lable>
          <LableHolder>
           <StyledIcon>  <FiMail /></StyledIcon>
            <StyledInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </LableHolder>
        </div>
        <div>
          <Lable htmlFor="password">Password</Lable>
          <LableHolder >
          <StyledIcon>  <FiLock /> </StyledIcon>
            <StyledInput
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </LableHolder>
        </div>
       {error&&  <span>{error} </span>}
       <ButtomButtons> <StyledButton type="submit">Sign Up</StyledButton>
        <span onClick={onChangeForm}>already registered</span></ButtomButtons>
      </form>
    </StyledSignupForm>
  );
};

export { SignupForm };
