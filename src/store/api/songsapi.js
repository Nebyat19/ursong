import { ENV } from "../../config";

export const songapi = {
    fetchSongs: () => {
      
        return fetch(ENV.fetchSongsUrl+'/songs').then(response => response.json());
    },
    deleteSong: (songId) => {
       
        return fetch(ENV.fetchSongsUrl+`/songs/${songId}`, { method: 'DELETE' });
    },
    updateSong: (songData) => {
      
        return fetch(ENV.fetchSongsUrl+`/songs/${songData.id}`, {
            method: 'PUT',
            body: JSON.stringify(songData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    },
   
};
