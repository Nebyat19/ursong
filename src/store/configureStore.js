
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import songslice from './songState';
import songsaga from './songSaga';

import playlistsSaga from './playlistSaga'
import playlistslice from './playListState';

import userSaga from './userSaga'
import userslice from './UserState'

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: {
        songs: songslice,
        user: userslice,
        playlists: playlistslice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(playlistsSaga);
sagaMiddleware.run(songsaga)
sagaMiddleware.run(userSaga);

export { store };

