import {React,useState,useEffect} from 'react';
import './dishres.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Customizationbox from '../customization/customizationbox';
import {useSelector} from 'react-redux';

function Dishres(params) {
    const {customcategoryid1,customcategoryid2,name,description,baseprice}= params ;
    const customcat = useSelector(state => state.customcat);
    const customization = useSelector(state => state.customization);

    const [custom1,setCustom1]=useState([]);
    const [custom2,setCustom2]=useState([]);
    const [customname,setCustomname]=useState([]);
    const [customModal,setCustomModal]=useState(false);

    useEffect(()=>{
        const custom1temp=[];
        const custom2temp=[];
        const customnametemp=[];

        customization.filter((_data)=>{
            if(_data.customcategoryid===customcategoryid1){
                custom1temp.push(_data);
                return 0;
            }
            else if(_data.customcategoryid===customcategoryid2){
                custom2temp.push(_data);
                return 0;
            }
            else{
                return 0;
            }
        });

        customcat.filter((_data)=>{
            if(_data.id===customcategoryid1 && _data.id===customcategoryid2 ){
                customnametemp[0]=_data;
                customnametemp[1]=_data;
                return 0;
            }
            else if(_data.id===customcategoryid1){
                customnametemp[0]=_data;
                return 0;
            }
            else if(_data.id===customcategoryid2){
                customnametemp[1]=_data
                return 0;
            }
            else{
                return 0;
            }
        });

        setCustom1(custom1temp);
        setCustom2(custom2temp);
        setCustomname(customnametemp);
    },[customcat,customization, customcategoryid1, customcategoryid2])

    return (
        <div className='dishres'>
            <div className="dishname">{name}</div>
            <div className="dishprice">{baseprice}</div>
            <FontAwesomeIcon className='plus-icon'
            onClick={()=>{
                setCustomModal(!customModal);
            }}
            icon={faPlus} aria-hidden="true" />
            <div className={(!customModal)?"customoverlay hidden":"customoverlay"}
            onClick={()=>{
                setCustomModal(!customModal);
            }}
            >
            </div>
            <div className={(!customModal)?"hidden":""}>
                <Customizationbox modal={[customModal,setCustomModal]} rest={[name,description]} custom1={custom1} custom2={custom2} customname={customname} />
            </div>
        </div>
    )
};

export default Dishres;
