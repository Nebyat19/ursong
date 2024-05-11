import React from "react";
import styled from "styled-components";
import { FaPlayCircle, FaMusic } from "react-icons/fa";
import * as colors from "../constants/colors"
import { BgImage } from "../constants";
const StyledDiv = styled.div`
display: flex;
gap: 30px;
justify-content: center;
margin-top: 40px;
flex-wrap:wrap;
margin-bottom:200px;
`;

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;

`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 10px;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  color: #333;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 20px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: inline-block;
`;

const MusicCount = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
margin-top:10px;
  color: ${colors.secondaryColor};
  margin-right: 50px;
  font-size:15px;
`;

const Button = styled.button`
  background-color: #f59e0b;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #d97706;
  }
`;
const BotomLeft=styled.div`

display:flex;
gap:10px;
align-items:center;
`;
const PlaylistCard = ({ image, title, description, tags, musicCount }) => {
  return (
    <CardContainer>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description} ...</Description>
        <div>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        <MusicCount>
          <Icon>
           <BotomLeft> 
            <FaMusic />

            {musicCount} songs
            </BotomLeft>
          </Icon>
          
            <Icon>
              <FaPlayCircle />
            </Icon>
         
       
        </MusicCount>
      </Content>
    </CardContainer>
  );
};

const PlayListCardView = () => {
  const playlist = {
    image: {BgImage},
    title: "Chill Vibes",
    description: "Relaxing tunes for any time of day",
    tags: ["chill", "relaxing", "mellow"],
    musicCount: 15,
  };

  return (
   
      <PlaylistCard {...playlist} />
   
   
  );
};

export {PlayListCardView};
