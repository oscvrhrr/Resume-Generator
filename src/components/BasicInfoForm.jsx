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
}) {
  return (
    <div className="">
      <form className="flex flex-col">
        <h2 className="m-4 text-left font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Basic Information</h2>
        <input className="m-2 border rounded" value={first} onChange={setFirstProp} type="text" placeholder="First name"></input>
        <input className="m-2 border rounded" value={last} onChange={setLastProp} type="text" placeholder="Last name"></input>
        <input className="m-2 border rounded" value={number} onChange={setNumberProp} type="text" placeholder="Phone number"></input>
        <input className="m-2 border rounded" value={email} onChange={setEmailProp} type="text" placeholder="Email" />
      </form>
    </div>
  );
}
