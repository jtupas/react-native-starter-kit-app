import strings from '../resources/strings';

export function openDrawer() {
    return {
        type: strings.open_drawer
    }
}

export function closeDrawer() {
    return {
        type: strings.close_drawer
    }
}