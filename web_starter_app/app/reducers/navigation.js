import strings from '../config/constants';

export default function reducer(state = {
  page: 'Spinner',
}, action) {
  switch (action.type) {
    case strings.action_setParentPage:
      return { ...state, page: action.payload };
    default:
      return state;
  }
}
