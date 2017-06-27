import strings from '../config/constants';

export function openDrawer() {
  return {
    type: strings.OPEN_DRAWER,
  };
}

export function closeDrawer() {
  return {
    type: strings.CLOSE_DRAWER,
  };
}
