import strings from '../config/constants';

export default function reducer(state = {

  imagePaths: [],

}, action) {
  switch (action.type) {
    case strings.ACTION_FETCH_IMAGES:
      return { ...state, imagePaths: action.payload };
    default:
      return state;
  }
}
