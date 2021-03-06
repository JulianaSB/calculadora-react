import React from 'react';
import './style.css';
import Display from '../Display/index';
import Botao from '../Botao/index';
import calculaExpressao from './utils';

class Caixinha extends React.Component{
    state = {
        valorDoDisplay: '',
    };

    atualizaODisplay = (valorDoBotao) =>{
        if(valorDoBotao === '='){
            const exp = calculaExpressao(this.state.valorDoDisplay);
            this.setState({
                valorDoDisplay: exp,
            })
        }else if(valorDoBotao === 'Limpar'){
            const exp = calculaExpressao(this.state.valorDoDisplay);
            this.setState({
                valorDoDisplay: '',
            })
        }else{
            this.setState({
                valorDoDisplay: this.state.valorDoDisplay + valorDoBotao,
            })
        }
    }

    render(){
        const meusBotoes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "=","Limpar"]
        return (<div className="caixinha">
            <Display value={this.state.valorDoDisplay}/>
            {
                meusBotoes.map(botao => <Botao value={botao} atualizaState={this.atualizaODisplay}/>)
            }
        </div>)
    }
}
export default Caixinha;