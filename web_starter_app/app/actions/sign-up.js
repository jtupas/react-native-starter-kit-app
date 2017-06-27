import strings from '../config/constants';
import firebaseApp from '../config/firebase';
import { setSpinner, setLoginPage } from '../actions/navigation';

export function setEmail(text) {
  return {
    type: strings.ACTION_SET_SIGNUP_EMAIL,
    payload: text,
  };
}

export function setPassword(text) {
  return {
    type: strings.ACTION_SET_SIGNUP_PASSWORD,
    payload: text,
  };
}

export function setErrorMessage(text) {
  return {
    type: strings.ACTION_SET_SIGNUP_ERROR,
    payload: text,
  };
}

export function setSuccessMessage(text) {
  return {
    type: strings.ACTION_SET_SIGNUP_SUCCESS,
    payload: text,
  };
}

export function signup(email, password) {
  return function returnSignUp(dispatch) {
    dispatch(setSpinner());
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(setLoginPage());
        dispatch(setSuccessMessage('Account was created!'));
        dispatch(setSuccessMessage(null));
      })
      .catch((error) => {
        dispatch(setLoginPage());
        dispatch(setErrorMessage(error.message));
        dispatch(setErrorMessage(null));
      });
  };
}
