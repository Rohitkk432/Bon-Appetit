import {React} from 'react';
import './login.css';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className='login'>
            <Link to='/home' style={{ textDecoration: 'none' }}>
                <div className="loginbtn">LOGIN</div>
            </Link>        
        </div>
    )
}

export default Login;
