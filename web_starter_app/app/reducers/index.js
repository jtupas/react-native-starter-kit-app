import { combineReducers } from 'redux';

import image from './image';
import contact from './contact';
import contactDetail from './contact-detail';
import drawer from './drawer';
import account from './account';
import signup from './sign-up';
import navigation from './navigation';

export default combineReducers({
  drawer,
  image,
  contact,
  contactDetail,
  account,
  signup,
  navigation,
});
