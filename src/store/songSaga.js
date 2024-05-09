import { call, put, takeEvery, all } from 'redux-saga/effects'
import { getSongsFailure, getSongsSuccess, deleteSongSuccess } from './songState'
import { songapi } from './api/songsapi';


function* workGetSongsFetch() {
    try {

        const songs = yield call(songapi.fetchSongs);
        yield put(getSongsSuccess(songs));
    } catch (error) {
        yield put(getSongsFailure(error.message));
    }
}


function* workDeleteSong(action) {
    try {

        yield call(songapi.deleteSong, action.payload.songId);
        yield put(deleteSongSuccess(action.payload.songId));
    } catch (error) {
        yield put(deleteSongFailure(error));
    }
}


function* workUpdateSong(action) {
    try {

        const updatedSong = yield call(songapi.updateSong, action.payload.songData);
        yield put(updateSongSuccess(updatedSong));
    } catch (error) {
        yield put(updateSongFailure(error));
    }
}



function* songsaga() {
    yield all([
     takeEvery('songs/getSongsFetch', workGetSongsFetch),
     takeEvery('songs/deleteSong', workDeleteSong),
     takeEvery('songs/updateSong', workUpdateSong)
    ])

}

export default songsaga;