import React, { useState } from "react";
import { Formik, Form } from "formik";
import StepperHeader from "./StepperHeader/StepperHeader";
import Stepper_Next_Prev from "./Stepper_next_prev/Stepper_Next_Prev";
import { Stepper_Datause } from "./DataUse_Stepper/DataUse_Stepper";
import Stepper_Body from "./Stepper_Body/Stepper_Body";

const Stepper_Page_Main = () => {
  const [step, setStep] = useState(1);
  const getSubmitData=(data)=>{}
  const {AdressSchema,DataUse,NameSchema,
    collageSchema,initialValues}=Stepper_Datause

  let SchemaUse
  switch (step) {
    case 1:SchemaUse=AdressSchema
      break;
    case 2:SchemaUse=NameSchema
      break;
    case 3:SchemaUse=collageSchema
      break;  
  }

  return (
          <>
              <Stepper_Next_Prev setStep={setStep} step={step}/>
              <StepperHeader step={step}/>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={SchemaUse}
                    onSubmit={getSubmitData}>
                    {({ isSubmitting,isValid,values, }) => (
                      <Form>
                        <Stepper_Body 
                        DataUse={DataUse} 
                        step={step}
                        isSubmitting={isSubmitting}
                        isValid={isValid}
                        values={values}
                        />
                      </Form>
                    )}
                  </Formik>
          </>
  );
};

export default Stepper_Page_Main;

