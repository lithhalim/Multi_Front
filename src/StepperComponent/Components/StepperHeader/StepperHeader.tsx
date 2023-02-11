import React from 'react'
import {BsCircle,BsFillRecordCircleFill,BsCheckCircleFill} from "react-icons/bs";
let ItemsText=[{text:"select the item",number:1},{text:"get the items",number:2},{text:"optimize the Items",number:3}]
import style from "./style/style.module.scss";

function StepperHeader({step}) {
  return (
        <div className={style['header-container']}>
            {ItemsText.map(({text,number}:any,i:any)=>(
            <div className={style["stepper-icons-container"]} key={i}>
                    <div className={style["icon"]}>
                      {step <number&&<p>{<BsCircle/>}</p>}
                      {step ==number&&<p>{<BsFillRecordCircleFill/>}</p> }
                      {step >number&&<p>{<BsCheckCircleFill/>}</p>}
                    </div>
                    <div className={style["text"]}>
                      {text}
                    </div>
            </div>      
            ))}
        </div>
  )
}

export default StepperHeader