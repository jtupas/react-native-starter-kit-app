import strings from '../config/constants';

export default function reducer(state = {
  email: '',
  password: '',
  errorMsg: null,
  successMsg: null,
  loading: false,
}, action) {
  switch (action.type) {
    case strings.action_setSignupEmail:
      return { ...state, email: action.payload };
      break;
    case strings.action_setSignupPassword:
      return { ...state, password: action.payload };
      break;
    case strings.action_setSignupError:
      return { ...state, errorMsg: action.payload };
      break;
    case strings.action_setSignupSuccess:
      return { ...state, successMsg: action.payload };
      break;
    case strings.action_setSignupLoading:
      return { ...state, loading: action.payload };
      break;
  }
  return state;
}
