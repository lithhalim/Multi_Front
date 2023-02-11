import React from 'react'
import {AiOutlineDoubleRight,AiOutlineDoubleLeft} from "react-icons/ai"
import style from "./style/style.module.scss";

function Stepper_Next_Prev({step, setStep}) {
    const handleNext = () => {
      if(step<3){
        setStep(step + 1)
      }
    };
    const handlePrev = () =>{ 
      if(step>1){
        setStep(step - 1)
      }
    };
  
  return (
        <div className={style["container-next-prev"]}>
            <div onClick={handlePrev} className={style["left"]}><AiOutlineDoubleLeft/></div>
            <div onClick={handleNext} className={style["right"]}><AiOutlineDoubleRight/></div>
        </div>
  )
}

export default Stepper_Next_Prev