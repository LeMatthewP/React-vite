import React, { useState, useEffect } from "react";
import { Message } from "./Message";


// export default function FormularioSimple() {
//     const [nombre, setNombre] = useState();
//     const [apellido, setApellido] = useState();


//     useEffect(
//         console.log("algo")
//         , []);
//     return (
//         <div>
//             <h1>Formulario</h1>
//             <input type="text" placeholder="user" name="username" value={nombre} />
//             <br />
//             <input type="text" placeholder="email" name="email" value={apellido} />
//         </div>
//     )
// }




export default function FormularioSimple() {
    const [formState, setFormstate] = useState({
        username: 'mateo',
        email: 'mateo@gmail.com'
    })
    
    const { username, email } = formState;
    
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormstate({
            ...formState,
            [name]: value
        });
    }
    
    useEffect(() => { console.log('dato ingresado') }, [username]);





    return (
        <div class="divgroso">

            <h1>Formulario Simple</h1>
            <input class="inputgroso" type="text"
                placeholder="user"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <br />
            <input class="inputgroso" type="text"
                placeholder="email"
                name="email"
                value={email}
                onChange={onInputChange} />

            {(username === 'mate' || email == 'mateo@gmail.com' ) && <Message />}
        </div>
    )
}