import strings from '../config/constants';

export default function reducer(state = { drawerOpen: false }
    , action) {
  switch (action.type) {
    case strings.open_drawer:
      return { ...state, drawerOpen: true };
    case strings.close_drawer:
      return { ...state, drawerOpen: false };
    default:
      return state;
  }
}
