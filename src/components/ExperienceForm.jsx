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
        <input value={company} onChange={setCompanyProp} type="text" name="company" id="" className="m-2" />
        <input value={position} onChange={setPositionProp} type="text" name="position" id="" className="m-2" />
        <input value={responsibilities} onChange={setResponsibilitiesProp} type="text" name="responsibilities" id=""  className="m-2"/>
        <input value={date} type="text" onChange={setDateProp} name="date" id="" className="m-2" />
      </form>
    </div>
  );
}
