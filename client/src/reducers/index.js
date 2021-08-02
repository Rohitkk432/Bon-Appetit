import {restReducer} from './restget';
import { catsReducer } from './catsget';
import {restinmenuReducer} from './restinmenu';
import {activecatReducer} from './activecat';
import {subcatsReducer} from './subcatsget';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    rests : restReducer,
    restId : restinmenuReducer,
    cats: catsReducer,
    activeCategory :  activecatReducer,
    subcats : subcatsReducer
})

export default allReducers;