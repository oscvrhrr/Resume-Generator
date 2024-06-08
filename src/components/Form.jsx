/* eslint-disable react/prop-types */

export default function Form({
  first,
  last,
  number,
  email,
  setFirstProp,
  setLastProp,
  setNumberProp,
  setEmailProp
}) {
  return (
    <div className="h-[40rem] bg-zinc-200 w-1/2 text-3xl ml-3">
      <h1>Resume Generator</h1>
      <div className="flex flex-col ">
        <input className="m-2" value={first} onChange={setFirstProp} type="text"></input>
        <input className="m-2" value={last} onChange={setLastProp} type="text"></input>
        <input className="m-2" value={number} onChange={setNumberProp} type="text"></input>
        <input className="m-2" value={number} onChange={setNumberProp} type="text"></input>
        <input className="m-2" value={email} onChange={setEmailProp} type="text" />
      </div>
    </div>
  );
}
