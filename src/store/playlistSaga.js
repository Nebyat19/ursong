import { put, takeLatest, all } from 'redux-saga/effects';
import { getPlaylistsSuccess, getPlaylistsFailure } from './playListState'; 
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
    }
  }
  function* addPlaylist(action){

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
