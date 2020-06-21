import {createStore} from 'redux'
import reducers from '../Reducers'

export default function configureStore() {
    return createStore(reducers);

}
