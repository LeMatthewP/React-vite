import { useState } from "react";

export function Counter({value}){

    const [Cont, setCont] = useState( value );
    
    const handleAdd = (event) =>{
        console.log(event);
        setCont(Cont +1);
    }

    return(<>
    <h1>Contador</h1>
    <h1>{Cont}</h1>
    <button onClick={handleAdd}>
        +1
    </button>
    </>)
}