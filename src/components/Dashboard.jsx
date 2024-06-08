import Form from "./Form"
import Resume from "./Resume";

import { useState } from "react"

export default function Dashboard () {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')


    return (
        <div className=" w-full h-full flex justify-between">
           <Form
                first={first}
                last={last}
                number={number}
                email={email}
                setFirstProp={(event) => setFirst(event.target.value)}
                setLastProp={(event) => setLast(event.target.value)}
                setNumberProp={(event) => setNumber(event.target.value)}
                setEmailProp={(event) => setEmail(event.target.value)}

            
           />
           
           <Resume
            first={first}
            last={last}
            number={number}
            email={email}
           
           />

        </div>
    )
}