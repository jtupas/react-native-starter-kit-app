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
    case strings.action_setSignupPassword:
      return { ...state, password: action.payload };
    case strings.action_setSignupError:
      return { ...state, errorMsg: action.payload };
    case strings.action_setSignupSuccess:
      return { ...state, successMsg: action.payload };
    default:
      return state;
  }
}
