import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 50;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-bottom: 4px;
`;

const Content = styled.div`
font-family: "Lato", sans-serif;
font-weight: 400;
font-style: normal;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  min-width: 90%;
  @media (min-width: 768px) {
    min-width: 45%;
  }
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #6ec24a;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color:#505a6b;
  font:bold;
 
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.875rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
`;

const Checkbox = styled.input`
  margin-left: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.875rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  cursor: pointer;
  color:#fff;
  transition: background-color 0.3s ease;
  background-color: ${({ primary }) => (primary ? '#c31b4b' : '#6c757d')};
  &:hover {
    background-color: #505a6b;
   
  }
`;
const StyledSelect = styled.select`
padding: 8px;
border-radius: 4px;
border: 1px solid #ccc;
font-size: 14px;
background-color: #fff;
color: gray;
width: 100%;
margin-bottom:10px;
cursor: pointer;
outline: none;


&::-ms-expand {
  display: none;
}
&:hover {
  border-color: #666;
}
&:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

`;
const StyledOption = styled.option`
  font-size:0.9rem;
`;
const FlexDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-top:20px;
`;

const Popup = ({ onClose }) => {
  const [isSongForm, setIsSongForm] = useState(true);

  const toggleForm = () => {
    setIsSongForm(!isSongForm);
  };

  return (
    <Container>
      <Content>
        <HeaderContainer>
          <Title>New {isSongForm ? 'Song' : 'Playlist'}</Title>
          <Button onClick={toggleForm}>
            Add {isSongForm ? 'Playlist' : 'Song'}
          </Button>
        </HeaderContainer>
        <Form>
          {isSongForm ? (
            <>
              <Label htmlFor="title">Title *</Label>
              <Input type="text" id="title" name="title" />
              <Label htmlFor="filePath">File Path</Label>
              <Input type="text" id="filePath" name="filePath" />
              <Label htmlFor="tags">Tags</Label>
              <Input type="text" id="tags" name="tags" />
              <Label>
                Favorite
                <Checkbox type="checkbox" id="isFav" name="isFav" />
              </Label>
              <Label htmlFor="playListId">Playlist *</Label>
              <StyledSelect name="playListId" id="playListId">
              <StyledOption value="1">Select playlist</StyledOption>
              </StyledSelect>
              <Label htmlFor="thumbnailImage">Thumbnail Image</Label>
              <Input type="text" id="thumbnailImage" name="thumbnailImage" />
            </>
          ) : (
            <>
              <Label htmlFor="playlistName">Playlist Name *</Label>
              <Input type="text" id="playlistName" name="playlistName" />
              <Label htmlFor="tags">Tags</Label>
              <Input type="text" id="tags" name="tags" />
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" rows="3" />
              <Label>
                Public
                <Checkbox type="checkbox" id="isPublic" name="isPublic" />
              </Label>
              <Label htmlFor="coverImage">Cover Image</Label>
              <Input type="text" id="coverImage" name="coverImage" />
            </>
          )}
           <FlexDiv>
            <Button primary>Save</Button>
            <Button onClick={onClose}>
              Cancel
            </Button>
          </FlexDiv>
        </Form>
      </Content>
    </Container>
  );
};

export { Popup };
