import strings from '../config/constants';

export function setLoginPage() {
  return {
    type: strings.action_setParentPage,
    payload: 'Login',
  };
}

export function setDrawerPage() {
  return {
    type: strings.action_setParentPage,
    payload: 'Router',
  };
}

export function setSpinner() {
  return {
    type: strings.action_setParentPage,
    payload: 'Spinner',
  };
}
