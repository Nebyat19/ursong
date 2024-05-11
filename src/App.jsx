import PlayListView from './pages/playListView'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeedView } from './pages/FeedsView';
import { NoPage } from './pages/NoPage';
import { Playlists } from './components/PlayLists';
import { HomeView } from './pages/HomeView';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
         
          <Route path='feed' element={<FeedView />} />
          <Route index path='/' element={<HomeView />} />
          <Route path="*" element={<NoPage />} />
          <Route  path="mysong" element={<PlayListView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App
