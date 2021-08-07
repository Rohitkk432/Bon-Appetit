import {restReducer} from './restget';
import {restinmenuReducer} from './restinmenu';
import {activecatReducer} from './activecat';
import { dishesReducer } from './dishesget';
import {customcatReducer} from './customcatget';
import {customizationReducer} from './customizationget';
import {allusersReducer} from './allusersget'
import {currentuserReducer} from './currentuser'

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    users : allusersReducer,
    rests : restReducer,
    dishes : dishesReducer,
    restId : restinmenuReducer,
    currentuser : currentuserReducer,
    activeCategory : activecatReducer,
    customcat: customcatReducer,
    customization:customizationReducer,
})

export default allReducers;