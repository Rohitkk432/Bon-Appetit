import {React} from 'react';
import './customizationbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Customizationbox(params) {
    const custom1=params.custom1;
    // const custom2=params.custom2;
    const customname=params.customname;
    return (
        <div className='customizationbox'>
            <div className="customname">{customname[0]?.name}</div>
            {
                custom1.map((__data,idx)=>{
                    return(
                    <div key={idx} className='custombox'>
                        <div className="customizationname">{__data.name}</div>
                        <div className="customizationprice">{__data.price}</div>
                        <FontAwesomeIcon className='plus-icon'icon={faPlus} aria-hidden="true" />
                    </div>
                )})
            }
        </div>
    )
};

export default Customizationbox;