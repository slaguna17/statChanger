import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards(){
    return(
        <div className='cards'>
            <h1>USE YOUR FAVORITE CHARACTERS IN AN ALL OUT BATTLE!</h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        {/* Mario */}
                        <CardItem
                            src="images/mario.webp"
                            text="Mario"
                            label="Balanced"
                            path='/characters'
                        />
                        {/* Luigi */}
                        <CardItem 
                            src="images/luigi.webp"
                            text="Luigi"
                            label="Balanced"
                            path='/services'
                        />
                    </ul>
                    <ul className='cards_items'>
                        {/* Bowser */}
                        <CardItem
                        src='images/bowser.png'
                        text="Bowser"
                        label='Strenght'
                        path='/services'
                        />
                        {/* Yoshi */}
                        <CardItem
                        src='images/yoshi.webp'
                        text='Yoshi'
                        label='Shooting'
                        path='/products'
                        />
                    </ul>
                    <ul className='cards_items'>
                        {/* DK */}
                        <CardItem
                        src='images/dk.webp'
                        text="Donkey Kong"
                        label='Strenght'
                        path='/services'
                        />
                        {/* Peach */}
                        <CardItem
                        src='images/peach.webp'
                        text='Princess Peach'
                        label='Technical'
                        path='/products'
                        />
                    </ul>
                    <ul className='cards_items'>
                        {/* Toad */}
                        <CardItem
                        src='images/toad.webp'
                        text="Toad"
                        label='Technical'
                        path='/services'
                        />
                        {/* Wario */}
                        <CardItem
                        src='images/wario.webp'
                        text='Wario'
                        label='Strenght'
                        path='/products'
                        />
                    </ul>
                    <ul className='cards_items'>
                        {/* Waluigi */}
                        <CardItem
                        src='images/waluigi.webp'
                        text="Waluigi"
                        label='Speed/Shooting'
                        path='/services'
                        />
                        {/* Rosalina */}
                        <CardItem
                        src='images/rosalina.webp'
                        text='Rosalina'
                        label='Shooting'
                        path='/products'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards