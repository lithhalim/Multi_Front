import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Tree_Checkbox_Icons } from '../iconsUseTreeCheck/IocnsUseTree';
import { Data_Create_Context } from '../../contextApi.tsx/ContextItems';


function MainCheckBox_Tree({Datause,setShowAll,showAll,formik}:any) {
    const {value,label,moduleID,children}=Datause;
    const chngeShowItem=()=>{setShowAll(!showAll)}
    const getElement=useRef<any>(null);
    const [checkElement,setcheckElement]=useState(false)
    const {setDataAdd,DataAdd}=useContext(Data_Create_Context)

    const getPerant=(data:any)=>{
        let Childreen=getElement.current.nextElementSibling.childNodes;
        if(!data.currentTarget.checked==true){
            let checkElement:any=[]
            Childreen.forEach((data:any)=>{
                checkElement.push((data.firstChild.nextSibling.value))
            })
            setDataAdd(!DataAdd)
            formik.values.Employees=formik.values.Employees.filter((data:any)=>(!checkElement.includes(data)))
        }else{
            let checkElement:any=[]
            Childreen.forEach((data:any)=>{
                checkElement.push(data.firstChild.nextSibling.value)
                if(!formik.values.Employees.includes(data.firstChild.nextSibling.value)){
                    formik.values.Employees.push((data.firstChild.nextSibling.value))
                }
            }) 
            setDataAdd(!DataAdd)
        }
    }

    const childreenUse=useMemo(()=>{
            return children.map((data:any)=>`${data.value}`)
    },[])

    useEffect(()=>{
        const Employee=formik.values.Employees;
        if(childreenUse.some((data:any)=>(Employee.includes(data)))){
            setcheckElement(true)
        }else{
            setcheckElement(false)
        }
    },[formik.values,DataAdd])
    


  return (
    <div className='container-expand-checkbox-select' ref={getElement}>
        <ul onClick={chngeShowItem} className='icons-container-checkbox-style'>
            <li>{!showAll?Tree_Checkbox_Icons.expandClose:Tree_Checkbox_Icons.expandOpen}</li>
            <li>{showAll?Tree_Checkbox_Icons.parentOpen:Tree_Checkbox_Icons.parentClose}</li>
            <li>{checkElement?Tree_Checkbox_Icons.check:Tree_Checkbox_Icons.uncheck}</li>
        </ul >
        <label datatype={value} className='container-input'>
            <input type="checkbox" name="Employees" className='input-multibul-checkbox'
                id={moduleID} onClick={getPerant}
                onChange={formik.handleChange} value={value}/>
            <p className='label-checkbox-style'>{label}</p>
        </label>
    </div>
);
}

export default MainCheckBox_Tree;
