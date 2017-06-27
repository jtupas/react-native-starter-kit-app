import strings from '../config/constants';
import firebaseApp from '../config/firebase';
import { setLoginPage, setDrawerPage, setSpinner } from './navigation';

export function setEmail(text) {
  return {
    type: strings.ACTION_SET_LOGIN_EMAIL,
    payload: text,
  };
}

export function setPassword(text) {
  return {
    type: strings.ACTION_SET_LOGIN_PASSWORD,
    payload: text,
  };
}

export function setErrorMessage(text) {
  return {
    type: strings.ACTION_SET_LOGIN_ERROR,
    payload: text,
  };
}

export function setUserData(data) {
  return {
    type: strings.ACTION_SET_LOGIN_USERDATA,
    payload: data,
  };
}

export function login(email, password) {
  return function returnLogin(dispatch) {
    dispatch(setSpinner());
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .then((userData) => {
        dispatch(setUserData(userData));
        dispatch(setDrawerPage());
      })
      .catch((error) => {
        dispatch(setLoginPage());
        dispatch(setErrorMessage(error.message));
        dispatch(setErrorMessage(null));
      });
  };
}

export function signOut() {
  return function returnSignOut(dispatch) {
    dispatch(setSpinner());
    firebaseApp.auth()
      .signOut()
      .then(() => {
        dispatch(setUserData(null));
        dispatch(setLoginPage());
      })
      .catch((error) => {
        dispatch(setLoginPage());
        dispatch(setErrorMessage(error.message));
      });
  };
}
