import { call, put, takeEvery, all } from 'redux-saga/effects';
import { setUser, loginFailure, signupFailure, logout } from './UserState'


import { userapi } from './api/userapi';
import { ENV } from '../config';


function* handleLogin(action) {
    try {
        const userData = action.payload;

        const response = yield call(userapi.login, userData);

        if (response[0].id) {
            yield put(setUser(response[0]));
           
        }
        else {
            yield put(signupFailure("User Not Found!"))

        }
    } catch (error) {
        yield put(loginFailure(error.message));


    }
}

function* handleSignup(action) {
    try {
        const userData = action.payload;

        // Check if user already exists
        const { usernameExists, emailExists } = yield call(userapi.checkUserExistence, userData);

        if (usernameExists) {
            yield put(signupFailure("Username already exists"));
            return;
        }

        if (emailExists) {
            yield put(signupFailure("Email already exists"));
            return;
        }

        const response = yield call(userapi.signup, userData);

        yield put(setUser(userData));
    } catch (error) {
        yield put(signupFailure(error.message));
    }

}
function* handleLogout(){
    console.log("s")
    yield put(logout());
}

function* watchLogin() {
    yield takeEvery('user/login', handleLogin);
}

function* watchSignup() {
    yield takeEvery('user/signup', handleSignup);
}
function* watchLogout(){
  
    yield  takeEvery('user/logout', handleLogout)
}

export default function* userSaga() {
    yield all([
        watchLogin(),
        watchSignup(),
        watchLogout()
    ]);
}
