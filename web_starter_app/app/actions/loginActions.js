import strings from '../config/constants';
import firebaseApp from '../config/firebase';

export function setEmail(text)  {
	return {
		type: strings.action_setLoginEmail,
		payload: text
  }
}

export function setPassword(text) {
  return {
    type: strings.action_setLoginPassword,
    payload: text
  }
}

export function setLoading(boolean) {
  return {
    type: strings.action_setLoginLoading,
    payload: boolean
  }
}

export function setErrorMessage(text) {
  return {
    type: strings.action_setLoginError,
    payload: text
  }
}

export function setUserData(data) {
  return {
    type: strings.action_setUserData,
    payload: data
  }
}

export function login(email, password) {
  return function(dispatch) {
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then((userData) => {
      console.log(userData)
      dispatch(setLoading(false))
      dispatch(setUserData(userData))
    })
    .catch((error) => {
      console.log(error)
      dispatch(setLoading(false))
      dispatch(setErrorMessage(error))
    });
  }
}
