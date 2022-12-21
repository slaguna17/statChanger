import React, { useState } from "react";
import Select from 'react-select'

// import './Outfit.css'
let fuerza = 0 
let velocidad = 0 
let disparo = 0
let pase = 0
let tecnica =0
let gear;

const helmet = [
    {label: 'Muscle Helmet', value: {strength: 2, speed:0, shooting:0, passing:0, technique: -2}},
    {label: 'Turbo Helmet', value: {strength: 0, speed:2, shooting:0, passing:0, technique: -2}},
    {label: 'Cannon Helmet', value: {strength: 0, speed:0, shooting:2, passing:0, technique: -2}},
    {label: 'Chain Helmet', value: {strength: 2, speed:-2, shooting:0, passing:2, technique: 0}},
    {label: 'Trick Helmet', value: {strength: 0, speed:0, shooting:0, passing:-2, technique: 2}},
    {label: 'Bushido Helmet', value: {strength:-1, speed:-1, shooting:-1, passing:4, technique: -1}}
]
const arms = [
    {label: 'Muscle Arms', value: {strength: 2, speed:0, shooting:0, passing:0, technique: -2}},
    {label: 'Turbo Arms', value: {strength: 0, speed:2, shooting:0, passing:0, technique: -2}},
    {label: 'Cannon Arms', value: {strength: 0, speed:0, shooting:2, passing:0, technique: -2}},
    {label: 'Chain Arms', value: {strength: 2, speed:-2, shooting:0, passing:2, technique: 0}},
    {label: 'Trick Arms', value: {strength: 0, speed:0, shooting:0, passing:-2, technique: 2}},
    {label: 'Bushido Arms', value: {strength:-1, speed:-1, shooting:-1, passing:4, technique: -1}}
]
const body = [
    {label: 'Muscle Body', value: {strength: 2, speed:0, shooting:0, passing:0, technique: -2}},
    {label: 'Turbo Body', value: {strength: 0, speed:2, shooting:0, passing:0, technique: -2}},
    {label: 'Cannon Body', value: {strength: 0, speed:0, shooting:2, passing:0, technique: -2}},
    {label: 'Chain Body', value: {strength: 2, speed:-2, shooting:0, passing:2, technique: 0}},
    {label: 'Trick Body', value: {strength: 0, speed:0, shooting:0, passing:-2, technique: 2}},
    {label: 'Bushido Body', value: {strength:-1, speed:-1, shooting:-1, passing:4, technique: -1}}
]
const legs = [
    {label: 'Muscle Legs', value: {strength: 2, speed:0, shooting:0, passing:0, technique: -2}},
    {label: 'Turbo Legs', value: {strength: 0, speed:2, shooting:0, passing:0, technique: -2}},
    {label: 'Cannon Legs', value: {strength: 0, speed:0, shooting:2, passing:0, technique: -2}},
    {label: 'Chain Legs', value: {strength: 2, speed:-2, shooting:0, passing:2, technique: 0}},
    {label: 'Trick Legs', value: {strength: 0, speed:0, shooting:0, passing:-2, technique: 2}},
    {label: 'Bushido Legs', value: {strength:-1, speed:-1, shooting:-1, passing:4, technique: -1}}
]

let value ;
let f;

function changeStats (st, sp, sh, pa, te) {
    fuerza = st + fuerza
    velocidad = sp + velocidad
    disparo = sh + disparo
    pase = pa + pase
    tecnica = te + tecnica
}

function change2 (event) {
    console.log(event.label);
    changeStats(event.value.strength, event.value.speed, event.value.shooting, event.value.passing, event.value.technique)
    const result = {strength: fuerza, speed: velocidad, shooting: disparo, passing: pase, technique:tecnica}
    value = result
}



const Outfit = (props) => {
    fuerza = props.strength;
    velocidad = props.speed
    disparo = props.shooting
    pase = props.passing
    tecnica = props.technique

    if(props.style == "helmet"){
        console.log("helmet modifier");
        gear = helmet
    } else if(props.style == "arms"){
        console.log("arms modifier");
        gear = arms
    } else if(props.style == "body"){
        console.log("body modifier");
        gear = body
    } else if(props.style == "legs"){
        console.log("legs modifier");
        gear = legs
    } 
    return (
        <div className="select">
            <Select 
                options={gear}
                onChange = {change2}
                placeholder = "No style selected"
            />
        </div>
    )
}
export default Outfit;