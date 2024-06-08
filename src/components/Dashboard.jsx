import BasicInfoForm from "./Form";
import ExperienceForm from "./ExperienceForm";
import Resume from "./Resume";


import { useState } from "react"

export default function Dashboard () {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [responsibilities, setResponsibilities] = useState('')
    const [date, setDate] = useState('');


    return (
        <div className=" w-full h-full flex justify-between">
            <div className="h-[40rem] bg-zinc-200 w-1/2 text-3xl ml-3">
                <BasicInfoForm
                    first={first}
                    last={last}
                    number={number}
                    email={email}
                    setFirstProp={(event) => setFirst(event.target.value)}
                    setLastProp={(event) => setLast(event.target.value)}
                    setNumberProp={(event) => setNumber(event.target.value)}
                    setEmailProp={(event) => setEmail(event.target.value)}
                />
                <ExperienceForm
                    company={company}
                    position={position}
                    responsibilities={responsibilities}
                    date={date}
                    setCompanyProp={(event) => setCompany(event.target.value)}
                    setPositionProp={(event) => setPosition(event.target.value)}
                    setResponsibilitiesProp={(event) => setResponsibilities(event.target.value)}
                    setDateProp={(event) => setDate(event.target.value)}

                />
            </div>


                
                
            
           
           <Resume
            first={first}
            last={last}
            number={number}
            email={email}
            company={company}
            position={position}
            responsibilities={responsibilities}
            date={date}
           
           />

        </div>
    )
}