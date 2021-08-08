import {React,useState,useEffect} from 'react';
import './customizationbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Customizationbox(params) {
    
    const [customModal,setCustomModal]=params.modal;
    const custom1=params.custom1;
    const custom2=params.custom2;

//===================================
    const dishid=params.dish.id;
    const dishname=params.dish.name;
    const dishdescription=params.dish.description;
    const dishbaseprice = params.dish.baseprice;
//===================================

    const customname=params.customname;
    const [customization1,setCustomization1]=useState(67);
    const [customization2,setCustomization2]=useState(67);
    const [realbaseprice,setRealbaseprice]=useState(0);

    useEffect(() => {
        if(dishbaseprice!==custom1[0]?.price && customname[0]!=='NONE'){
            setRealbaseprice(dishbaseprice-custom1[0]?.price);
        }
        else if(dishbaseprice===custom1[0]?.price && customname[0]!=='NONE'){
            setRealbaseprice(0);
        }
        else if(customname[0]==='NONE'){
            setRealbaseprice(dishbaseprice);
        }
        else{
            return 0;
        }
    }, [dishbaseprice,custom1,customname])

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
                <div className="restnamecustom">{dishname}</div>
                <div className={(dishdescription!=="")?"description":"hidden"}>{dishdescription}</div>
            </div>
            <div className={(customname[0]?.name!=="NONE")?"customname":"hidden"}>{customname[0]?.name}</div>
            
            <div className="customwindow" onChange={(e)=>{(e.target.checked)?setCustomization1(e.target.value):console.log("ok");
            console.log(customization1);}}>
            {
                custom1.map((__data,idx)=>{
                    return(
                    <div key={idx} className={(customname[0]?.name!=="NONE")?"custombox":"hidden"}>
                        <div className="customizationname">{(idx!==0)?`${__data.name}`:`${__data.name}, default`}</div>
                        <div className="customizationprice">{__data.price}</div>
                        <input className="customSelect" type="radio" value={__data.id}
                        name="customization1" id={idx}/>
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
                        <input className="customSelect" type="checkbox" value={__data} name="customization2" id={idx}/>
                    </div>
                )})
            }
            </div>
            <div
            onClick={()=>{
                //===================================
                let custom1price=0;
                let custom2price=0;
                
                console.log(`dishid=${dishid},customizationId1=${customization1},customizationId2=${customization2},baseprice=${dishbaseprice},finalprice=${realbaseprice+custom1price+custom2price}`);
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