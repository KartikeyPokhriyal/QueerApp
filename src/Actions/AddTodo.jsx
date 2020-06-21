import {DISPLAY} from './ActionTypes'

export  function display(displayit)
{
    return{
        type:DISPLAY, displayit,
    };
}

