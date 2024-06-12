/* eslint-disable react/prop-types */

const dummyText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export default function Resume({ basicInputs, experienceInputs, eduInputs, isDisplayed }) {
  return (
    <div className="h-[45rem] bg-zinc-50 w-2/5  ml-3 text-sm text-zinc-500">
      <div className="flex justify-center mt-10 uppercase text-black">
        <p className="text-3xl mr-1">{basicInputs.firstname || "Mike"}</p>
        <p className="text-3xl">{basicInputs.lastname || "Wazowski"}</p>
      </div>
      <div className="flex  justify-around border-y my-4 py-2 w-10/12 m-auto">
        <p>{basicInputs.phonenumber || "(415) 888 8888"}</p>
        <p>{basicInputs.email || "mikewazowski@gmail.com"}</p>
      </div>
      <div className="border-b w-10/12 m-auto py-4">
        <p className="font-bold text-left text-black uppercase">Experience</p>
        <div className="flex justify-between items-center">
          <div className="my-2">
            <p className="text-left font-serif text-black">
              {isDisplayed? experienceInputs.position : "Barista"}
            </p>
            <p className="text-left">
              {isDisplayed? experienceInputs.company : "Equator Coffee"}
            </p>
          </div>
          <p>{isDisplayed? experienceInputs.date : "2020-2024"}</p>
        </div>
        <p className="text-left">
          {isDisplayed? experienceInputs.responsibilities : dummyText}
        </p>
      </div>
      <div className="w-10/12 m-auto">
        <p className="font-bold text-left text-black uppercase">Education</p>
        <div className="flex justify-between">
          <div className="flex">
            <p className="mr-2">{eduInputs.school || "UC Berkeley"}</p>
            <p>{eduInputs.degree || "BS Computer Science"}</p>
          </div>
          <div className="flex">
            <p className="mr-2">{eduInputs.enrolled || "2016"}</p>
            <p>{eduInputs.graduated || "2020"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
