import React from 'react'
import Stepper from './stepper_Section/Stepper_Section';
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Stepper/>} path='/stepper'/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App