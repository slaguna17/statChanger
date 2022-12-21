import React from 'react'
import {Link} from 'react-router-dom'
import ProgressBar from './ProgressBar'
import { useEffect } from "react";

function Character(props){
    const strength = props.strength
    const speed = props.speed
    const shooting = props.shooting
    const passing = props.passing
    const technique = props.technique
    const element =  document.querySelectorAll('.bar-filler');
    console.log(element);

    const stars = "images/stars/"+props.rating + "stars.png"
    console.log(stars);

    return(
        <div>
            <li className='character_items'>
                <Link className='character_item_link' to={props.path}>
                    <figure className='character_item_pic-wrap' data-category={props.label}>
                        <img src={props.src} alt='Character Image' className='character_item_img'></img>
                    </figure>
                    <div className='character_item_info'>
                        <h5 className='character_item_text'>{props.text}</h5>
                    </div>
                </Link>
                <div className='points'>
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
                       
                <div className='commentry'>
                    <p className='description'>{props.description}</p>
                    <div className='rating-section'>
                        <p className='rating-title'>Rating</p>
                        <figure className='rating'>
                            <img src={stars} alt='rating' className='stars'></img>
                        </figure>
                    </div>
                 </div>
            </li>

            
        </div>

    )
}

export default Character