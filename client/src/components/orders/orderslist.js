import {React,useEffect,useState} from 'react';
import './orderslist.css';
import {useSelector} from 'react-redux';
import Orderbox from './orderbox';

function Orderslist() {
    const orders = useSelector(state=>state.orders);
    const user = useSelector(state=>state.currentuser);
    const [activeOrders,setActiveOrders]=useState([]);
    useEffect(()=>{
        const _orders=[];
        orders.filter((_data)=>{
            if(_data.userid === user.id && _data.status === "pending"){
                _orders.push(_data);
                return 0;
            }
            else{
                return 0;
            }
        });
        setActiveOrders(_orders);
    },[orders,user]);
    return (
        <div className="orderlist">
            {
                activeOrders.map((_data,idx)=>{
                    return <Orderbox {..._data} key={idx} />
                })
            }
        </div>
    )
}

export default Orderslist;