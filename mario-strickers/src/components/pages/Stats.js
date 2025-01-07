import React from 'react';
import '../../App.js';
import Footer from '../Footer.js';
import Navbar from '../Navbar.js';
import Changer from '../Changer.js'

function Stats(){
    return(
        <>
            <Navbar />
            <Changer/>
            <Footer />
        </>
    )
}

export default Stats;