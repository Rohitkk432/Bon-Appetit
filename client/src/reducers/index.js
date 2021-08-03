import {restReducer} from './restget';
import {restinmenuReducer} from './restinmenu';
import {activecatReducer} from './activecat';
import { dishesReducer } from './dishesget';
import {customcatReducer} from './customcatget';
import {customizationReducer} from './customizationget';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    rests : restReducer,
    dishes : dishesReducer,
    restId : restinmenuReducer,
    activeCategory : activecatReducer,
    customcat: customcatReducer,
    customization:customizationReducer
})

export default allReducers;