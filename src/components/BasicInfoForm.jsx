/* eslint-disable react/prop-types */

export default function BasicInfoForm({
  first,
  last,
  number,
  email,
  setFirstProp,
  setLastProp,
  setNumberProp,
  setEmailProp,
  children
}) {
  return (
    <div className="">
      <h1>Resume Generator</h1>
      <div className="flex flex-col ">
        <input className="m-2" value={first} onChange={setFirstProp} type="text" placeholder="first name"></input>
        <input className="m-2" value={last} onChange={setLastProp} type="text" placeholder="last name"></input>
        <input className="m-2" value={number} onChange={setNumberProp} type="text"></input>
        <input className="m-2" value={email} onChange={setEmailProp} type="text" />
        {children}
      </div>
    </div>
  );
}
