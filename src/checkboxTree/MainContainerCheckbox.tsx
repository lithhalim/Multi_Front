import React from 'react'
import "./style/style.scss"
import Checkbox from './checkbox'
import { DataProvider } from './contextApi.tsx/ContextItems'
function MainContainerCheckbox() {
  return (
    <DataProvider>
      <div className='container-main-checkbox-tree'>
          <Checkbox/>
          <img src="https://img.freepik.com/vecteurs-libre/illustration-concept-pensee-critique_114360-8082.jpg?w=2000" alt="" />
      </div>
    </DataProvider>
  )
}

export default MainContainerCheckbox