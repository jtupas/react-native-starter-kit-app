import strings from '../config/constants';

export default function reducer(state = { drawerOpen: false }
  , action) {
  switch (action.type) {
    case strings.OPEN_DRAWER:
      return { ...state, drawerOpen: true };
    case strings.CLOSE_DRAWER:
      return { ...state, drawerOpen: false };
    default:
      return state;
  }
}
