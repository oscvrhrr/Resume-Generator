/* eslint-disable react/prop-types */

const dummyText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

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
  graduated,
}) {
  return (
    <div className="h-[45rem] bg-zinc-50 w-2/5  ml-3 text-sm text-zinc-500">
      <div className="flex justify-center mt-10 uppercase text-black">
        <p className="text-3xl mr-1">{first === "" ? "Mike" : first}</p>
        <p className="text-3xl">{last === "" ? "Wazowski" : last}</p>
      </div>
      <div className="flex  justify-around border-y my-4 py-2 w-10/12 m-auto">
        <p>{number === "" ? "(415) 888 8888" : number}</p>
        <p>{email === "" ? "mikewazowski@gmail.com" : email}</p>
      </div>
      <div className="border-b w-10/12 m-auto py-4">
        <p className="font-bold text-left text-black uppercase">Experience</p>
        <div className="flex justify-between items-center">
          <div className="my-2">
            <p className="text-left font-serif text-black">
              {position === "" ? "Barista" : position}
            </p>
            <p className="text-left">
              {company === "" ? "Equator Coffee" : company}
            </p>
          </div>
          <p>{date === "" ? "2020-2024" : date}</p>
        </div>
        <p className="text-left">
          {responsibilities === "" ? dummyText : responsibilities}
        </p>
      </div>
      <div className="w-10/12 m-auto">
        <p className="font-bold text-left text-black uppercase">Education</p>
        <div className="flex justify-between">
          <div className="flex">
            <p className="mr-2">{school === "" ? "UC Berkeley" : school}</p>
            <p>{degree === "" ? "BS Computer Science" : degree}</p>
          </div>
          <div className="flex">
            <p className="mr-2">{enrolled === "" ? "2016" : enrolled}</p>
            <p>{graduated === "" ? "2020" : graduated}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
