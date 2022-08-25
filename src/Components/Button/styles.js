import styled from "styled-components";

export const Botao = styled.button`
font-size: 1.4rem;
background-color: #f0f0f0;
padding: 6px;
margin: 1px;
border-radius: 2px;
outline: none;
border: none;
    &:hover{
        opacity: 0.7;
}

    &:active{
        background-color: #d1d1d1;
    }

    &.botao__duplo{
        grid-column: span 2;
    }
    &.botao__triplo{
        grid-column: span 3;
    }
    &.operador{
        background-color: #fa8231;
        color: #fff;
    }

    &.operador:active{
        background-color: #fa8231cc;
    }

`