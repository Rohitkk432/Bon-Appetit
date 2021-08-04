import {React} from 'react';
import './customizationbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

function Customizationbox(params) {
    const [customModal,setCustomModal]=params.modal;
    const restname=params.rest[0]
    const description=params.rest[1]
    const custom1=params.custom1;
    const custom2=params.custom2;
    const customname=params.customname;
    return (
        <div className='customizationbox'>
            <div 
            onClick={()=>{
                setCustomModal(!customModal);
            }}
            className="closewindowicon">
                <FontAwesomeIcon className='close-icon'icon={faTimes} aria-hidden="true" />
            </div>
            <div className="dishdescrip">
                <div className="restnamecustom">{restname}</div>
                <div className={(description!=="")?"description":"hidden"}>{description}</div>
            </div>
            <div className={(customname[0]?.name!=="NONE")?"customname":"hidden"}>{customname[0]?.name}</div>
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
            <div className={(customname[1]?.name!=="NONE")?"customname":"hidden"}>{customname[1]?.name}</div>
            {
                custom2.map((__data,idx)=>{
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