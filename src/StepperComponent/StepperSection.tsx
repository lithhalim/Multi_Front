import React from "react";
import Header from "../HeaderSection/Header";
import style from "./style/style.module.scss";
import Stepper_Page_Main from "./Components/Stepper_Main";

const Stepper_Page = () => {

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <Header/>
          <div className= {style["container-stepper"]}>
              <Stepper_Page_Main/>
          </div>
      </div>
    </div>
  );
};

export default Stepper_Page;
