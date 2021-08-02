import {restReducer} from './restget';
import {restinmenuReducer} from './restinmenu';
import {activecatReducer} from './activecat';
import { dishesReducer } from './dishesget';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    rests : restReducer,
    dishes : dishesReducer,
    restId : restinmenuReducer,
    activeCategory :  activecatReducer
})

export default allReducers;