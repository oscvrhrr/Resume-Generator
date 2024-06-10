/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function BasicInfoForm({
  first,
  last,
  number,
  email,
  setFirstProp,
  setLastProp,
  setNumberProp,
  setEmailProp,
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
        <div className="">
          <form className="flex flex-col bg-white rounded-lg my-4">
            <div className="flex items-center justify-between">
              <h2
                onClick={handleClose}
                className="m-4 text-left font-bold bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent"
              >
                Basic Information
              </h2>
              <FontAwesomeIcon
                className="mr-8"
                onClick={handleClose}
                icon={faArrowUp}
              />
            </div>
            <input
              className="m-2 border rounded"
              value={first}
              onChange={setFirstProp}
              type="text"
              placeholder="First name"
            ></input>
            <input
              className="m-2 border rounded"
              value={last}
              onChange={setLastProp}
              type="text"
              placeholder="Last name"
            ></input>
            <input
              className="m-2 border rounded"
              value={number}
              onChange={setNumberProp}
              type="text"
              placeholder="Phone number"
            ></input>
            <input
              className="m-2 border rounded"
              value={email}
              onChange={setEmailProp}
              type="text"
              placeholder="Email"
            />
          </form>
        </div>
      )}
    </>
  );
}
