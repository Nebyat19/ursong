import { useState } from "react";
import styled from "styled-components";
import { MusicIcon, VerticalDot } from "../constants";
import { SongUpdateForm } from "./SongUpdateForm";
import { FaTrash } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

// Styled components for specific details
const SongCardContainer = styled.div`
font-family: "Lato", sans-serif;
font-weight: 400;
font-style: normal;
  font-size: 0.875rem;
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 60%;
  background-image: linear-gradient(to right, #f59e0b, #ef4444, #ec4899);
  padding: 0.5rem;
  padding-right:0.7rem;
  border-radius: 0.5rem;
  
`;



const AlbumCover = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
`;

const AlbumCoverImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const LeftSection = styled.div`
  display: flex;

gap: 0.5rem;
  
`;
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content:flex-start;


 
`;

const Title = styled.h1`
  font-size: 0.8rem;
  font-weight: 600;
  color: #f3f4f6;
`;

const Tags = styled.span`
font-size: 0.65rem;
  color: #d4d0cb;
 

`;

const RightSection = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const DotIcon = styled.img`
position: relative;
  width: 1rem;
  height: 1rem;
`;

const Button = styled.button`
 position: absolute;
  top: 1rem;
  left: 2rem;
  background-color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  color: #4b5563;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e5e7eb;
  }
`;

const ActionIcons = styled.div`
  display: flex;
  gap: 1.25rem;
`;

const TrashIcon = styled(FaTrash)`
  color: #cbd5e0;
  transition: color 0.3s;
  cursor: pointer;
  &:hover {
    color: #9ca3af;
  }
`;

const HeartIcon = styled(FaHeart)`
  color: #cbd5e0;
  transition: color 0.3s;
  cursor: pointer;
  &:hover {
    color: #f87171;
  }
`;

const SongCardh = ({id,title,tags,isFav,playListId,thumbnailImage}) => {
  const [isUpdateHidden, setUpdateHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleUpdate = () => {
    setUpdateHidden((prev) => !prev);
  };

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SongCardContainer id={id+Math.random()}>
      <LeftSection>
        <AlbumCover>
          <AlbumCoverImage src={MusicIcon} alt="" />
        </AlbumCover>
        <InfoSection>
          <Title>{title}</Title>
          <Tags > {tags.split(",").map((tag, index) => (
 <span key={index}>#{tag.trim()} </span> 
  ))}</Tags>

        </InfoSection>
      </LeftSection>
      <RightSection>
        <DotIcon src={VerticalDot} alt="" onClick={toggleUpdate} />
        {isUpdateHidden && (
          <Button onClick={togglePopup}>Update</Button>
        )}
        <ActionIcons>
          <TrashIcon  />
          <HeartIcon  />
          {isOpen && <SongUpdateForm onClose={togglePopup} />}
        </ActionIcons>
      </RightSection>
    </SongCardContainer>
  );
};

export { SongCardh };
