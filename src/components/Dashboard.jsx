import ResumeForm from "./ResumeForm";
import Resume from "./Resume";
import { useState } from "react";

export default function Dashboard() {
  const [basicInputs, setBasicInputs] = useState({});
  const [experienceInputs, setExperienceInputs] = useState({});
  const [eduInputs, setEduInputs] = useState({});

  const handleBasicInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setBasicInputs((values) => ({ ...values, [name]: value }));
  };

  const handleExperienceInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setExperienceInputs((prevstate) => ({ ...prevstate, [name]: value }));
  };

  const handleEduInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEduInputs((prevstate) => ({ ...prevstate, [name]: value }));
  };

  return (
    <body className=" w-full h-[100vh] flex justify-around">
      <ResumeForm
        basicInputs={basicInputs}
        experienceInputs={experienceInputs}
        eduInputs={eduInputs}
        setBasicInputsProps={handleBasicInputs}
        setExperienceInputsProps={handleExperienceInputs}
        setEduInputsProps={handleEduInputs}
      />

      <Resume
        basicInputs={basicInputs}
        experienceInputs={experienceInputs}
        eduInputs={eduInputs}
      />
    </body>
  );
}
