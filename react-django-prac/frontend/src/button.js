import React, {useState, useEffect, Fragment} from 'react';
import {MovieData, MovieParam} from './api';
import { render } from 'react-dom';

const Button = () => {

    const handerButton = async () => {
        try {
            const data = await MovieData()
            alert('success')
        }catch(err) {
            alert(err)
        }        
    }

    const handerParamButton = async () => {
        const prac='test_01'
        const prac2='test_02'
        const prac3='test_03'
        const prac4='test_04'
        try {
            const data = await MovieParam(prac, prac2, prac3, prac4)
            alert('success')
        }catch(err) {
            alert(err)
        }        
    }    

    return (
        <div>
            <button onClick={handerButton}>button</button>
            <button onClick={handerParamButton}>param_test</button>
        </div>
    )
}

export default Button;