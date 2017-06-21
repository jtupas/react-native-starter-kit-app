import strings from '../config/constants';
import firebaseApp from '../config/firebase';

export function setEmail(text)  {
	return {
		type: strings.action_setSignupEmail,
		payload: text
  }
}

export function setPassword(text) {
  return {
    type: strings.action_setSignupPassword,
    payload: text
  }
}

export function setLoading(boolean) {
  return {
    type: strings.action_setSignupLoading,
    payload: boolean
  }
}

export function setErrorMessage(text) {
  return {
    type: strings.action_setSignupError,
    payload: text
  }
}

export function setSuccessMessage(text) {
  return {
    type: strings.action_setSignupSuccess,
    payload: text
  }
}

export function signup(email, password) {
  return function(dispatch) {
    dispatch(setLoading(true))
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      dispatch(setLoading(false))
      dispatch(setSuccessMessage('Account was created!'))
      dispatch(setSuccessMessage(null))
    })
    .catch((error) => {
      dispatch(setLoading(false))
      dispatch(setErrorMessage(error.message))
      dispatch(setErrorMessage(null))
    });
  }
}
