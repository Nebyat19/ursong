import { call, put, takeEvery, all } from 'redux-saga/effects'
import { addSongSongSuccess, getSongsFailure, getSongsSuccess, deleteSongSuccess } from './songState'
import { songapi } from './api/songsapi';


function* workGetSongsFetch(action) {
    try {

        const songs = yield call(songapi.fetchSongs,action.payload);
       const response = yield put(getSongsSuccess(songs));
       console.log(songs)
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

function* workAddSong(action){

    try{
        const newsong=action.payload
        const response =yield call(songapi.addsong,newsong)
        console.log(response)
        yield put(addSongSongSuccess(response))

    }catch (error){
     yield put(getSongsFailure(error.message))
       console.log(error.message)
    }
}

function* songsaga() {
    yield all([
     takeEvery('songs/getSongsFetch', workGetSongsFetch),

     takeEvery('songs/deleteSong', workDeleteSong),
     takeEvery('songs/updateSong', workUpdateSong),
     takeEvery('songs/addSong',workAddSong)
    ])

}

export default songsaga;