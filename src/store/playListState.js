import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    playlists: [],
    isLoading: false,
    error: null,
  
}


export const playlistslice = createSlice({
    "name": "playlists",
    initialState,
    reducers:
    {


        setplaylisterrorNull:(state)=>{
            state.error = null;
        },
        addNewPlaylist:(state, action)=>{
            state.playlists=[...state.playlists, action.payload]
            state.error = "New PLAY list Added";
            console.log(state.playlists)
        },
        getPlaylistsFetch: (state) => {
            state.isLoading = true
        },
        getPlaylistsSuccess(state, action) {
            state.playlists = action.payload;
            state.isLoading = false;
            state.error = null;
        },

        
        getPlaylistsFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        deletePlaylistsSuccess: (state, action) => {
            state.error = action.payload
        },
        deletePlaylistsFailure: (state, action) => {
            state.error = action.payload
        },
        //updateSongSuccess

        updatePlaylistsSuccess: (state, action) => {
           

        },
        updatePlaylistsFailure: (state, action) => {

            state.error = action.payload
        },
        addPlaylistFailure:(state,action)=>{
            state.error = action.payload
        }

    }
});

export const {setplaylisterrorNull, addNewPlaylist, addPlaylistFailure, getPlaylistsFetch, getPlaylistsSuccess, getPlaylistsFailure , deletePlaylistsSuccess, deletePlaylistsFailure, updatePlaylistsSuccess, updatePlaylistsFailure} = playlistslice.actions

export default playlistslice.reducer; 