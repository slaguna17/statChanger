import React from 'react';
import './Register.css';    

// const navigate = useNavigate();
const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

function Register(){
    return (
        <div className='register-root'>
            <div className='register-container'>
                <h1 className='register-title'>Sign Up</h1>
                <h5>Register to have the full experience!</h5>
                <form>
                    <label>Name</label>
                    <input type = "text" placeholder='Name'></input>
                    <label>Lastname</label>
                    <input type = "text" placeholder='Lastname'></input>
                    <label>Email</label>
                    <input type = "email" placeholder='Email'></input>
                    <label>Password</label>
                    <input type = "password" placeholder='Password'></input>
                    <label>Confirm Password</label>
                    <input type = "password" placeholder='Confirm Password'></input>
                    <input type = "button" value="Submit"></input>
                </form>
                <p className='switch-login'>Already have an account? <a href='/Login'>Login here</a></p>
            </div>

        </div>
    )
}

export default Register;