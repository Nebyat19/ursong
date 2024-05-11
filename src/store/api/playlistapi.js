import { ENV } from "../../config";

export const playlistApi = {

    addPlaylist:(newPlayList)=>{
        return fetch(`${ENV.apiBaseUrl}/playlists`, {
            method: 'POST',
            body: JSON.stringify(newPlayList),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    },
    fetchPlaylists: () => {
        return fetch(`${ENV.apiBaseUrl}/playlists`)
            .then(response => response.json());
    },
    deletePlaylist: (playlistId) => {
        return fetch(`${ENV.apiBaseUrl}/playlists/${playlistId}`, {
            method: 'DELETE'
        });
    },
    updatePlaylist: (playlistData) => {
        return fetch(`${ENV.apiBaseUrl}/playlists/${playlistData.id}`, {
            method: 'PUT',
            body: JSON.stringify(playlistData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    },
  
};
