import strings from '../config/constants';

export function setFirstName(text) {
  return {
    type: strings.ACTION_SET_FIRST_NAME,
    payload: text,
  };
}

export function setLastName(text) {
  return {
    type: strings.ACTION_SET_LAST_NAME,
    payload: text,
  };
}

export function setAddress(text) {
  return {
    type: strings.ACTION_SET_ADDRESS,
    payload: text,
  };
}

export function setEmail(text) {
  return {
    type: strings.ACTION_SET_EMAIL,
    payload: text,
  };
}

export function setContactNumber(text) {
  return {
    type: strings.ACTION_SET_CONTACT_NUMBER,
    payload: text,
  };
}

export function setAll(data) {
  return {
    type: strings.ACTION_SET_ALL,
    payload: data,
  };
}

export function setNew() {
  return {
    type: strings.ACTION_RESET,
  };
}
