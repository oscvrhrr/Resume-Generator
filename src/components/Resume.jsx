/* eslint-disable react/prop-types */

export default function Resume({ 
  first,
  last,
  number,
  email,
  company,
  position,
  responsibilities,
  date

 }) {
  return (
    <div className="h-[40rem] bg-zinc-200 w-1/2 text-3xl ml-3">
      <h1>Polished Resume</h1>
      <p>{first === "" ? "Mike" : first}</p>
      <p>{last === "" ? "Wazowski" : last}</p>
      <p>{number === "" ? "(415) 888 8888" : number}</p>
      <p>{email === "" ? "mikewazowski@gmail.com" : email}</p>
      <p>{company === "" ? "Mike" : first}</p>
      <p>{position === "" ? "Wazowski" : last}</p>
      <p>{responsibilities === "" ? "(415) 888 8888" : number}</p>
      <p>{date === "" ? "mikewazowski@gmail.com" : email}</p>
    </div>
  );
}
