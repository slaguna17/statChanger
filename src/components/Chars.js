import React from 'react';
import Character from './Character';
import './Chars.css';

function Chars(){
    return(
        <div className='page'>
            <h1 className='charTitle'>CHARACTERS</h1>
            <h3>YOUR FAVORITE CHARACTER IS HERE</h3>
{/* ***************************************HARD CODE DATA************************************************************ */}
                {/* Mario */}
                <div className='row'>
                    <div className='wrapper'>
                        <Character
                            src="images/mario2.png"
                            text="Mario"
                            label="Balanced"
                            path='/characters'
                            description='Mario is a well balanced character! Our favorite plumber is ready to rumble and score some goals!'
                            rating="3"
                            strength="11"
                            speed = "12"
                            shooting = "14"
                            passing = "10"
                            technique = "16"
                        />
                    </div>
                </div>

                {/* Luigi */}
                <div className='row'>
                    <div className='wrapper'>
                        <Character
                            src="images/luigi2.png"
                            text="Luigi"
                            label="Balanced"
                            path='/characters'
                            description='Luigi is a well balanced character! Our favorite plumber is ready to rumble and score some goals!'
                            rating="3.5"
                            strength="11"
                            speed = "11"
                            shooting = "10"
                            passing = "14"
                            technique = "17"
                        />
                    </div>
                </div>
                {/* BOWSER */}
                <div className='row'>
                    <div className='wrapper'>
                        <Character
                            src="images/bowser2.png"
                            text="Bowser"
                            label="Strong"
                            path='/characters'
                            description='Mario is a well balanced character! Our favorite plumber is ready to rumble and score some goals!'
                            rating="5"
                            strength="17"
                            speed = "9"
                            shooting = "17"
                            passing = "11"
                            technique = "9"
                        />
                    </div>
                </div>
                {/* Yoshi */}
                <div className='row'>
                    <div className='wrapper'>
                        <Character
                            src="images/yoshi2.png"
                            text="Mario"
                            label="Shooting"
                            path='/characters'
                            description='Yoshi is a well balanced character! Our favorite plumber is ready to rumble and score some goals!'
                            rating="4"
                            strength="10"
                            speed = "10"
                            shooting = "17"
                            passing = "17"
                            technique = "9"
                        />
                    </div>
                </div>
                {/* DK */}
                <div className='row'>
                    <div className='wrapper'>
                        <Character
                            src="images/dk2.png"
                            text="Donkey Kong"
                            label="Strong"
                            path='/characters'
                            description='Dk is a well balanced character! Our favorite plumber is ready to rumble and score some goals!'
                            rating="3"
                            strength="16"
                            speed = "9"
                            shooting = "13"
                            passing = "16"
                            technique = "9"
                        />
                    </div>
                </div>

                {/* Peach */}
                <div className='row'>
                    <div className='wrapper'>
                        <Character
                            src="images/peach2.png"
                            text="Peach"
                            label="Technical"
                            path='/characters'
                            description='Peach is a well balanced character! Our favorite plumber is ready to rumble and score some goals!'
                            rating="4.5"
                            strength="9"
                            speed = "17"
                            shooting = "9"
                            passing = "13"
                            technique = "15"
                        />
                    </div>
                </div>
        </div>
    )
}

export default Chars