import { createStore } from 'redux';
import rootReduces from './reducers';
const initialState = {};

const store = createStore(
    rootReduces,
    initialState
);

export default store;