import {restReducer} from './restget';
import {restinmenuReducer} from './restinmenu';
import {activecatReducer} from './activecat';
import { dishesReducer } from './dishesget';
import {customcatReducer} from './customcatget';
import {customizationReducer} from './customizationget';
import {allusersReducer} from './allusersget'
import {currentuserReducer} from './currentuser';
import {orderReducer} from './ordersget';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    users : allusersReducer,
    rests : restReducer,
    dishes : dishesReducer,
    orders : orderReducer,
    restId : restinmenuReducer,
    currentuser : currentuserReducer,
    activeCategory : activecatReducer,
    customcat: customcatReducer,
    customization:customizationReducer,
})

export default allReducers;