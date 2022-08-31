import React, {useState} from "react";
import Display from "../Components/Display";
import Botao from "../Components/Button";
import { Corpo } from "./styles";




export default function Calculator(){

    const INITIAL_VALUES ={
        displayValue: '0',
        limparDisplay: false,
        operacao: null,
        values:[0, 0],
        current: 0
        
    }

    const [state, setState] = useState({...INITIAL_VALUES})
  
    

    const limparDisplay = ()=>{
        setState({...INITIAL_VALUES})
    }

    const setarOperacao = (operacao)=>{

        if(state.current === 0){
            
            setState(prevState =>{
                return{...prevState, operacao, current:1, limparDisplay: true}
                
            })
            
        }else{
            const equals = operacao === '='
            const currentOperacao = state.operacao
            let values = [...state.values] 

            try{

                values[0] = eval(`${values[0]}  ${currentOperacao}  ${values[1]}`)

            }catch(err){
                values[0] = state.values[0]
                console.log(err)
            }
            
            values[1] = 0

            setState(oldState =>{
                return{...oldState, values:values, displayValue:values[0], operacao: equals ? null : operacao,
                current: equals ? 0 : 1, limparDisplay: !equals }
            })


        }
       

       
    }

    const adicionarDigito = (digito)=>{
      
       
       
        const limparDisplay = state.displayValue === '0' || state.limparDisplay === true
        const currentValue = limparDisplay ? '' : state.displayValue
        const displayValue = currentValue + digito
        let current = state.current
        let values = [...state.values] 

        values[current] = parseFloat(displayValue)




        if(digito){
            setState(oldState =>{
                return{...oldState, values:values, displayValue, limparDisplay:false, current}
            })
           
            
        
        }


        console.log(state)
       

    }


    return(
        <Corpo>
            <Display value={state.displayValue} />
            <Botao click={limparDisplay} ClassName={'botao__triplo'} Value={'AC'}></Botao>
            <Botao click={setarOperacao} ClassName={'operador'} Value={'/'}></Botao>
            <Botao click={adicionarDigito} Value={'7'}></Botao>
            <Botao click={adicionarDigito} Value={'8'}></Botao>
            <Botao click={adicionarDigito} Value={'9'}></Botao>
            <Botao click={setarOperacao} ClassName={'operador'} Value={'*'}></Botao>
            <Botao click={adicionarDigito} Value={'4'}></Botao>
            <Botao click={adicionarDigito} Value={'5'}></Botao>
            <Botao click={adicionarDigito} Value={'6'}></Botao>
            <Botao click={setarOperacao} ClassName={'operador'} Value={'-'}></Botao>
            <Botao click={adicionarDigito} Value={'1'}></Botao>
            <Botao click={adicionarDigito} Value={'2'}></Botao>
            <Botao click={adicionarDigito} Value={'3'}></Botao>
            <Botao click={setarOperacao} ClassName={'operador'} Value={'+'}></Botao>
            <Botao click={adicionarDigito} ClassName={'botao__duplo'} Value={'0'}></Botao>
            <Botao click={adicionarDigito} Value={'.'}></Botao>
            <Botao click={setarOperacao} Value={'='}></Botao>

        </Corpo>
    )
}