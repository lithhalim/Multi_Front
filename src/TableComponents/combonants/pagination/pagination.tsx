import React, {  useContext, useEffect, useState } from 'react';
import "./style/style.scss";
import axios from "axios";
import { TableContextApi } from '../contextApiTable/ContextApiTable';
import {
  BiArrowToLeft,BiArrowFromLeft,
  BiChevronLeft,BiChevronRight} from "react-icons/bi"

function PaginationTable() {
  const ContextApi=useContext(TableContextApi);
  const limitNumber=ContextApi.selectRowsLimit
  const [PageNumber,setPageNumber]=useState<number>(0);
  const [countNumber,setcountNumber]=useState(0);
  let LastPage=Math.ceil(countNumber/limitNumber)


  useEffect(()=>{
    axios.post("http://localhost:5000/countResturant").then((data)=>{
      let CountNumber=data.data[0]?.count;
      setcountNumber(CountNumber)
  })
  },[ContextApi])

  const BackOnePage=()=>{
      if(PageNumber<1)return
      let NewPageNumber=PageNumber-1;
      ContextApi.setOffsetRows(NewPageNumber*limitNumber)  
      setPageNumber(NewPageNumber)  
  }

  const ForwordOnePage=()=>{
    if(Math.ceil(countNumber/limitNumber)==PageNumber+1)return
    let NewPageNumber=PageNumber+1;
    ContextApi.setOffsetRows(NewPageNumber*limitNumber)
    setPageNumber(NewPageNumber)  
  }


  return (
    <div className='container-pagination-section-grid-style'>
        <div className='number-rows'>
            <span>{((PageNumber)*limitNumber)+1}</span>
            <p>to</p> 
            <span>{(PageNumber+1)*limitNumber>countNumber?countNumber:(PageNumber+1)*limitNumber}</span>
            <p>of</p>
            <span>{countNumber}</span>
        </div>
        <ul className='container-next-back'>
            <li className={`${PageNumber>0?"active":""}`}><BiArrowToLeft/></li>
            <li className={`${PageNumber>0?"active":""}`} onClick={BackOnePage}><BiChevronLeft/></li>
              <div className='container-text'>Page <span>{PageNumber+1}</span> of <span>{LastPage}</span></div>
            <li className={`${PageNumber+1<LastPage?"active":""}`} onClick={ForwordOnePage}><BiChevronRight/></li>
            <li className={`${PageNumber+1<LastPage?"active":""}`}><BiArrowFromLeft/></li>
        </ul>
    </div>
  )
}

export default PaginationTable