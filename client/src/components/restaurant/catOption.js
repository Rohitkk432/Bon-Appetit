import {React} from 'react';
import './catOption.css';
import {useSelector,useDispatch} from 'react-redux';
import {getactivecat} from '../../actions/index';

function CatOption(params) {
    const activecat=useSelector(state=>state.activeCategory);
    const category = params.params;
    const dispatch = useDispatch();
    return (
        <div
        onClick={()=>{
            dispatch(getactivecat(category));
        }} className={(activecat!==category)?"catOption":"catOption active"}>
            {category}
        </div>
    )
}

export default CatOption;

