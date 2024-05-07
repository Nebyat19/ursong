import { call, put, takeEvery } from 'redux-saga/effects'
import { getSongsFailure, getSongsSuccess, deleteSongSuccess } from './songState'
import { api } from './api/songsapi';


function* workGetSongsFetch() {
    try {

        const songs = yield call(api.fetchSongs);
        yield put(getSongsSuccess(songs));
    } catch (error) {
        yield put(getSongsFailure(error.message));
    }
}


function* workDeleteSong(action) {
    try {

        yield call(api.deleteSong, action.payload.songId);
        yield put(deleteSongSuccess(action.payload.songId));
    } catch (error) {
        yield put(deleteSongFailure(error));
    }
}


function* workUpdateSong(action) {
    try {

        const updatedSong = yield call(api.updateSong, action.payload.songData);
        yield put(updateSongSuccess(updatedSong));
    } catch (error) {
        yield put(updateSongFailure(error));
    }
}



function* songsaga() {
    yield takeEvery('songs/getSongsFetch', workGetSongsFetch);
    yield takeEvery('songs/deleteSong', workDeleteSong);
    yield takeEvery('songs/updateSong', workUpdateSong);
 

}

export default songsaga;