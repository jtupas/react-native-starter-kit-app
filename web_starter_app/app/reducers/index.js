import { combineReducers } from 'redux';

import image from './imageReducer';
import contact from './contactReducer';
import contactDetail from './contactDetailReducer';
import drawer from './drawerReducer';
import login from './loginReducer'

export default combineReducers({
	drawer,
	image,
	contact,
	contactDetail,
	login
});