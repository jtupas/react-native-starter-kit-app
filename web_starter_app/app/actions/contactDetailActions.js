import strings from '../config/constants';

export function setFirstName(text) {
  return {
    type: strings.action_setFirstName,
    payload: text,
  };
}

export function setLastName(text) {
  return {
    type: strings.action_setLastName,
    payload: text,
  };
}

export function setAddress(text) {
  return {
    type: strings.action_setAddress,
    payload: text,
  };
}

export function setEmail(text) {
  return {
    type: strings.action_setEmail,
    payload: text,
  };
}

export function setContactNumber(text) {
  return {
    type: strings.action_setContactNumber,
    payload: text,
  };
}

export function setAll(data) {
  return {
    type: strings.action_setAll,
    payload: data,
  };
}

export function setNew() {
  return {
    type: strings.action_reset,
  };
}
