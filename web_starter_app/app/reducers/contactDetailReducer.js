import strings from '../config/constants';

export default function reducer(state= {
	first_name: '',
	last_name: '',
	address: '',
	email: '',
	contact_number: '',
	_id: '',
	isNew: true,
	}, action) {

	switch(action.type) {
		case strings.action_setFirstName:
			return {...state, first_name: action.payload};
			break;
		case strings.action_setLastName:
			return {...state, last_name: action.payload};
			break;
		case strings.action_setAddress:
			return {...state, address: action.payload};
			break;
		case strings.action_setEmail:
			return {...state, email: action.payload};
			break;
		case strings.action_setContactNumber:
			return {...state, contact_number: action.payload};
			break;
		case strings.action_setID:
			return {...state, _id: action.payload};
			break;
		case strings.action_setAll:
			return {
				...state,
				first_name: action.payload.first_name,
				last_name: action.payload.last_name, 
				address: action.payload.address,
				email: action.payload.email,
				contact_number: action.payload.contact_number,
				_id: action.payload._id,
				isNew: false};
			break;
		case strings.action_reset:
			return {
				...state,
				first_name: '',
				last_name: '',
				address: '',
				email: '',
				contact_number: '',
				_id: '',
				isNew: true};
			break;
	}
	return state;
}