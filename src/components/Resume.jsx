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
    <div className="h-[45rem] bg-zinc-50 w-1/2  ml-3 text-md">
      <div className="flex justify-center mt-10 "> 
        <p className="text-3xl mr-1">{first === "" ? "Mike" : first}</p>
        <p className="text-3xl">{last === "" ? "Wazowski" : last}</p>
      </div>
      <div className="flex text-zinc-500 justify-around border-y my-4 py-1 w-10/12 m-auto">
        <p>{number === "" ? "(415) 888 8888" : number}</p>
        <p>{email === "" ? "mikewazowski@gmail.com" : email}</p>
      </div>
      <div className="border-b w-10/12 m-auto">
        <p>{company === "" ? "nike" : company}</p>
        <p>{position === "" ? "Ux designer" : position}</p>
        <p>{responsibilities === "" ? "Intern" : responsibilities}</p>
        <p>{date === "" ? "2020-2024" : date}</p>

      </div>
      <p>{school === "" ? "UC Berkeley": school}</p>
      <p>{degree === "" ? "BS Computer science": degree }</p>
      <p>{enrolled === "" ? "2016": enrolled}</p>
      <p>{graduated === ""? "2020": graduated}</p>
    </div>
  );
}
