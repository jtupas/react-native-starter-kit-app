import strings from '../config/constants';

export default function reducer(state = {
  email: '',
  password: '',
  errorMsg: null,
  loading: false,
  userData: null,
}, action) {
  switch (action.type) {
    case strings.action_setLoginEmail:
      return { ...state, email: action.payload };
      break;
    case strings.action_setLoginPassword:
      return { ...state, password: action.payload };
      break;
    case strings.action_setLoginError:
      return { ...state, errorMsg: action.payload };
      break;
    case strings.action_setLoginLoading:
      return { ...state, loading: action.payload };
      break;
    case strings.action_setUserData:
      return { ...state, userData: action.payload };
      break;
  }
  return state;
}
