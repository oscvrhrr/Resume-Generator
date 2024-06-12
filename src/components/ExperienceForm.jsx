/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ExperienceForm({
  experienceInputs,
  setExperienceInputsProps,
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
          <form action="" className="flex flex-col bg-white rounded-lg">
            <div className="flex items-center justify-between">
              <h2
                onClick={handleClose}
                className="m-4 text-left font-bold bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent"
              >
                Experience Section
              </h2>
              <FontAwesomeIcon
                className="mr-8"
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
              className="m-2 border rounded"
            />
            <input
              type="text"
              name="position"
              value={experienceInputs.position || ""}
              onChange={setExperienceInputsProps}
              placeholder="Job title"
              className="m-2 border rounded"
            />
            <input
              type="text"
              name="responsibilities"
              value={experienceInputs.responsibilities || ""}
              onChange={setExperienceInputsProps}
              placeholder="Job Description"
              className="m-2 border rounded"
            />
            <input
              type="text"
              name="date"
              value={experienceInputs.date || ""}
              onChange={setExperienceInputsProps}
              placeholder="Date"
              className="m-2 border rounded"
            />
          </form>
        </div>
      )}
    </>
  );
}
