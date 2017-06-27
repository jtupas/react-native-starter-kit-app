import strings from '../config/constants';

export default function reducer(state = {
  email: '',
  password: '',
  errorMsg: null,
  successMsg: null,
  loading: false,
}, action) {
  switch (action.type) {
    case strings.ACTION_SET_SIGNUP_EMAIL:
      return { ...state, email: action.payload };
    case strings.ACTION_SET_SIGNUP_PASSWORD:
      return { ...state, password: action.payload };
    case strings.ACTION_SET_SIGNUP_ERROR:
      return { ...state, errorMsg: action.payload };
    case strings.ACTION_SET_SIGNUP_SUCCESS:
      return { ...state, successMsg: action.payload };
    default:
      return state;
  }
}
