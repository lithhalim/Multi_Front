import React,{useEffect,useState,useContext} from 'react';
import "./style/style.scss";
import TableHeader from './combonants/TableHeader/TableHeader';
import PaginationTable from "./combonants/pagination/pagination";
import TableColumn from './combonants/TableColumn/TableColumn';
import TableBody from './combonants/TableBody/TableBody';
import axios from 'axios';
import { TableContextApi } from './combonants/contextApiTable/ContextApiTable';

function TableSection() {
    const [FetchData,setFetchData]=useState(false);
    const ContextApi=useContext(TableContextApi);

    useEffect(()=>{
        const {element,typeSort}=ContextApi.SortValue;
        let url=`http://localhost:5000/AllResturant?LIMIT=${ContextApi.selectRowsLimit}&OFFSET=${ContextApi.OffsetRows}`;
        if(element!==""){
            url+=`&ELEMENT=${element}&TYPESORT=${typeSort}`
        }
        axios.post(url).then((data)=>{
            setFetchData(data.data)
        })
    },[ContextApi])
    
  return (
    <div className='table-container'>
        {FetchData?
            <div>
                <TableHeader/>
                <div className='table-fixed'>
                    <table>
                        <TableColumn/>
                        <TableBody datause={FetchData}/>
                    </table>
                </div>
                <PaginationTable/>
            </div>
        :<></>}
    </div>
  )
}

export default TableSection