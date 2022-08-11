import styled from "styled-components";

export const ButtonsDisplay = styled.div`
display: grid;
grid-template-columns: repeat(4, 25%);
`

export const Botao = styled.button`
font-size: 1.4rem;
background-color: #f0f0f0;
padding: 6px;
margin: 2px;
border-radius: 2px;
outline: none;
border: none;
    &:hover{
        background-color: #fff;
}
`