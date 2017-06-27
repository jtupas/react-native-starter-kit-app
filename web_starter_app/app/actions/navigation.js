import strings from '../config/constants';

export function setLoginPage() {
  return {
    type: strings.ACTION_SET_PARENT_PAGE,
    payload: 'Login',
  };
}

export function setDrawerPage() {
  return {
    type: strings.ACTION_SET_PARENT_PAGE,
    payload: 'Router',
  };
}

export function setSpinner() {
  return {
    type: strings.ACTION_SET_PARENT_PAGE,
    payload: 'Spinner',
  };
}
