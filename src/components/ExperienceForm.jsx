/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ExperienceForm({
  company,
  setCompanyProp,
  position,
  setPositionProp,
  responsibilities,
  setResponsibilitiesProp,
  date,
  setDateProp,
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
              value={company}
              onChange={setCompanyProp}
              type="text"
              name="company"
              id=""
              className="m-2 border rounded"
              placeholder="Company"
            />
            <input
              value={position}
              onChange={setPositionProp}
              type="text"
              name="position"
              id=""
              className="m-2 border rounded"
              placeholder="Job title"
            />
            <input
              value={responsibilities}
              onChange={setResponsibilitiesProp}
              type="text"
              name="responsibilities"
              id=""
              className="m-2 border rounded"
              placeholder="Job Description"
            />
            <input
              value={date}
              type="text"
              onChange={setDateProp}
              name="date"
              id=""
              className="m-2 border rounded"
              placeholder="Date"
            />
          </form>
        </div>
      )}
    </>
  );
}
