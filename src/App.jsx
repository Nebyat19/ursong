import PlayListView from './pages/playListView'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeedView } from './pages/FeedsView';
import { NoPage } from './pages/NoPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<PlayListView />} />
          <Route path='feed' element={<FeedView />} />
          <Route path='home' element={<FeedView />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App
