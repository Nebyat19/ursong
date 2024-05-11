
import Header from "../components/Header";
import { SearchSpace } from "../components/SearchSpace";
import { getUser } from "../store/UserState";
import { CreateButton } from "../components/CreateButon";
import { SongCardh } from "../components/SongCardh";
import styled from "styled-components";
import { Playlists } from "../components/PlayLists";
import { PlaylistSwiper } from "./swiper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPlaylistsFetch } from "../store/playListState";

import { isAuthenticated } from "../store/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useUser } from "../store/hooks/useUser";
import { useSongs } from "../store/hooks/useSong";
import { getSongsFetch } from "../store/songState";

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
padding-top: 50px;
  bottom:0;
  gap:10px;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  overflow-y: scroll;
  height: 200px;
`;


function playListView() {
 

  const [listId, setListId] = useState(0)
  const songs = useSongs();


  const dispatch = useDispatch();

  dispatch(getUser())
  useEffect(() => {
    dispatch(getPlaylistsFetch())
    dispatch(getSongsFetch())
  
  },[dispatch])

  const [query, setQuery] = useState('')

  const handleFilter = (e) => {
    setQuery(e.target.value);

  }

  const computedsongs = query.trim() === "" ? songs : songs.filter(song =>
    song.title.toLowerCase().includes(query.toLowerCase()) ||
    song.tags.map(t => t.toLowerCase()).includes(query.toLowerCase())
  );
  console.log(computedsongs)
  const isSongs = computedsongs.length !== 0


  const isLoading = useSelector( state=>state.songs.isLoading)

  return (
    <div >
      <div >
        <SearchSpace />


      </div>
      <div>
        <PlaylistSwiper />

      </div>
      <center>
        {!isLoading ?
        <Container>
        {computedsongs &&
          computedsongs.map(song => {
            return <SongCardh key={Math.random()}  {...song} />
          })
        }
        

      </Container>
   : <span>Loding....</span> }</center>


      <CreateButton />
    </div>
  )
}

export default playListView