import {DISPLAY} from "../Actions/ActionTypes";

export default function AddItem(state = {displayit: null }, action) {
    switch(action.type) {
        case DISPLAY :
            return Object.assign({}, state,
                {
                    displayit: action.displayit,
                });

        default : return state;
    }

}
