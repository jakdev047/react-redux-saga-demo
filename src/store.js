import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReduces from './reducers';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReduces,
    initialState,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;