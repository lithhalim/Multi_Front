import React from 'react'
import "./style/style.scss"
import { Tree_Checkbox_Icons } from '../iconsUseTreeCheck/IocnsUseTree';

function SingleInput({Datause,formik}:any) {
    const {value,moduleID,label}=Datause;
    let check= formik.values.Employees.includes(`${value}`)
  return (
    <label className='checkbox-input-single' >
      <div className="icons-container-items">
        <li className={`${formik.values.Employees.includes(`${value}`)?"active":""}`}>{Tree_Checkbox_Icons.leaf}</li>
        <li>{check?Tree_Checkbox_Icons.check:Tree_Checkbox_Icons.uncheck}</li>
      </div>
        <input type="checkbox" name="Employees" id={moduleID} className='input-singel-checkbox'
            onChange={formik.handleChange} value={value} />
        <p className='label-text-checkbox-style'>{label}</p>
    </label>
  )
}

export default SingleInput