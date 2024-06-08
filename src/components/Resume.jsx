/* eslint-disable react/prop-types */

export default function Resume({ 
  first,
  last,
  number,
  email,
  company,
  position,
  responsibilities,
  date,
  school,
  degree,
  enrolled,
  graduated

 }) {
  return (
    <div className="h-[40rem] bg-zinc-50 w-1/2 text-3xl ml-3">
      <h1>Polished Resume</h1>
      <p>{first === "" ? "Mike" : first}</p>
      <p>{last === "" ? "Wazowski" : last}</p>
      <p>{number === "" ? "(415) 888 8888" : number}</p>
      <p>{email === "" ? "mikewazowski@gmail.com" : email}</p>
      <p>{company === "" ? "nike" : company}</p>
      <p>{position === "" ? "Ux designer" : position}</p>
      <p>{responsibilities === "" ? "Intern" : responsibilities}</p>
      <p>{date === "" ? "mikewazowski@gmail.com" : date}</p>
      <p>{school === "" ? "UC Berkeley": school}</p>
      <p>{degree === "" ? "BS Computer science": degree }</p>
      <p>{enrolled === "" ? "2016": enrolled}</p>
      <p>{graduated === ""? "2020": graduated}</p>
    </div>
  );
}
