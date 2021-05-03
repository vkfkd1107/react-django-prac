import React, {useState, useEffect, Fragment} from 'react';
import {MovieData} from './api';
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

    return (
        <div>
            <button onClick={handerButton}>button</button>
        </div>
    )
}

export default Button;