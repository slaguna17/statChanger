import React from 'react'
import {Link} from 'react-router-dom'


function CardItem(props){
    return(
        <div>
            <li className='cards_item'>
                <Link className='cards_item_link' to={props.path}>
                    <figure className='cards_item_pic-wrap' data-category={props.label}>
                        <img src={props.src} alt='Character Image' className='cards_item_img'></img>
                    </figure>
                    <div className='cards_item_info'>
                        <h5 className='cars_item_text'>{props.text}</h5>
                    </div>
                </Link>
            </li>   
        </div>
    )
}

export default CardItem