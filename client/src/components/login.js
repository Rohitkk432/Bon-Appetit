import {React,useEffect} from 'react';
import './login.css';
import {useHistory} from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import {useDispatch,useSelector} from 'react-redux';
import {getallusers} from '../reducers/allusersget';
import { getcurrentuser } from '../actions/index'

function Login() {
    let history = useHistory();
    const dispatch = useDispatch();
    const allusers = useSelector(state=>state.users);

    useEffect(() => {
        dispatch(getallusers());
    },[dispatch]);

    const onSuccess = (res)=>{
        const loggeremail = res.profileObj.email;
        const loggername = res.profileObj.name;
        loginFunc(loggeremail,loggername);
        history.push('/home');
    }

    const onFailure =(res)=>{
        console.log(res);
    }

    function loginFunc(loggeremail,loggername){
        allusers.filter((_data)=>{
            if(_data.email===loggeremail){
                dispatch(getcurrentuser(_data));
                return 0;
            }
            else{
                fetch('http://localhost:5000/users',{
                    method:"POST",
                    headers:{"Content-Type": "application/json"},
                    body: JSON.stringify({"email":`${loggeremail}`,"name":`${loggername}`})
                })
                .then((res)=>res.json())
                .then((res)=>{
                dispatch(getcurrentuser(res));
                dispatch(getallusers());
                })
                .catch((err)=>console.log(err));
                return 0;
            }
        })
    }

    return (
        <div className='login'>
            <div className="loginbox">
                <div className="appname">Bon-Appetit</div>
                <div className="appintro">
                    <div className="line1">Food delivery website</div>
                    <div className="line2">made by Rohit Kodam</div>
                </div>
                <GoogleLogin
                    clientId="361947063761-8lcbqdsd52etg552au27omjl8052u55m.apps.googleusercontent.com"
                    buttonText="Login using BITS mail"
                    prompt="select_account"
                    uxMode="popup"
                    redirectUri="http://localhost:3000/home"
                    isSignedIn={true}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                />   
            </div>      
        </div>
    )
}

export default Login;
