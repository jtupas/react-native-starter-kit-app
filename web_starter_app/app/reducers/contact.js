import strings from '../config/constants';

export default function reducer(state = {

  users: [],
  fetching: false,
  fetched: false,
  alertMessage: null,

}, action) {
  switch (action.type) {
    case strings.action_didBeginFetching:
      return { ...state, fetching: true };
      break;
    case strings.action_fetchUsersFullfilled:
      return { ...state, users: action.payload, fetching: false };
      break;
    case strings.action_fetchUsersRejected:
      return { ...state, alertMessage: action.payload, fetching: false };
      break;
    case strings.action_updateUserRejected:
      return { ...state, alertMessage: action.payload, fetching: false };
      break;
    case strings.action_apiSuccess:
      return { ...state, alertMessage: strings.message_api_success };
      break;
    case strings.action_resetMessage:
      return { ...state, alertMessage: null };
      break;
  }
  return state;
}
