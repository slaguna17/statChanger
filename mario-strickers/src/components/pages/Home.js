import React from 'react';
import '../../App.js';
import Cards from '../Cards.js';
import Footer from '../Footer.js';
import Main from '../Main.js';
import Navbar from '../Navbar.js';

function Home(){
    return(
        <>
           <Navbar />
            <Main/>
            <Cards/>
            <Footer />
        </>
    )
}

export default Home;