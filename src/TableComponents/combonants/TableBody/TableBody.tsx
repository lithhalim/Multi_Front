import React from 'react';
import { TableColumnData } from '../TableDataUse/TableColumnData';

function TableBody({datause}:any) {    
  return (
    <tbody >
            {datause.map((data:any,i:any)=>(
                    <tr key={i}>
                        {TableColumnData.map(({value},i)=>(
                            <td key={i}>{data[value]?data[value]:""}</td>
                        ))}
                    </tr>            
            ))}
    </tbody>

  )
}

export default TableBody