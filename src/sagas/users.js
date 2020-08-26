import {takeEvery, fork, call,put} from 'redux-saga/effects';
import * as actions from '../actions/user';
import * as api from '../api/users';

function* getUsers() {
    try {
        const result = yield call(api.getUsers);
        yield put(actions.getUserSuccess({
            items: result.data.data
        }));
    } catch (e) {
        console.log(e);
    }
}

function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USER_REQUEST,getUsers);
};

const userSagas = [
    fork(watchGetUsersRequest)
];

export default userSagas;