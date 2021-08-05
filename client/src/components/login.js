import {React} from 'react';
import './login.css';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className='login'>
            <div className="loginbox">
                <div className="appname">Bon-Appetit</div>
                <div className="appintro">
                    <div className="line1">Food delivery website</div>
                    <div className="line2">made by Rohit Kodam</div>
                </div>
                <input type="text" placeholder="Username" className="inputbox"/>
                <input type="Password" placeholder="Password" className="inputbox"/>
                <Link to='/home' style={{ textDecoration: 'none' }}>
                    <div className="loginbtn">LOGIN</div>
                </Link>      
            </div>      
        </div>
    )
}

export default Login;
