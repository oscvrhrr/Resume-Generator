/* eslint-disable react/prop-types */


export default function ExperienceForm({
  company,
  setCompanyProp,
  position,
  setPositionProp,
  responsibilities,
  setResponsibilitiesProp,
  date,
  setDateProp,
}) {
  return (
    <div >
      <form action="" className="flex flex-col">
        <h2 className="m-4 text-left font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Experience Section</h2>
        <input value={company} onChange={setCompanyProp} type="text" name="company" id="" className="m-2 border rounded" placeholder="Company" />
        <input value={position} onChange={setPositionProp} type="text" name="position" id="" className="m-2 border rounded" placeholder="Job title" />
        <input value={responsibilities} onChange={setResponsibilitiesProp} type="text" name="responsibilities" id=""  className="m-2 border rounded" placeholder="Job Description"/>
        <input value={date} type="text" onChange={setDateProp} name="date" id="" className="m-2 border rounded" placeholder="Date" />
      </form>
    </div>
  );
}
