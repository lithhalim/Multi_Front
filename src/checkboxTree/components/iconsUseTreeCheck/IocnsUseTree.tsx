import React from "react";
import {MdAddBox,MdIndeterminateCheckBox,MdFolderOpen} from "react-icons/md"
import {FcAudioFile,FcExpand,FcNext,FcOpenedFolder,FcOk,FcPlus} from "react-icons/fc";

export const Tree_Checkbox_Icons = {
    check: <FcOk style={{fontSize:"1.3em",marginRight:"3px",marginTop:"3px"}}/>,
    uncheck: <FcPlus style={{fontSize:"1.3em",marginRight:"3px",marginTop:"3px"}}/>,
    halfCheck: (
      <MdIndeterminateCheckBox className="rct-icon rct-icon-half-check" />
    ),
    expandClose: (
      <FcNext style={{fontSize:"1em",marginRight:"2px",marginTop:"5px"}} />
    ),
    expandOpen: (
      <FcExpand style={{fontSize:"1em",marginRight:"2px",marginTop:"5px"}}/>
    ),
    expandAll: <MdAddBox className="rct-icon rct-icon-expand-all" />,
    collapseAll: (
      <MdIndeterminateCheckBox className="rct-icon rct-icon-collapse-all" />
    ),
    parentClose: <FcOpenedFolder style={{fontSize:"1.5em",marginRight:"3px"}}/>,
    parentOpen: <MdFolderOpen style={{color:"orange",fontSize:"1.5em",marginRight:"3px"}} />,
    leaf: <FcAudioFile style={{fontSize:"1.5em",marginRight:"3px"}}/>
  };
