import ResumeForm from "./ResumeForm";
import Resume from "./Resume";
import { useState } from "react";

export default function Dashboard() {
  const [basicInputs, setBasicInputs] = useState({});
  const [experienceInputs, setExperienceInputs] = useState({});
  const [eduInputs, setEduInputs] = useState({});
  const [isDisplayed, setIsDisplayed] = useState(false);

 

  const handleBasicInputs = (event) => {
    const { name, value } = event.target;
    setBasicInputs((values) => ({ ...values, [name]: value }));
  };

  const handleExperienceInputs = (event) => {
    const { name, value } = event.target;
    setExperienceInputs((prevstate) => ({ ...prevstate, [name]: value }));
  };

  const handleEduInputs = (event) => {
    const { name, value } = event.target;
    setEduInputs((prevstate) => ({ ...prevstate, [name]: value }));
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (!isDisplayed) {
      setIsDisplayed(true);
    }
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
        setShown={handleClick}
       
      />

      <Resume
        basicInputs={basicInputs}
        experienceInputs={experienceInputs}
        eduInputs={eduInputs}
        isDisplayed={isDisplayed}
      />
    </body>
  );
}
