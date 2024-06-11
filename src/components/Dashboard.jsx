import BasicInfoForm from "./BasicInfoForm";
import ExperienceForm from "./ExperienceForm";
import EducationalForm from "./EducationalForm";
import Resume from "./Resume";

import { useState } from "react";

export default function Dashboard() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [date, setDate] = useState("");
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [enrolled, setEnrolled] = useState("");
  const [graduated, setGraduated] = useState("");

  return (
    <body className=" w-full h-[100vh] flex justify-around">
      <div className="bg-indigo-200 w-2/5 text-3xl ml-3 overflow h-[40rem] overflow-auto rounded py-6 px-4 ">
        <h1 className="text-center py-4 font-bold text-5xl bg-gradient-to-r from-rose-100 to-teal-100 bg-clip-text text-transparent">
          CV Generator
        </h1>
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
          setResponsibilitiesProp={(event) =>
            setResponsibilities(event.target.value)
          }
          setDateProp={(event) => setDate(event.target.value)}
        />

        <EducationalForm
          school={school}
          degree={degree}
          enrolled={enrolled}
          graduated={graduated}
          setSchoolProp={(event) => setSchool(event.target.value)}
          setDegreeProp={(event) => setDegree(event.target.value)}
          setEnrolledProp={(event) => setEnrolled(event.target.value)}
          setGraduatedProp={(event) => setGraduated(event.target.value)}
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
        school={school}
        degree={degree}
        enrolled={enrolled}
        graduated={graduated}
      />
    </body>
  );
}
