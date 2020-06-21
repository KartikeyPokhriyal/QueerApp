import {SCORE} from "../Actions/ActionTypes";

export default function ScoreItem(state = {score: 0 }, action) {
    switch(action.type) {
        case SCORE :
            return Object.assign({}, state,
                {
                    score: state.score + 1,
                });

        default : return state;
    }

}
