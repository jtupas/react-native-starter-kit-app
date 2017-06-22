import { combineReducers } from 'redux';

import image from './image';
import contact from './contact';
import contactDetail from './contact-detail';
import drawer from './drawer';
import login from './login';
import signup from './sign-up';

export default combineReducers({
  drawer,
  image,
  contact,
  contactDetail,
  login,
  signup,
});
