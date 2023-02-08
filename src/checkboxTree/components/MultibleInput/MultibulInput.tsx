import React,{useState} from 'react';
import "./style/style.scss";
import SingleInput from '../SingleUnput/singleInput';
import MainCheckBox_Tree from './MainCheckBox_Tree';

function MultibulInput({formik,Datause}:any) {
    const {children}=Datause;
    const [showAll,setShowAll]=useState(false);
    
  return (
    <div className="multibule-checkbox-tree">
        <MainCheckBox_Tree Datause={Datause} formik={formik}
        showAll={showAll} setShowAll={setShowAll}/>

        <div className={`secand-input ${showAll?"show":"hide"}`}>
            {children.map((data:any,i:any)=>(
                <SingleInput Datause={data} formik={formik} key={i}/>
            ))}
        </div>
    </div>
  )
}

export default MultibulInput