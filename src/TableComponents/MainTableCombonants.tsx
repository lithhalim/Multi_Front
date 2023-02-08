import React from 'react'
import TableSection from './Table'
import { TableProvider } from './combonants/contextApiTable/ContextApiTable'

function MainTableCombonants() {
  return (
    <TableProvider>
        <TableSection/>   
    </TableProvider>
  )
}

export default MainTableCombonants