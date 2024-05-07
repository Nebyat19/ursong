import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songs: [],
    isLoading: false,
    error: null
}


export const songslice = createSlice({
    "name": "songs",
    initialState,
    reducers: {

        //Get songs
        getSongsFetch: (state) => {
            state.isLoading = true
        },
        getSongsSuccess: (state, action) => {
            state.songs = action.payload,
                state.isLoading = false
            state.error = null
        },
        getSongsFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },

        //delete songs
        deleteSongSuccess: (state, action) => {
            //delete the song from sate
        },


        deleteSongFailure: (state, action) => {
            state.error = action.payload
        },
        //updateSongSuccess

        updateSongSuccess: (state, action) => {
            //update the song on the sate

        },
        updateSongFailure: (state, action) => {

            state.error = action.payload
        },
        


    }



});

export const { getSongsFetch, getSongsSuccess, getSongsFailure, deleteSongFailure, deleteSongSuccess, updateSongSuccess, updateSongFailure } = songslice.actions

export default songslice.reducer; 