import React, { useEffect, useState } from "react";
export const Data_Create_Context=React.createContext<any|null>(null);

interface ContextChildreen{
  children:React.ReactNode
}

export function DataProvider(props:ContextChildreen) {
    const [DataAdd,setDataAdd]=useState<any>(false);
          
  return (
    <Data_Create_Context.Provider value={{DataAdd,setDataAdd}}>
        {props.children}
    </Data_Create_Context.Provider>
  ) 
}
