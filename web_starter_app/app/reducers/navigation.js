import strings from '../config/constants';

export default function reducer(state = {
  page: 'Spinner',
}, action) {
  switch (action.type) {
    case strings.ACTION_SET_PARENT_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
}
