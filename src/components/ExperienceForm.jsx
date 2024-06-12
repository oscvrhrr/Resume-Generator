/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ExperienceForm({
  experienceInputs,
  setExperienceInputsProps,
  setShown,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    !isOpen ? setIsOpen(true) : null;
  };

  const handleClose = () => {
    isOpen ? setIsOpen(false) : null;
  };


  return (
    <>
      {!isOpen ? (
        <div className="rounded-lg bg-white flex items-center justify-between">
          <h1 className="p-4 text-left font-bold bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent">
            Experience Section
          </h1>
          <FontAwesomeIcon
            className="mr-8"
            onClick={handleOpen}
            icon={faArrowDown}
          />
        </div>
      ) : (
        <div>
          <form action="" className="bg-white rounded-lg my-4  px-2">
            <div className="flex items-center justify-between">
              <h2
                onClick={handleClose}
                className="py-4 px-2 text-left font-bold bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent"
              >
                Experience Section
              </h2>
              <FontAwesomeIcon
                className="mr-6"
                onClick={handleClose}
                icon={faArrowUp}
              />
            </div>
            <input
              type="text"
              name="company"
              value={experienceInputs.company || ""}
              onChange={setExperienceInputsProps}
              placeholder="Company"
              className="border rounded w-full mb-4"
            />
            <input
              type="text"
              name="position"
              value={experienceInputs.position || ""}
              onChange={setExperienceInputsProps}
              placeholder="Job title"
              className="border rounded w-full mb-4"
            />
            <input
              type="text"
              name="responsibilities"
              value={experienceInputs.responsibilities || ""}
              onChange={setExperienceInputsProps}
              placeholder="Job Description"
              className="border rounded w-full mb-4"
            />
            <input
              type="text"
              name="date"
              value={experienceInputs.date || ""}
              onChange={setExperienceInputsProps}
              placeholder="Date"
              className="border rounded w-full mb-4"
            />
            <button onClick={setShown} className="bg-indigo-300 text-white rounded-lg p-1 mr-4 mb-4 px-4" type="submit">Save</button>
            <button onClick={(e) => e.preventDefault()} className="bg-indigo-300 text-white rounded-lg p-1 mb-4 px-4 " type="submit">+ Section</button>
          </form>
        </div>
      )}
    </>
  );
}
