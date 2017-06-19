import strings from '../resources/strings';

export default function reducer(state={ drawerOpen: false}
    , action) {
        switch(action.type){
            case strings.open_drawer:
                return {...state, drawerOpen: true};
                break;
            case strings.close_drawer:
                return {...state, drawerOpen: false};
                break;
        }
        return state;
};