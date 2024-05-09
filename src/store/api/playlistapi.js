import { ENV } from "../../config";

export const playlistApi = {
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
