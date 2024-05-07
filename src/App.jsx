import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSongsFetch } from './store/songState'
import './App.css'
import { useSongs } from './store/hooks/useSong'

function App() {

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
    <>
      <div>{query}</div>
      <input onChange={handleFilter} value={query} type="text" name="" id="" />
      <div>{error}</div>

      {isSongs ? computedsongs.map(
        (song) => { return <div key={song.id}>{song.title}</div> }
      ) : <div>No Data</div>}

      <h1 onClick={() => { dispatch(getSongsFetch()) }}></h1>
    </>
  )
}

export default App
