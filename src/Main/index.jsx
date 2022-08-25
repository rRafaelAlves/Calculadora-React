import React from "react";
import Display from "../Components/Display";
import Botao from "../Components/Button";
import { Corpo } from "./styles";

export default function Calculator(){

    const limparDisplay = ()=>{
        console.log('limpar')
    }

    const setarOperacao = (operacao)=>{
        console.log(operacao)
    }

    const adicionarDigito = (digito)=>{
        console.log(digito)

    }


    return(
        <Corpo>
            <Display value={100} />
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
            <Botao Value={'='}></Botao>

        </Corpo>
    )
}