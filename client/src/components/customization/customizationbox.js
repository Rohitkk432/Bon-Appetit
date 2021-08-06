import {React,useState} from 'react';
import './customizationbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Customizationbox(params) {
    const [customModal,setCustomModal]=params.modal;
    const restname=params.rest[0]
    const description=params.rest[1]
    const custom1=params.custom1;
    const custom2=params.custom2;

//===================================
    const dishid=params.dishid;
    const dishname=params.dishname;
//===================================

    const customname=params.customname;
    const [customization1,setCustomization1]=useState(67);
    const [customization2,setCustomization2]=useState(67);
    return (
        <div className='customizationbox'>
            <div className="custom-box">
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
            <div className="customwindow" onChange={(e)=>{(e.target.checked)?setCustomization1(e.target.value):console.log("ok");
            console.log(customization1);}}>
            {
                custom1.map((__data,idx)=>{
                    return(
                    <div key={idx} className={(customname[0]?.name!=="NONE")?"custombox":"hidden"}>
                        <div className="customizationname">{__data.name}</div>
                        <div className="customizationprice">{__data.price}</div>
                        <input className="customSelect" type="radio" value={__data.id} name="customization1" id={idx}/>
                    </div>
                )})
            }
            </div>
            <div className={(customname[1]?.name!=="NONE")?"customname":"hidden"}>{customname[1]?.name}</div>
            <div className="customwindow" onChange={(e)=>{(e.target.checked)?setCustomization2(e.target.value):setCustomization2(67);
            console.log(customization2);}}>
            {
                custom2.map((__data,idx)=>{
                    return(
                    <div key={idx} className={(customname[1]?.name!=="NONE")?"custombox":"hidden"}>
                        <div className="customizationname">{__data.name}</div>
                        <div className="customizationprice">{__data.price}</div>
                        <input className="customSelect" type="checkbox" value={__data.id} name="customization2" id={idx}/>
                    </div>
                )})
            }
            </div>
            <div
            onClick={()=>{
                //===================================
                console.log(`dishname=${dishname},dishid=${dishid},customizationId1=${customization1},customizationId2=${customization2}`);
                //===================================
            }}
            className="addtocart-btn">
                <div className="btn-descrip">Add to Cart</div>
                <div className="cart-icon">
                    <FontAwesomeIcon icon={faShoppingCart} aria-hidden="true" />
                </div>
            </div>
            </div>
        </div>
    )
};

export default Customizationbox;