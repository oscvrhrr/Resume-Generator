/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function BasicInfoForm({ basicInputs, setBasicInputsProps }) {
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
        <div className="rounded-lg bg-white my-4 flex items-center justify-between">
          <h1 className="p-4 text-left font-bold bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent">
            Basic Information
          </h1>
          <FontAwesomeIcon
            className="mr-8"
            onClick={handleOpen}
            icon={faArrowDown}
          />
        </div>
      ) : (
        <form className="bg-white rounded-lg my-4  px-2">
          <div className="flex items-center justify-between">
            <h2
              onClick={handleClose}
              className="py-4 px-2 text-left font-bold bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent"
            >
              Basic Information
            </h2>
            <FontAwesomeIcon
              className="mr-6"
              onClick={handleClose}
              icon={faArrowUp}
            />
          </div>
          <input
            type="text"
            name="firstname"
            value={basicInputs.firstname || ""}
            onChange={setBasicInputsProps}
            placeholder="First name"
            className="border rounded w-full mb-4"
          ></input>
          <input
            type="text"
            name="lastname"
            value={basicInputs.lastname || ""}
            onChange={setBasicInputsProps}
            placeholder="Last name"
            className="border rounded w-full mb-4"
          ></input>
          <input
            type="text"
            name="phonenumber"
            value={basicInputs.phonenumber || ""}
            onChange={setBasicInputsProps}
            placeholder="Phone number"
            className="border rounded w-full mb-4"
          ></input>
          <input
            type="text"
            name="email"
            value={basicInputs.email || ""}
            onChange={setBasicInputsProps}
            placeholder="Email"
            className="border rounded w-full mb-4"
          />
          
        </form>
      )}
    </>
  );
}
