import React from 'react';
import './Login.css';    

// const navigate = useNavigate();
const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

function Login(){
    return (
        <div className='login-root'>
            <div className='login-container'>
                <h1 className='login-title'>Login</h1>
                <h5>Register to have the full experience!</h5>
                <form>
                    <label>Email</label>
                    <input type = "text" placeholder='Email'></input>
                    <label>Password</label>
                    <input type = "password" placeholder='Password'></input>

                </form>
                <p className='switch-signup'>Don't have an account? <a href='/Signup'>Sign up Here!</a></p>
            </div>

        </div>
    )
}

export default Login;