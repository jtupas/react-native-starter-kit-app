import strings from '../config/constants';
import firebaseApp from '../config/firebase';
import { setSpinner, setLoginPage } from '../actions/navigation';

export function setEmail(text) {
  return {
    type: strings.action_setSignupEmail,
    payload: text,
  };
}

export function setPassword(text) {
  return {
    type: strings.action_setSignupPassword,
    payload: text,
  };
}

export function setErrorMessage(text) {
  return {
    type: strings.action_setSignupError,
    payload: text,
  };
}

export function setSuccessMessage(text) {
  return {
    type: strings.action_setSignupSuccess,
    payload: text,
  };
}

export function signup(email, password) {
  return function (dispatch) {
    dispatch(setSpinner());
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .then((data) => {
      console.log(data);
      dispatch(setLoginPage());
      dispatch(setSuccessMessage('Account was created!'));
      dispatch(setSuccessMessage(null));
    })
    .catch((error) => {
      console.log(error.message);
      dispatch(setLoginPage());
      dispatch(setErrorMessage(error.message));
      dispatch(setErrorMessage(null));
    });
  };
}
