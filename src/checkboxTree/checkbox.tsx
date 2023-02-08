import React,{useState,useRef,useEffect, useContext} from 'react';
import { useFormik } from 'formik';
import { PermessionConstant } from './Datause/DatauseFile';
import SingleInput from './components/SingleUnput/singleInput';
import MultibulInput from './components/MultibleInput/MultibulInput';
import "./style/style.scss";
import { Data_Create_Context } from './contextApi.tsx/ContextItems';

const Checkbox = () => {
    const [InitialValue,setInitialValue]=useState(['1','2','5','10'])
    const {DataAdd}=useContext(Data_Create_Context)
    const fetDataForm=useRef<any>()
    const GetSubmit=(Value:any)=>{}
    const formik = useFormik({
        initialValues: {
        Employees: InitialValue,
        },
        onSubmit: GetSubmit,
    });

    useEffect(()=>{
        console.log(formik.values)
    },[formik.values,DataAdd])


    return (
    <form onSubmit={formik.handleSubmit} className='check-box-container-all' ref={fetDataForm}>
        {PermessionConstant.map((data:any,i)=>(
            <div key={i} >
                {!data?.children?
                <SingleInput formik={formik} Datause={data}/>:
                <MultibulInput formik={formik} Datause={data}/>
                }
            </div>
        ))}
    </form>
  );
};

export default Checkbox