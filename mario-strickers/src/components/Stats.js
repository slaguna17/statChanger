import React, {useEffect, useState, useRef } from 'react'
import {Link} from 'react-router-dom'
import Outfit from './Outfit';
import ProgressBar from './ProgressBar'

function Stats(props){
    const strength = props.strength
    const speed = props.speed
    const shooting = props.shooting
    const passing = props.passing
    const technique = props.technique
    
    return(
        <div>
            <li className='changer_items'>
                <Link className='changer_item_link' to={props.path}>
                    <figure className='changer_item_pic-wrap' data-category={props.label}>
                        <img src={props.src} alt='Character Image' className='changer_item_img'></img>
                    </figure>
                    <div className='changer_item_info'>
                        <h5 className='changer_item_text'>{props.text}</h5>
                    </div>
                </Link>
                <div className='changer-points'>
                    <h4 className='standard-attributes'>Standard Attributes</h4>
                    <h4>Strength</h4>
                    <ProgressBar
                        completed= {strength*4}
                    />
                    <h4>Speed</h4>
                    <ProgressBar
                        completed={speed*4}
                    />
                    <h4>Shooting</h4>
                    <ProgressBar
                        completed={shooting*4}
                    />
                    <h4>Passing</h4>
                    <ProgressBar
                        completed={passing*4}
                    />
                    <h4>Technique</h4>                    
                    <ProgressBar
                        completed={technique*4}
                    />
                </div>
                       
                <div className='outfit'>
                    <div className='upper'>
                        <div className='helmet'>
                            <Outfit
                                style = "helmet"
                                strength = {strength}
                                speed = {speed}
                                shooting = {shooting}
                                passing = {passing}
                                technique = {technique}
                            />
                            <p className='element-title'>Helmet</p>
                        </div>

                        <div className='arms'>
                            <Outfit
                                style = "arms"
                                strength = {strength}
                                speed = {speed}
                                shooting = {shooting}
                                passing = {passing}
                                technique = {technique}
                            />
                            <p className='element-title'>Arms</p>
                        </div>
                    </div>

                    <div className='lower'>
                        <div className='body'>
                            <Outfit
                                style = "body"
                                strength = {strength}
                                speed = {speed}
                                shooting = {shooting}
                                passing = {passing}
                                technique = {technique}
                            />
                            <p className='element-title'>Body</p>
                        </div>

                        <div className='legs'>
                            <Outfit
                                style = "legs"
                                strength = {strength}
                                speed = {speed}
                                shooting = {shooting}
                                passing = {passing}
                                technique = {technique}
                            />
                            <p className='element-title'>Legs</p>
                        </div>
                    </div>
                </div>
            </li>

            
        </div>

    )
}

export default Stats