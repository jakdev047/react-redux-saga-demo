import {takeEvery, fork, call,put, takeLatest, take} from 'redux-saga/effects';
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

// create user
function* createUser(action){
    try {
        yield call(api.createUser,{
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
        });
        yield call(getUsers);
    }
    catch (e) {
        console.log(e);
    }
}

function* watchCreateUserRequest(){
    yield takeLatest(actions.Types.CREATE_USER_REQUEST,createUser);
}

// delete user
function* deleteUser({userId}){
    try {
        yield call(api.deleteUser,userId);
        yield call(getUsers);
    }
    catch (e) {
        console.log(e);
    }
}

function* watchDeleteUserRequest(){
    while(true){
        const action = yield take(actions.Types.DELETE_USER_REQUEST);
        yield call(deleteUser,{
            userId: action.payload.userId
        });
    }
}

const userSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest),
];

export default userSagas;