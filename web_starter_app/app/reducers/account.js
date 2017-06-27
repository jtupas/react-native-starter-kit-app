import strings from '../config/constants';

export default function reducer(state = {
  email: '',
  password: '',
  errorMsg: null,
  loading: false,
  userData: null,
}, action) {
  switch (action.type) {
    case strings.ACTION_SET_LOGIN_EMAIL:
      return { ...state, email: action.payload };
    case strings.ACTION_SET_LOGIN_PASSWORD:
      return { ...state, password: action.payload };
    case strings.ACTION_SET_LOGIN_ERROR:
      return { ...state, errorMsg: action.payload };
    case strings.ACTION_SET_LOGIN_USERDATA:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
