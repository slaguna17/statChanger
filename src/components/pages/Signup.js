import React from 'react';
import '../../App.js';
import Register from '../Register.js';
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';

function Signup(){
    return(
        <>
            <Navbar />
            <Register />
            <Footer/>
        </>
    )
}

export default Signup;