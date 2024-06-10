/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

export default function EducationalForm({
  school,
  degree,
  enrolled,
  graduated,
  setSchoolProp,
  setDegreeProp,
  setEnrolledProp,
  setGraduatedProp,
}) {
  const [isOpen, setIsOpen] = useState(false);


  const handleOpen = () => {
    !isOpen? setIsOpen(true): null;
  }

  const handleClose = () => {
    isOpen? setIsOpen(false): null;
  }


  return (
    <>
      {
        !isOpen?
        <div className="rounded-lg bg-white my-4 flex items-center justify-between">
          <h1 className="p-4 text-left font-bold bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent" >Education</h1>
          <FontAwesomeIcon className="mr-8" onClick={handleOpen} icon={faArrowDown} />
        </div>
        :
        <div>
          <form action="" className="flex flex-col bg-white my-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h2 onClick={handleClose} className="m-4 text-left font-bold bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent">Education</h2>
              <FontAwesomeIcon className="mr-8" onClick={handleClose} icon={faArrowUp} />
            </div>
            <input
              value={school}
              onChange={setSchoolProp}
              type="text"
              name="school"
              id=""
              className="m-2 border rounded"
              placeholder="Institution"
            />
            <input
              value={degree}
              onChange={setDegreeProp}
              type="text"
              name="degree"
              id=""
              className="m-2 border rounded"
              placeholder="Major"
            />
            <input
              value={enrolled}
              onChange={setEnrolledProp}
              type="text"
              name=" enrolled"
              className="m-2 border rounded"
              placeholder="Date Enrolled"
            />
            <input
              value={graduated}
              onChange={setGraduatedProp}
              type="text"
              name="graduated"
              className="m-2 border rounded"
              placeholder="Graduation"
            />
          </form>
        </div>
      }
    </>
  );
}
