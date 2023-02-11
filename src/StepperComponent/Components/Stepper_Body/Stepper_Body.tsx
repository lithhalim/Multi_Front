import React from 'react'
import InputFiled from '../../../FormComponents/InputFiled/InputFiled'
import Button_Submit from '../../../FormComponents/Button_Submit/Button_Submit'

function Stepper_Body({step,DataUse,isSubmitting,isValid,values}) {
  return (
    <div>
        {step==1&&
            (<div>
                <li>
                    <InputFiled  dataUse={DataUse[0][0]}  />
                    <InputFiled  dataUse={DataUse[0][1]}  />
                    <InputFiled  dataUse={DataUse[0][2]}  />
                </li>
            </div>)}
        {step==2&&(<div>
                <li>
                     <InputFiled  dataUse={DataUse[1][0]}  />
                     <InputFiled  dataUse={DataUse[1][1]}  />
                     <InputFiled  dataUse={DataUse[1][2]}  />
                </li>
            </div>)}
        {step==3&&(<div>
                <li>
                     <InputFiled  dataUse={DataUse[2][0]}  />
                     <InputFiled  dataUse={DataUse[2][1]}  />
                     <InputFiled  dataUse={DataUse[2][2]}  />
                     <Button_Submit 
                     isSubmitting={isSubmitting} 
                     isValid={isValid} 
                     textButton="Submit"
                     />
                </li>
            </div>)}
    </div>
  )
}

export default Stepper_Body