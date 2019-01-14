import React from 'react';
import './style.css';

const Botao = ({value, atualizaState}) =>{
    const clicaBotao = () =>{
        atualizaState(value);
    }

    

    return (<button className="btn btn-primary" onClick={clicaBotao}>
        {value}
    </button>)
}

export default Botao;