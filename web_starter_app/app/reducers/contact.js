import strings from '../config/constants';

export default function reducer(state = {

  users: [],
  fetching: false,
  fetched: false,
  alertMessage: null,

}, action) {
  switch (action.type) {
    case strings.ACTION_DID_BEGIN_FETCHING:
      return { ...state, fetching: true };
    case strings.ACTION_FETCH_USERS_FULLFILLED:
      return { ...state, users: action.payload, fetching: false };
    case strings.ACTION_FETCH_USERS_REJECTED:
      return { ...state, alertMessage: action.payload, fetching: false };
    case strings.ACTION_ADD_USER_REJECTED:
      return { ...state, alertMessage: action.payload, fetching: false };
    case strings.ACTION_UPDATE_USER_REJECTED:
      return { ...state, alertMessage: action.payload, fetching: false };
    case strings.ACTION_API_SUCCESS:
      return { ...state, alertMessage: strings.MESSAGE_API_SUCCESS };
    case strings.ACTION_RESET_MESSAGE:
      return { ...state, alertMessage: null };
    default:
      return state;
  }
}
