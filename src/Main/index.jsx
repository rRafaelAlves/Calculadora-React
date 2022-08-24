import React from "react";
import { Corpo, Botao } from "./styles";
import Display from "../Components/Display";

export default function Calculator(){
    return(
        <Corpo>
            <Display value='100'></Display>
            <Botao >AC</Botao>
            <Botao >/</Botao>
            <Botao >7</Botao>
            <Botao >8</Botao>
            <Botao >9</Botao>
            <Botao >*</Botao>
            <Botao >4</Botao>
            <Botao >5</Botao>
            <Botao >6</Botao>
            <Botao >-</Botao>
            <Botao >1</Botao>
            <Botao >2</Botao>
            <Botao >3</Botao>
            <Botao >+</Botao>
            <Botao >0</Botao>
            <Botao >.</Botao>
            <Botao >=</Botao>

        </Corpo>
    )
}