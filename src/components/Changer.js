import React from 'react';
import Stats from './Stats';
import './Changer.css';

function Changer(){
    return(
        <div className='changer-page'>
            <h1 className='changer-title'>STATS</h1>
            <h3>USE CLOTHING TO BUILD THE BEST VERSION OF YOUR CHARACTER</h3>
                <div className='changer-row'>
                    <div className='changer-wrapper'>
                        <Stats
                            src="images/mario2.png"
                            text="Mario"
                            label="Balanced"
                            path='/characters'
                            strength={11}
                            speed = {12}
                            shooting = {14}
                            passing = {10}
                            technique = {16}
                        />
                    </div>
                </div>

        </div>
    )
}

export default Changer