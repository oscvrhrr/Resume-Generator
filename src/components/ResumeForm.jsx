/* eslint-disable react/prop-types */
import BasicInfoForm from "./BasicInfoForm";
import ExperienceForm from "./ExperienceForm";
import EducationalForm from "./EducationalForm";

export default function ResumeForm({
  basicInputs,
  setBasicInputsProps,

  experienceInputs,
  setExperienceInputsProps,

  eduInputs,
  setEduInputsProps,
  setShown,
}) {
  return (
    <form
    className="bg-indigo-300 w-2/5 h-[40rem] rounded-md p-5 overflow-auto"
    >
      <h1 className="text-center py-4 font-bold text-5xl bg-gradient-to-r from-rose-100 to-teal-100 bg-clip-text text-transparent">
        CV Generator
      </h1>
      <BasicInfoForm
        basicInputs={basicInputs}
        setBasicInputsProps={setBasicInputsProps}
      />
      <ExperienceForm
        experienceInputs={experienceInputs}
        setExperienceInputsProps={setExperienceInputsProps}
        setShown={setShown}
      />
      <EducationalForm
        eduInputs={eduInputs}
        setEduInputsProps={setEduInputsProps}
      />
    </form>
  );
}
