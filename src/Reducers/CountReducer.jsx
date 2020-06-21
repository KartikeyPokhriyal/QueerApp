import {COUNT} from "../Actions/ActionTypes";

export default function CountItem(state = {count: 0 }, action) {
    switch(action.type) {
        case COUNT :
            return Object.assign({}, state,
                {
                    count: state.count + 1,
                });

        default : return state;
    }

}
