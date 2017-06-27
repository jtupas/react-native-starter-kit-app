import strings from '../config/constants';

export default function reducer(state = {
  first_name: '',
  last_name: '',
  address: '',
  email: '',
  contact_number: '',
  _id: '',
  isNew: true,
}, action) {
  switch (action.type) {
    case strings.ACTION_SET_FIRST_NAME:
      return { ...state, first_name: action.payload };
    case strings.ACTION_SET_LAST_NAME:
      return { ...state, last_name: action.payload };
    case strings.ACTION_SET_ADDRESS:
      return { ...state, address: action.payload };
    case strings.ACTION_SET_EMAIL:
      return { ...state, email: action.payload };
    case strings.ACTION_SET_CONTACT_NUMBER:
      return { ...state, contact_number: action.payload };
    case strings.ACTION_SET_ID:
      return { ...state, _id: action.payload };
    case strings.ACTION_SET_ALL:
      return {
        ...state,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        address: action.payload.address,
        email: action.payload.email,
        contact_number: action.payload.contact_number,
        _id: action.payload._id,
        isNew: false,
      };
    case strings.ACTION_RESET:
      return {
        ...state,
        first_name: '',
        last_name: '',
        address: '',
        email: '',
        contact_number: '',
        _id: '',
        isNew: true,
      };
    default:
      return state;
  }
}
