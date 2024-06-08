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
        <h2>Basic Information</h2>
        <input className="m-2" value={first} onChange={setFirstProp} type="text" placeholder="First name"></input>
        <input className="m-2" value={last} onChange={setLastProp} type="text" placeholder="Last name"></input>
        <input className="m-2" value={number} onChange={setNumberProp} type="text" placeholder="Phone number"></input>
        <input className="m-2" value={email} onChange={setEmailProp} type="text" placeholder="Email" />
      </form>
    </div>
  );
}
