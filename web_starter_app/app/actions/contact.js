import axios from 'axios';
import strings from '../config/constants';

export function didBeginFetching() {
  return {
    type: strings.ACTION_DID_BEGIN_FETCHING,
  };
}

export function fetchUsers() {
  return function returnFetchUsers(dispatch) {
    dispatch(didBeginFetching());
    axios.get(strings.BASE_URL)
      .then((response) => {
        dispatch({ type: strings.ACTION_FETCH_USERS_FULLFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: strings.ACTION_FETCH_USERS_REJECTED, payload: err });
      });
  };
}

export function addUser(data) {
  return function returnAddUser(dispatch) {
    dispatch(didBeginFetching());

    axios.post(strings.BASE_URL, {
      first_name: data.first_name,
      last_name: data.last_name,
      address: data.address,
      email: data.email,
      contact_number: data.contact_number,
    })
      .then(() => {
        dispatch(fetchUsers());
        dispatch({ type: strings.ACTION_API_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: strings.ACTION_ADD_USER_REJECTED, payload: err });
      });
  };
}

export function updateUser(data) {
  return function returnUpdateUser(dispatch) {
    const url = `${strings.BASE_URL}/${data._id}`;

    axios.put(url, {
      first_name: data.first_name,
      last_name: data.last_name,
      address: data.address,
      email: data.email,
      contact_number: data.contact_number,
    })
      .then(() => {
        dispatch(fetchUsers());
        dispatch({ type: strings.ACTION_API_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: strings.ACTION_UPDATE_USER_REJECTED, payload: err });
      });
  };
}

export function resetState() {
  return {
    type: strings.ACTION_RESET_MESSAGE,
  };
}
