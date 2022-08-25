import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { Botao } from "./styles";

export default function Button({Value, ClassName, click}){



    

    return(
        <Botao 
        className={ClassName}
        onClick={()=>click(Value)}
        >
            {Value}

        </Botao>
    )
}