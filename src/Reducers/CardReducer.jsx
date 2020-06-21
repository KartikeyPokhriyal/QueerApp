import {ELE} from "../Actions/ActionTypes";
import FactCard from "../FactCard";
import React from "react";
import stone from '../stoner.svg'
import rightImg from '../css/correct.gif'
import wrongImg from '../css/wrong.gif'

export default function DisplayItem(state = {comp:null}, action) {
    switch(action.type) {
        case ELE :
            return Object.assign({}, state,
                {
                    comp: action.comp,
                });

        default : return state;
    }

}
