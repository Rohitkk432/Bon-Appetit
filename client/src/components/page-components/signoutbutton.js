import React from "react";
import { GoogleLogout, useGoogleLogout } from 'react-google-login';
import {useHistory} from 'react-router-dom';
import { getcurrentuser } from '../../actions/index'
import {useDispatch} from 'react-redux';

function SignoutButton() {
    let history = useHistory();
    const dispatch=useDispatch();

    const client_id = "361947063761-8lcbqdsd52etg552au27omjl8052u55m.apps.googleusercontent.com";

    const onLogoutSuccess = () =>{
        // console.log('logged out');
        dispatch(getcurrentuser([]));
        history.push('/')
    }

    const {signOut} = useGoogleLogout({
        client_id , onLogoutSuccess
    });
    
    return(
        <>
            <GoogleLogout 
            clientId={client_id}
            buttonText="Logout"
            onLogoutSuccess={signOut}
            >
            </GoogleLogout>
        </>
    )
}
export default SignoutButton ;