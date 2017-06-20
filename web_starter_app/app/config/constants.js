module.exports = {
	// DRAWER ACTIONS
	open_drawer: 'OPEN_DRAWER',
	close_drawer: 'CLOSE_DRAWER',

	// IMAGE
	action_fetch_images: 'FETCH_IMAGES',
	action_test_fetch: 'FETCH_IMAGES_TEST',

	// API
	base_url: 'https://chuck-nodejs-exercise1.herokuapp.com/api/contacts',

	// USER ACTIONS
	action_didBeginFetching: 'DID_BEGIN_FETCHING',
	action_fetchUsersFullfilled: 'FETCH_USERS_FULLFILLED',
	action_fetchUsersRejected: 'FETCH_USERS_REJECTED',
	action_apiSuccess: 'API_SUCCESS',
	action_addUserRejected: 'ADD_USER_REJECTED',
	action_updateUserRejected: 'UPDATE_USER_REJECTED',
	action_resetMessage: 'RESET_MESSAGE',

	// DETAIL ACTIONS
	action_setFirstName: 'SET_FIRST_NAME',
	action_setLastName: 'SET_LAST_NAME',
	action_setAddress: 'SET_ADDRESS',
	action_setEmail: 'SET_EMAIL',
	action_setContactNumber: 'SET_CONTACT_NUMBER',
	action_setAll: 'SET_ALL',
	action_reset: 'RESET',
	action_setID: 'SET_ID',

	//MESSAGES
	message_api_success: 'Success!',

  // LOGIN
	action_setLoginEmail: 'SET_LOGIN_EMAIL',
	action_setLoginPassword: 'SET_LOGIN_PASSWORD',
	action_setLoginError: 'SET_LOGIN_ERROR',
	action_setLoginLoading: 'SET_LOGIN_LOADING',
	action_setUserData: 'SET_LOGIN_USERDATA'
};