
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import songslice from './songState';
import songsaga from './songSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: {
        songs: songslice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(songsaga);

export { store };

