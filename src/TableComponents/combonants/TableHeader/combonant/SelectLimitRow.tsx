import React, { useContext ,useEffect ,useRef,memo} from 'react'
import { TableContextApi } from '../../contextApiTable/ContextApiTable';

function SelectLimitRow() {
  const TableContext=useContext(TableContextApi);
  const selectOption=useRef<any>()

    const SelectLimitTable=(event:any)=>{
      TableContext.setselectRowsLimit(event.target.value);
      window.localStorage.limitRows=event.target.value;
      TableContext.setselectRowsLimit(event.target.value)
    }

    useEffect(()=>{
      selectOption.current.value=window.localStorage.limitRows
    },[])
  
  return (
    <div className='select-limit-rows'>
        <p>Limits Rows :</p>
        <select onChange={SelectLimitTable} ref={selectOption}>
            {datause.map(({name,value},i)=>(
                <option   value={value} key={i}>{name}</option>))}        
        </select>
    </div>
  )
}

export default memo(SelectLimitRow) 

let datause=[
  {name:"5 Page",value:5},{name:"6 Page",value:6},
  {name:"7 Page",value:7},{name:"9 Page",value:9},
  {name:"11 Page",value:11},{name:"13 Page",value:13},
]
