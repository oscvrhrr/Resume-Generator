/* eslint-disable react/prop-types */
export default function EducationalForm({
  school,
  degree,
  enrolled,
  graduated,
  setSchoolProp,
  setDegreeProp,
  setEnrolledProp,
  setGraduatedProp
}) {
  return (
    <div>
      <form action="" className="flex flex-col">
        <h2 className="m-4 text-left">Education</h2>
        <input value={school} onChange={setSchoolProp} type="text" name="school" id="" className="m-2 border rounded" placeholder="Institution" />
        <input value={degree} onChange={setDegreeProp} type="text" name="degree" id="" className="m-2 border rounded" placeholder="Major" />
        <input value={enrolled} onChange={setEnrolledProp} type="text" name=" enrolled" className="m-2 border rounded" placeholder="Date Enrolled"/>
        <input value={graduated} onChange={setGraduatedProp} type="text" name="graduated" className="m-2 border rounded" placeholder="Graduation" />
      </form>
    </div>
  );
}
