
import Header from "../components/Header";
import { SearchSpace } from "../components/SearchSpace";

import { CreateButton } from "../components/CreateButon";
import { SongCardh } from "../components/SongCardh";
import styled from "styled-components";
import { Playlists } from "../components/PlayLists";
import { SwiperJs } from "./swiper";



const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
padding-top: 50px;
  bottom:0;
  gap:10px;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Center horizontally */
  overflow-y: scroll;
  height: 200px;
`;

const song = {
    id: "1",
    title: "Example Music Name",
    tags: "pop,rock,mix",
    isFav: false,
    playListId: 1,
    thumbnailImage: ""
}

function playListView() {

    return (
        <div className="w-screen h-screen">
            <div className="bg-white w-full">
                <SearchSpace />

            </div>
            <div>
          <SwiperJs/>

            </div>
<center><Container>
                <SongCardh {...song} />
                <SongCardh {...song} />
                <SongCardh {...song} />
                <SongCardh {...song} />
                <SongCardh {...song} />
                <SongCardh {...song} />
                <SongCardh {...song} />
                <SongCardh {...song} />
                
                </Container></center>
            

            <CreateButton />
        </div>
    )
}

export default playListView