import {React,useState,useEffect} from 'react';
import './customizationbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {useSelector} from "react-redux";

function customprice(customTable,custom1id,custom2id){
    const customPrices=[0,0];
    custom1id=parseInt(custom1id);
    custom2id=parseInt(custom2id);
    customTable.filter((_data)=>{
        if(_data.id===custom1id){
            customPrices[0]=_data.price;
            return 0;
        }
        else if(_data.id===custom2id){
            customPrices[1]=_data.price
            return 0;
        }
        else{
            return 0;
        }
    })
    return customPrices;
}

function Customizationbox(params) {

    const user= useSelector(state=>state.currentuser)
    const customizationTable = useSelector(state=>state.customization);
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
            
            <div className="customwindow" onChange={(e)=>{(e.target.checked)?setCustomization1(e.target.value):console.log("ok");}}>
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

            <div className="customwindow" onChange={(e)=>{(e.target.checked)?setCustomization2(e.target.value):setCustomization2(67);}}>
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
                let custom1id=customization1;

                if (parseInt(customization1)===67){
                    console.log("no custom");
                    setCustomization1(custom1[0].id);
                    custom1id=custom1[0].id;
                }

                let [custom1price,custom2price]=customprice(customizationTable,custom1id,customization2)
                

                fetch('http://localhost:5000/orders',{
                    method:"POST",
                    headers:{"Content-Type": "application/json"},
                    body: JSON.stringify({"userid":`${user.id}`,"dishid":`${dishid}`,"customizationId1":`${custom1id}`,"customizationId2":`${customization2}`,"baseprice":`${dishbaseprice}`,"finalprice":`${realbaseprice+custom1price+custom2price}`,"status":"pending"})
                })
                .then((res)=>res.json())
                .then((res)=>{
                    return res;
                })
                .catch((err)=>console.log(err));

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