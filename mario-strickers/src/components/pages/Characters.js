import React from 'react';
import '../../App.js';
import Chars from '../Chars.js';
import Footer from '../Footer.js';
import Navbar from '../Navbar.js';

function Characters(){
    return(
        <>
            <Navbar />
            <Chars/>
            <Footer />
        </>
    )
}

export default Characters;