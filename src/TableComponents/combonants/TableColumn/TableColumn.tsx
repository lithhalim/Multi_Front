import React, { useContext } from 'react'
import { TableColumnData } from '../TableDataUse/TableColumnData'
import { TableContextApi } from '../contextApiTable/ContextApiTable';
import {AiOutlineSortAscending,AiOutlineSortDescending} from "react-icons/ai";

function TableColumn() {
  const contextApi=useContext(TableContextApi);

  const changeFilterValue=(data:any)=>{
    let {element,typeSort}=contextApi.SortValue;
    if(element==data){
      typeSort=="ASC"?
      contextApi.setSortValue({element:data,typeSort:"DESC"}):
      contextApi.setSortValue({element:"",typeSort:""})
    }else{
      contextApi.setSortValue({element:data,typeSort:"ASC"})
    }
 }

  return (
    <thead>
        <tr>
            {TableColumnData.map(({name,value},i)=>(
                <th key={i}  
                    onClick={()=>{changeFilterValue(value)}}>{name}
                    {contextApi.SortValue.element==value&&contextApi.SortValue.typeSort=="DESC"?
                    <span className='sort-icon'><AiOutlineSortDescending/></span>:""}
                    {contextApi.SortValue.element==value&&contextApi.SortValue.typeSort=="ASC"?
                    <span className='sort-icon'><AiOutlineSortAscending/></span>:""}
                </th>
            ))}
        </tr>
    </thead>

  )
}

export default TableColumn