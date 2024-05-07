import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSongsFetch } from './store/songState'
import './App.css'
import { useSongs } from './store/hooks/useSong'
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  padding: 20px;
`;

const SongContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  margin-bottom: 5px;
`;

const TagList = styled.p`
  margin-bottom: 10px;
`;

const Thumbnail = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin-right: 10px;
  cursor: pointer;
`;

const Form = styled.form`
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  width: 100%;
  padding: 8px;
`;
const Test = () => {
    const songs = useSongs()
    const isLoading = useSelector(state => state.songs.isLoading)
    const error = useSelector(state => state.songs.error)
    const dispatch = useDispatch();
    const [query, setQuery] = useState('00')
  
    const handleFilter = (e) => {
      setQuery(e.target.value);
  
    }
  
    const computedsongs = query.trim() === "" ? songs : songs.filter(song =>
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.tags.map(t => t.toLowerCase()).includes(query.toLowerCase())
    );
  
    const isSongs = computedsongs.length !== 0
  
    useEffect(() => {
      dispatch(getSongsFetch());
  
  
    }, [dispatch])
  
  

  return (
    <Container>
      {/* Search input */}
      <input onChange={handleFilter} value={query} type="text" name="" id="" />

    
      {isSongs ? computedsongs.map((song) => (
        <SongContainer key={song.id}>
        
          <Title>{song.title}</Title>
          <TagList>Tags: {song.tags.join(', ')}</TagList>
          <Thumbnail src={song.thumbnailImage} alt={song.title} />
          <Button onClick={() => deleteSong(song.id)}>Delete</Button>
          <Button
            onClick={() =>
              updateSong(song.id, {
                isFav: !song.isFav, // Toggle favorite status
              })
            }
          >
            {song.isFav ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>
          <Form onSubmit={(e) => handleUpdate(song.id, e)}>
            <Input type="text" placeholder="New title" />
            <Input type="text" placeholder="New tags" />
            <Input type="text" placeholder="New thumbnail URL" />
            <Button type="submit">Update</Button>
          </Form>
        </SongContainer>
      )): <div>no data</div>}

        {/* Update form */}
      
     

      {/* Add new song form */}
      <Form onSubmit={(e) => handleAddSong(e)}>
        <Input type="text" placeholder="Title" />
        <Input type="text" placeholder="Tags" />
        <Input type="text" placeholder="Thumbnail URL" />
        <Input type="text" placeholder="File path" />
        <Button type="submit">Add Song</Button>
      </Form>
    </Container>
  );

  
};

export default Test;
