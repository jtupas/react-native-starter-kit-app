import axios from 'axios';
import strings from '../config/constants';

export function didBeginFetching() {
	return {
		type: strings.action_didBeginFetching
	}
}

export function fetchUsers() {
	return function(dispatch) {
		dispatch(didBeginFetching())
		axios.get(strings.base_url)
			.then((response) => {
				dispatch( {type: strings.action_fetchUsersFullfilled, payload: response.data})
			})
			.catch((err) => {
				dispatch( {type: strings.action_fetchUsersRejected, payload: err})
			}) 
	}
}

export function addUser(data) {
	return function(dispatch) {
		dispatch(didBeginFetching())

		axios.post(strings.base_url, {
			first_name: data.first_name,
    		last_name: data.last_name,
    		address: data.address,
    		email: data.email,
    		contact_number: data.contact_number
		})
			.then((response) => {
				dispatch(fetchUsers())
				dispatch({type: strings.action_apiSuccess})
			})
			.catch((err) => {
				dispatch( {type: strings.action_addUserRejected, payload: err})
			})
	}
}

export function updateUser(data) {
	return function(dispatch) {
		var url = strings.base_url+'/'+data._id;

		axios.put(url, {
			first_name: data.first_name,
    		last_name: data.last_name,
    		address: data.address,
    		email: data.email,
    		contact_number: data.contact_number
		})
			.then((response) => {
				dispatch(fetchUsers())
				dispatch({type: strings.action_apiSuccess})
			})
			.catch((err) => {
				console.log(err)
				dispatch({type: strings.action_updateUserRejected, payload: err})
			})
	}
}

export function resetState() {
	return {
		type: strings.action_resetMessage
	}
}