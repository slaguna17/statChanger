import React from 'react';
import '../../App.js';
import Login from '../Login.js';
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';

function LOGIN(){
    return(
        <>
            <Navbar/>
            <Login />
            <Footer/>
        </>
    )
}

export default LOGIN;