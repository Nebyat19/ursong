import { put, takeLatest, all, call } from 'redux-saga/effects';
import { addPlaylistFailure,getPlaylistsSuccess,addNewPlaylist, getPlaylistsFailure } from './playListState'; 
import { playlistApi } from './api/playlistapi';

function* fetchPlaylists() {
  try {
 
    const playlists = yield call(playlistApi.fetchPlaylists);
    yield put(getPlaylistsSuccess(playlists)); 
  } catch (error) {
    yield put(getPlaylistsFailure(error.message)); 
  }
}


function* watchGetPlaylists() {
  yield takeLatest('playlists/getPlaylistsFetch', fetchPlaylists); 
}

function* updatePlaylist(action) {
    try {
      const { playlistId, updatedData } = action.payload;
      yield call(playlistApi.updatePlaylist, playlistId, updatedData);
      yield put(updatePlaylistsSuccess());
    } catch (error) {
      yield put(updatePlaylistsFailure(error.message));
    }
  }
  
  function* deletePlaylist(action) {
    try {
      const playlistIdToDelete = action.payload;
    
    yield call(playlistApi.deletePlaylist, playlistIdToDelete);

    } catch (error) {
      console.log(error.message)
    }
  }
  function* addPlaylist(action) {
    try {
      const newPlaylist = action.payload;
      const response = yield call(playlistApi.addPlaylist, newPlaylist);
      if (response.id) {
     
        yield put(addNewPlaylist(newPlaylist)); 
        
       
      } else {
        yield put(addPlaylistFailure("Error adding Playlist"));
      }
    } catch (error) {
      yield put(addPlaylistFailure(error.message));
    }
  }
  function* watchUpdatePlaylist() {
    yield takeLatest('playlists/updatePlaylistRequest', updatePlaylist);
  }
  

  function* watchDeletePlaylist() {
    yield takeLatest('playlists/deletePlaylistRequest', deletePlaylist);
  }
  function*  watchAddPlaylist(){
    yield takeLatest('playlists/addPlaylist', addPlaylist);
  }
export default function* playlistsSaga() {
  yield all([
    watchGetPlaylists(), 
    watchUpdatePlaylist(), 
    watchDeletePlaylist(), 
    watchAddPlaylist()
  ]);
}
