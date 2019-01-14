import React from 'react';
import './style.css';

const Display = (parametro) =>{
    return (<div className="display">
        {parametro.value}
    </div>)
}

export default Display;