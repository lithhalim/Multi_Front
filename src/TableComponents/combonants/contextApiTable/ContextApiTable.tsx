import React, { useState } from "react";
export const TableContextApi=React.createContext<any|null>(null);

export function TableProvider(props:any) {
  
    const [SearchValue,setSearchValue]=useState("");
    const [selectRowsLimit,setselectRowsLimit]=useState(
      window.localStorage.limitRows?window.localStorage.limitRows:5);
    const [OffsetRows,setOffsetRows]=useState(0);
    const [SortValue,setSortValue]=useState({element:"",typeSort:""});
    
  return (
    <TableContextApi.Provider value={{
            SearchValue,setSearchValue,
            selectRowsLimit,setselectRowsLimit,
            OffsetRows,setOffsetRows,
            SortValue,setSortValue}}>
        {props.children}
    </TableContextApi.Provider>
  ) 
}
