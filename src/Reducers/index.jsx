import {combineReducers} from 'redux';
import addItem from './TodoItemReducer'
import countItem from './CountReducer'
import displayItem from './CardReducer'
import scoreItem from './ScoreReducer'

const reducers = combineReducers({
    addItem, countItem, displayItem,scoreItem,
});

export default reducers;

