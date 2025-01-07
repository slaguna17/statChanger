import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import './Main.css';
import '../App.css';

// const navigate = useNavigate();
const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

function Main(){
    return (
        <div className='hero-container'>
            {/* <video src='../public/videos/video1.mp4' autoPlay loop muted/> */}
            <h1>YOUR TEAM AWAITS YOU</h1>
            <p>WHAT ARE YOU WAITING FOR?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={() => openInNewTab('https://www.youtube.com/watch?v=cLAzzYz92r4&t=2s')}>
                    WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>
            </div>


        </div>
    )
}

export default Main;