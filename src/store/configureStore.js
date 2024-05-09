
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import songslice from './songState';
import songsaga from './songSaga';

import playlistsSaga from './playlistSaga'
import  playlistslice  from './playListState';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: {
        songs: songslice,
        playlists:playlistslice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(songsaga,playlistsSaga);

export { store };

